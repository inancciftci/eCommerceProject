export const trToEn = (text) => {
  return text
    .replaceAll("Ğ", "g")
    .replaceAll("Ü", "u")
    .replaceAll("Ş", "s")
    .replaceAll("I", "i")
    .replaceAll("İ", "i")
    .replaceAll("Ö", "o")
    .replaceAll("Ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
};

export const categoryGender = (gender) => {
  if (gender === "k") {
    return "Kadın";
  }
  if (gender === "e") {
    return "Erkek";
  }
};

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
