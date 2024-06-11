import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROOM_TITLE_FIELD } from "./RoomTitle";

export const RoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="capacity" source="capacity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="floor" source="floor" />
        <TextField label="ID" source="id" />
        <TextField label="number" source="numberField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="roomId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="checkInDate" source="checkInDate" />
            <TextField label="checkOutDate" source="checkOutDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="customerName" source="customerName" />
            <TextField label="ID" source="id" />
            <ReferenceField label="room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
