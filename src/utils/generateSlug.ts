export const generateSlug = (text: string) => {
  return text.toLowerCase().split(" ").join("-");
};
