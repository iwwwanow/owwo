import type { ClientModeConstructorType } from "./client.model.interface";

export class ClientModel {
  isEditor: boolean = false;

  constructor(initialData?: ClientModeConstructorType) {
    if (initialData) {
      const { isEditor } = initialData;
      if (isEditor) this.isEditor = isEditor;
    }
  }
}
