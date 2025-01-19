export const getTotalPages = (postsCount: number, perPage: number) => {
  if (perPage === 1) return postsCount;
  if (postsCount % perPage === 0) return postsCount / perPage;
  return Math.floor(postsCount / perPage) + 1;
};
