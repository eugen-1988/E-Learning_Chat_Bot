import { franc } from "franc-min";

export const detectLanguage = (text) => {
  const langCode = franc(text);
  switch (langCode) {
    case "deu":
      return "de";
    case "ron":
      return "ro";
    case "eng":
      return "en";
    case "fra":
      return "fr";
    case "spa":
      return "es";
    case "rus":
      return "ru";
    default:
      return "en";
  }
};
