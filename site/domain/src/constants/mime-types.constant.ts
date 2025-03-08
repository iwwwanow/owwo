import { MimeTypesEnum } from "../enums/index.js";

// TODO оставь только те, что будут поддерживаться

export const mimeTypes: { [extension: string]: MimeTypesEnum } = {
  // Текстовые файлы
  txt: MimeTypesEnum.TXT,
  csv: MimeTypesEnum.CSV,
  html: MimeTypesEnum.HTML,
  htm: MimeTypesEnum.HTM,
  css: MimeTypesEnum.CSS,
  js: MimeTypesEnum.JS,
  json: MimeTypesEnum.JSON,
  xml: MimeTypesEnum.XML,
  md: MimeTypesEnum.MD,

  // Изображения
  png: MimeTypesEnum.PNG,
  jpg: MimeTypesEnum.JPG,
  jpeg: MimeTypesEnum.JPEG,
  gif: MimeTypesEnum.GIF,
  bmp: MimeTypesEnum.BMP,
  webp: MimeTypesEnum.WEBP,
  svg: MimeTypesEnum.SVG,
  ico: MimeTypesEnum.ICO,

  // Аудио
  mp3: MimeTypesEnum.MP3,
  wav: MimeTypesEnum.WAV,
  ogg: MimeTypesEnum.OGG,
  m4a: MimeTypesEnum.M4A,
  flac: MimeTypesEnum.FLAC,

  // Видео
  mp4: MimeTypesEnum.MP4,
  mov: MimeTypesEnum.MOV,
  wmv: MimeTypesEnum.WMV,
  flv: MimeTypesEnum.FLV,
  avi: MimeTypesEnum.AVI,
  mkv: MimeTypesEnum.MKV,
  webm: MimeTypesEnum.WEBM,

  // Архивы и сжатые файлы
  zip: MimeTypesEnum.ZIP,
  rar: MimeTypesEnum.RAR,
  "7z": MimeTypesEnum.SEVENZ,
  tar: MimeTypesEnum.TAR,
  gz: MimeTypesEnum.GZ,
  bz: MimeTypesEnum.BZ,
  bz2: MimeTypesEnum.BZ2,

  // Документы
  pdf: MimeTypesEnum.PDF,
  doc: MimeTypesEnum.DOC,
  docx: MimeTypesEnum.DOCX,
  xls: MimeTypesEnum.XLS,
  xlsx: MimeTypesEnum.XLSX,
  ppt: MimeTypesEnum.PPT,
  pptx: MimeTypesEnum.PPTX,
  odt: MimeTypesEnum.ODT,
  ods: MimeTypesEnum.ODS,

  // Шрифты
  ttf: MimeTypesEnum.TTF,
  otf: MimeTypesEnum.OTF,
  woff: MimeTypesEnum.WOFF,
  woff2: MimeTypesEnum.WOFF2,

  // Приложения и двоичные форматы
  exe: MimeTypesEnum.EXE,
  bin: MimeTypesEnum.BIN,
  dmg: MimeTypesEnum.DMG,
  iso: MimeTypesEnum.ISO,

  // Другие типы
  apk: MimeTypesEnum.APK,
  app: MimeTypesEnum.APP,

  // Расширенные списки
  rtf: MimeTypesEnum.RTF,
  psd: MimeTypesEnum.PSD,
  eps: MimeTypesEnum.EPS,
  ai: MimeTypesEnum.AI,
  z: MimeTypesEnum.Z,

  // Дополнительные типы для веб-шрифтов
  eot: MimeTypesEnum.EOT,

  // XML различные
  xhtml: MimeTypesEnum.XHTML,
  xsl: MimeTypesEnum.XSL,

  // Расширения для Java
  jar: MimeTypesEnum.JAR,

  // Дополнительно
  wasm: MimeTypesEnum.WASM,
};
