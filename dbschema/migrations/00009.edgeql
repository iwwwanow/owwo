CREATE MIGRATION m1cyvov4uwzb6nlgimibwuvr7rb525ggw5ke6ll55jgo6hlxxqikwq
    ONTO m15epe65uedvfhd25njwlk4nkq24k7g6644mexkj4gknbwijiwrdza
{
  ALTER TYPE default::Page {
      ALTER PROPERTY desc {
          SET default := 'desc';
      };
      DROP PROPERTY elems;
      ALTER PROPERTY title {
          SET default := 'title';
      };
  };
};
