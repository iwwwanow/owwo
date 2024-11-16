import { accountsTable } from "@db/main";
import { CONFIRM_PASSWORD_INPUT_NAME } from "@site/constants";
import { createInsertSchema } from "drizzle-typebox";
import type { Static } from "elysia";
import { t } from "elysia";

const __signupValidationSchema = createInsertSchema(accountsTable);

const tableFieldsSchema = t.Pick(__signupValidationSchema, [
  "username",
  "password",
]);

const additionalFieldsSchema = t.Object({
  [CONFIRM_PASSWORD_INPUT_NAME]: t.String(),
});

const signupBodyDto = t.Composite([tableFieldsSchema, additionalFieldsSchema]);

export type SignupDataType = Static<typeof tableFieldsSchema>;
export type SignupBodyDtoType = Static<typeof signupBodyDto>;

export const signupDto = {
  body: signupBodyDto,
};
