export const SITE_BASE_URL = new URL('../', import.meta.url);
export const ASSET_BASE_URL = new URL('../assets/', import.meta.url);

export const toHref = (base, path = '') => new URL(path, base).href;
export const pageHref = (path = '') => toHref(SITE_BASE_URL, path);
export const assetHref = (path = '') => toHref(ASSET_BASE_URL, path);

export const isHomePath = () => {
  const path = window.location.pathname || '';
  if (path === '/' || path === '') {
    return true;
  }
  if (path.endsWith('/index.html')) {
    return true;
  }

  const basePathname = SITE_BASE_URL.pathname.replace(/\/$/, '');
  return (
    (basePathname && path === basePathname) ||
    (basePathname && path === `${basePathname}/`)
  );
};
