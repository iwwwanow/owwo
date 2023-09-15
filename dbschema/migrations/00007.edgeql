CREATE MIGRATION m14yztkuez25g4fcueelrpgnrvmub4asfafuzeiryaj6ripr5wkduq
    ONTO m1zqdwpidcbfbjwninjexoglioujdkac2dkbom2klce72nqpljt2rq
{
  ALTER TYPE default::Page {
      CREATE PROPERTY cover: std::str;
  };
};
