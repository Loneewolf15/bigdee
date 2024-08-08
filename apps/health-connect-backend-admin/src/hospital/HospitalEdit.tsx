import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HospitalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="hospitalName" source="hospitalName" />
        <TextInput label="location" source="location" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
