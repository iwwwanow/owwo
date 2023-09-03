CREATE MIGRATION m1v5cul26uoddatsygwmx3uzzckt7c374cwxmcxmtzkkjwoyiemw2a
    ONTO m1fhsox2zlngdxlg5v5o2gogdp4ijwyuio6jualvfnsq5kovmli4kq
{
  CREATE TYPE default::Page {
      CREATE MULTI LINK authors: default::User;
  };
};
