import { accountsTable } from "@db/main";
import { CONFIRM_PASSWORD_INPUT_NAME } from "@site/constants";
import { createInsertSchema } from "drizzle-typebox";
import type { Static } from "elysia";
import { t } from "elysia";

// TODO добавить поле confirm-password в валидацию типов
const __signupValidationSchema = createInsertSchema(accountsTable);

const tableFieldsSchema = t.Pick(__signupValidationSchema, [
  "username",
  "password",
]);

const additionalFieldsSchema = t.Object({
  [CONFIRM_PASSWORD_INPUT_NAME]: t.String(),
});

const signupDto = t.Composite([tableFieldsSchema, additionalFieldsSchema]);

type SignupDtoType = Static<typeof signupDto>;

export { signupDto };
export type { SignupDtoType };
