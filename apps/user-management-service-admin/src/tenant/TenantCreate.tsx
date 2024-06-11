import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TenantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="tenantId" source="tenantId" />
      </SimpleForm>
    </Create>
  );
};