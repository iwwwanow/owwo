CREATE MIGRATION m1fxbgfhdni4tu22xfhyk7frrqgvxyfabbznxpwntc52ucobj6a5ga
    ONTO m1agmeb27mfql2325ppoacjrwfm22c6wepxmyn4pzeqwd67qmndjoq
{
  ALTER TYPE default::User {
      CREATE MULTI LINK pages: default::Page;
  };
};
