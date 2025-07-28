import { MimeTypesEnum } from "../enums/index.js";

// TODO оставь только те, что будут поддерживаться

export const mimeTypes: { [extension: string]: MimeTypesEnum } = {
  // Текстовые файлы
  txt: MimeTypesEnum.TXT,
  // csv: MimeTypesEnum.CSV,
  html: MimeTypesEnum.HTML,
  // htm: MimeTypesEnum.HTM,
  css: MimeTypesEnum.CSS,
  js: MimeTypesEnum.JS,
  json: MimeTypesEnum.JSON,
  // xml: MimeTypesEnum.XML,
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

  // FEAT
  // Аудио
  // mp3: MimeTypesEnum.MP3,
  // wav: MimeTypesEnum.WAV,
  // ogg: MimeTypesEnum.OGG,
  // m4a: MimeTypesEnum.M4A,
  // flac: MimeTypesEnum.FLAC,

  // FEAT
  // Видео
  // mp4: MimeTypesEnum.MP4,
  // mov: MimeTypesEnum.MOV,
  // wmv: MimeTypesEnum.WMV,
  // flv: MimeTypesEnum.FLV,
  // avi: MimeTypesEnum.AVI,
  // mkv: MimeTypesEnum.MKV,
  // webm: MimeTypesEnum.WEBM,

  // FEAT
  // Архивы и сжатые файлы
  // zip: MimeTypesEnum.ZIP,
  // rar: MimeTypesEnum.RAR,
  // "7z": MimeTypesEnum.SEVENZ,
  // tar: MimeTypesEnum.TAR,
  // gz: MimeTypesEnum.GZ,
  // bz: MimeTypesEnum.BZ,
  // bz2: MimeTypesEnum.BZ2,

  // FEAT
  // Документы
  // pdf: MimeTypesEnum.PDF,
  // doc: MimeTypesEnum.DOC,
  // docx: MimeTypesEnum.DOCX,
  // xls: MimeTypesEnum.XLS,
  // xlsx: MimeTypesEnum.XLSX,
  // ppt: MimeTypesEnum.PPT,
  // pptx: MimeTypesEnum.PPTX,
  // odt: MimeTypesEnum.ODT,
  // ods: MimeTypesEnum.ODS,

  // FEAT
  // Шрифты
  // ttf: MimeTypesEnum.TTF,
  // otf: MimeTypesEnum.OTF,
  // woff: MimeTypesEnum.WOFF,
  // woff2: MimeTypesEnum.WOFF2,

  // FEAT
  // Приложения и двоичные форматы
  // exe: MimeTypesEnum.EXE,
  // bin: MimeTypesEnum.BIN,
  // dmg: MimeTypesEnum.DMG,
  // iso: MimeTypesEnum.ISO,

  // FEAT
  // Другие типы
  // apk: MimeTypesEnum.APK,
  // app: MimeTypesEnum.APP,

  // FEAT
  // Расширенные списки
  // rtf: MimeTypesEnum.RTF,
  // psd: MimeTypesEnum.PSD,
  // eps: MimeTypesEnum.EPS,
  // ai: MimeTypesEnum.AI,
  // z: MimeTypesEnum.Z,

  // FEAT
  // Дополнительные типы для веб-шрифтов
  // eot: MimeTypesEnum.EOT,

  // FEAT
  // XML различные
  // xhtml: MimeTypesEnum.XHTML,
  // xsl: MimeTypesEnum.XSL,

  // FEAT
  // Расширения для Java
  // jar: MimeTypesEnum.JAR,

  // FEAT
  // Дополнительно
  // wasm: MimeTypesEnum.WASM,
};
