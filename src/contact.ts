export const BRAND = "Solar Security Automation";
export const PHONE_DISPLAY = "418 103 4746";
export const PHONE_TEL = "+524181034746";
export const WHATSAPP = "524181034746";
export const CITY = "Dolores Hidalgo, Gto";
export const ADDRESS = "Yuriria 24";
export const ADDRESS_FULL =
  "Yuriria 24, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Gto.";
export const MAP_QUERY = encodeURIComponent(
  "Yuriria 24, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Guanajuato",
);
export const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&z=13&output=embed`;
export const MAP_LINK = `https://maps.google.com/?q=${MAP_QUERY}`;

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_WA =
  "Hola, me interesa una visita para energía solar, seguridad o automatización.";
