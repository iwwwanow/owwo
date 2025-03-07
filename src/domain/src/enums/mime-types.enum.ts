export enum MimeTypesEnum {
  // Текстовые файлы
  TXT = "text/plain",
  CSV = "text/csv",
  HTML = "text/html",
  HTM = "text/html",
  CSS = "text/css",
  JS = "application/javascript",
  JSON = "application/json",
  XML = "application/xml",
  MD = "text/markdown",

  // Изображения
  PNG = "image/png",
  JPG = "image/jpeg",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  BMP = "image/bmp",
  WEBP = "image/webp",
  SVG = "image/svg+xml",
  ICO = "image/vnd.microsoft.icon",

  // Аудио
  MP3 = "audio/mpeg",
  WAV = "audio/wav",
  OGG = "audio/ogg",
  M4A = "audio/mp4",
  FLAC = "audio/flac",

  // Видео
  MP4 = "video/mp4",
  MOV = "video/quicktime",
  WMV = "video/x-ms-wmv",
  FLV = "video/x-flv",
  AVI = "video/x-msvideo",
  MKV = "video/x-matroska",
  WEBM = "video/webm",

  // Архивы и сжатые файлы
  ZIP = "application/zip",
  RAR = "application/vnd.rar",
  SEVENZ = "application/x-7z-compressed",
  TAR = "application/x-tar",
  GZ = "application/gzip",
  BZ = "application/x-bzip",
  BZ2 = "application/x-bzip2",

  // Документы
  PDF = "application/pdf",
  DOC = "application/msword",
  DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  XLS = "application/vnd.ms-excel",
  XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PPT = "application/vnd.ms-powerpoint",
  PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ODT = "application/vnd.oasis.opendocument.text",
  ODS = "application/vnd.oasis.opendocument.spreadsheet",

  // Шрифты
  TTF = "font/ttf",
  OTF = "font/otf",
  WOFF = "font/woff",
  WOFF2 = "font/woff2",

  // Приложения и двоичные форматы
  EXE = "application/vnd.microsoft.portable-executable",
  BIN = "application/octet-stream",
  DMG = "application/octet-stream",
  ISO = "application/octet-stream",

  // Другие типы
  APK = "application/vnd.android.package-archive",
  APP = "application/x-msdownload",

  // Расширенные списки
  RTF = "application/rtf",
  PSD = "image/vnd.adobe.photoshop",
  EPS = "application/postscript",
  AI = "application/postscript",
  Z = "application/x-compress",

  // Дополнительные типы для веб-шрифтов
  EOT = "application/vnd.ms-fontobject",

  // XML различные
  XHTML = "application/xhtml+xml",
  XSL = "application/xml",

  // Расширения для Java
  JAR = "application/java-archive",

  // Дополнительно
  WASM = "application/wasm",
}
