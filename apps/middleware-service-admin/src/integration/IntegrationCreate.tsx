import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const IntegrationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
