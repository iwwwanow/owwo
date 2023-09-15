CREATE MIGRATION m1zqdwpidcbfbjwninjexoglioujdkac2dkbom2klce72nqpljt2rq
    ONTO m1dywuycjgx3q77ecpq2s5anrwlcqnct522brm3v6coebhjcducwma
{
  ALTER TYPE default::Page {
      ALTER PROPERTY state {
          SET default := 'default';
      };
  };
};
