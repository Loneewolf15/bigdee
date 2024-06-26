import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HospitalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="hospitalName" source="hospitalName" />
        <TextInput label="location" source="location" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
