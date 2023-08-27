CREATE MIGRATION m1fhsox2zlngdxlg5v5o2gogdp4ijwyuio6jualvfnsq5kovmli4kq
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY password: std::str;
      CREATE REQUIRED PROPERTY username: std::str;
  };
};
