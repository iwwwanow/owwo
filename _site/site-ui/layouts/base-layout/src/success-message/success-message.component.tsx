import { Hr } from "@ui/hr";

import type { SuccessMessageType } from "./success-message.interface.js";

export const SuccessMessage: SuccessMessageType = ({ successMessage }) => (
  <div class="grid">
    <Hr text="success-message" color="var(--GREEN)" />
    <p>{successMessage}</p>
    <Hr color="var(--GREEN)" />
  </div>
);
