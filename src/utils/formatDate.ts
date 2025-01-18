export const formatDate = (date: string | null) => {
  if (!date) return date;
  return date.split("-").reverse().join("/");
};
