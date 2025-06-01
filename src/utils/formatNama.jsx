export const formatNama = (nama) => {
  return nama
    .toLowerCase()
    .split(" ")
    .map((kata) => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(" ");
};
