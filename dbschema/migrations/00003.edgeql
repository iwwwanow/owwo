CREATE MIGRATION m1agmeb27mfql2325ppoacjrwfm22c6wepxmyn4pzeqwd67qmndjoq
    ONTO m1v5cul26uoddatsygwmx3uzzckt7c374cwxmcxmtzkkjwoyiemw2a
{
  ALTER TYPE default::Page {
      CREATE PROPERTY state: std::str;
  };
};
