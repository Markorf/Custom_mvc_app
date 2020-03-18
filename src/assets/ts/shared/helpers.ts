const _getHash = (hash: string, delimter: string) =>
  hash.includes(delimter)
    ? hash.split(new RegExp(delimter))[0] + "/" + "{slug}"
    : hash;

export const getParam = (hash: string) =>
  hash.includes("/") ? hash.split("/")[1] : hash;

export const getConvertedRoute = (hash: string) =>
  _getHash(hash, "/{").toLowerCase();
export const getConvertedParam = (hash: string) =>
  _getHash(hash, "/").toLowerCase();
