const STYLE_VARIANT_KEY = 'lydiarx-style-variant';
const STYLE_VARIANT_PARAM = 'styleVariant';
const VALID_VARIANTS = new Set(['A', 'B', 'C']);

const safeLocalStorage = {
  getItem(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  },
  setItem(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_) {
      /* no-op */
    }
  },
};

const normalizeVariant = (value) => {
  if (!value) {
    return null;
  }
  const upper = String(value).toUpperCase();
  return VALID_VARIANTS.has(upper) ? upper : null;
};

const readVariantFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return normalizeVariant(params.get(STYLE_VARIANT_PARAM));
};

const readVariantFromStorage = () => normalizeVariant(safeLocalStorage.getItem(STYLE_VARIANT_KEY));

const writeVariantToStorage = (variant) => safeLocalStorage.setItem(STYLE_VARIANT_KEY, variant);

const applyVariantMetadata = (variant) => {
  if (document?.documentElement) {
    document.documentElement.setAttribute('data-style-variant', variant);
  }
  window.__LYDIARX_STYLE_VARIANT__ = variant;
};

const pickDefaultVariant = () => STYLE_VARIANTS.A;

export const getStyleVariant = () => {
  const variantFromUrl = readVariantFromUrl();
  if (variantFromUrl) {
    writeVariantToStorage(variantFromUrl);
    applyVariantMetadata(variantFromUrl);
    return variantFromUrl;
  }

  const storedVariant = readVariantFromStorage();
  if (storedVariant) {
    applyVariantMetadata(storedVariant);
    return storedVariant;
  }

  const variant = pickDefaultVariant();
  writeVariantToStorage(variant);
  applyVariantMetadata(variant);
  return variant;
};

export const forceStyleVariant = (variant) => {
  const normalized = normalizeVariant(variant);
  if (!normalized) {
    return null;
  }
  writeVariantToStorage(normalized);
  applyVariantMetadata(normalized);
  return normalized;
};

export const STYLE_VARIANTS = Object.freeze({
  A: 'A',
  B: 'B',
  C: 'C',
});
