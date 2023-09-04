CREATE MIGRATION m1dywuycjgx3q77ecpq2s5anrwlcqnct522brm3v6coebhjcducwma
    ONTO m1fxbgfhdni4tu22xfhyk7frrqgvxyfabbznxpwntc52ucobj6a5ga
{
  ALTER TYPE default::Page {
      ALTER LINK authors {
          SET REQUIRED USING (<default::User>{});
      };
  };
  ALTER TYPE default::User {
      ALTER LINK pages {
          USING (.<authors[IS default::Page]);
      };
  };
};
