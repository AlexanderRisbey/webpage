const DEFAULT_RECAPTCHA_SITE_KEY = '6LdvA8MpAAAAAPtiNYH7ssuEA_VUGC6OeaVfwKj3';

const trimOrNull = (value) => {
  if (!value || typeof value !== 'string') {
    return null;
  }
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
};

const readMetaSiteKey = () => {
  if (typeof document === 'undefined') {
    return null;
  }
  const meta = document.querySelector('meta[name="recaptcha-site-key"]');
  return trimOrNull(meta?.content);
};

const readGlobalSiteKey = () => trimOrNull(window?.__LYDIARX_RECAPTCHA_SITE_KEY__);

const defaultKeyForHost = (host) => {
  if (!host) {
    return null;
  }

  if (host === 'localhost' || host === '127.0.0.1') {
    return null;
  }

  if (host === 'lydiarx.com' || host.endsWith('.lydiarx.com')) {
    return DEFAULT_RECAPTCHA_SITE_KEY;
  }

  return null;
};

export const getRecaptchaSiteKey = () => {
  if (typeof window === 'undefined') {
    return { siteKey: null, source: 'ssr' };
  }

  const overrideKey = readGlobalSiteKey();
  if (overrideKey) {
    return { siteKey: overrideKey, source: 'global' };
  }

  const metaKey = readMetaSiteKey();
  if (metaKey) {
    return { siteKey: metaKey, source: 'meta' };
  }

  const hostKey = defaultKeyForHost(window.location.hostname);
  if (hostKey) {
    return { siteKey: hostKey, source: 'default' };
  }

  return { siteKey: null, source: 'unconfigured' };
};

export const hasRecaptchaSiteKey = () => Boolean(getRecaptchaSiteKey().siteKey);
