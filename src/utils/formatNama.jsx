export const formatNama = (nama) => {
  return nama
    .toLowerCase() // Semua huruf jadi kecil dulu
    .split(" ") // Pisah jadi array kata
    .map((kata) => kata.charAt(0).toUpperCase() + kata.slice(1)) // Kapital tiap kata
    .join(" "); // Gabung lagi jadi string
};
