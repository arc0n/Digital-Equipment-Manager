export interface Item {
  dynamic_id: string,
  serial_number: string,
  photo: string,
  description: string,
  status: string,
  item_model_id: number,
  name: string,
  item_type: string,
  item_type_id: number,
  item_type_description: string
  borrowed: string // unmapped // TODO REMOVE
  isBorrowed: boolean;
}

export interface Person {
  firstname: string,
  lastname: string,
  birthdate: Date,
  sex: number,
  id_card?: string,
  dynamic_id: string,
  street: string,
  zip: number,
  city: string
}

export interface Booking {
  person_id: string,
  item_id?: string | string[], // in post its possible to be an array
  datetime_out?: Date,
  datetime_in?: Date,
  person?: Person,
  item?: Item
}

export interface BookingList {
  person_id: string,
  item_id: string[]
}
