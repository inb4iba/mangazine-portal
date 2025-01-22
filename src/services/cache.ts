export type OfferDetail = {
  title: string;
  img: string;
  price: string;
  fullPrice: string;
};

type CacheValue = {
  value: OfferDetail[];
  expiration: number;
};

const cache: Record<string, CacheValue> = {};

export const setCache = (key: string, value: OfferDetail[]) => {
  console.log(`Salvando cache: ${key}`);
  cache[key] = {
    value,
    expiration: Date.now() + 1000 * 60 * 60 * 24,
  };
};

export const getCache = (key: string) => {
  console.log(`Pegando cache: ${key}`);
  const cachedItem = cache[key];
  if (!cachedItem) return null;
  return cachedItem.value;
};

export const isCacheValid = (key: string) => {
  const cachedItem = cache[key];
  if (!cachedItem) return false;
  if (Date.now() >= cachedItem.expiration) {
    console.log(`Deletando cache expirado: ${key}`);
    delete cache[key];
    return false;
  }
  return true;
};
