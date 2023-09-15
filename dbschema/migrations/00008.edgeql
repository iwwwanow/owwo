CREATE MIGRATION m15epe65uedvfhd25njwlk4nkq24k7g6644mexkj4gknbwijiwrdza
    ONTO m14yztkuez25g4fcueelrpgnrvmub4asfafuzeiryaj6ripr5wkduq
{
  ALTER TYPE default::Page {
      CREATE PROPERTY desc: std::str;
      CREATE PROPERTY elems: array<std::str>;
      CREATE PROPERTY title: std::str;
  };
};
