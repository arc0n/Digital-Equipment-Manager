export interface Item {
  dynamic_id: string,
  serial_number: string,
  photo: string,
  description: string,
  status: string,
  item_model_id: number,
  model_name: string,
  item_type: string,
  item_type_id: number,
  item_type_description: string
  borrowed: boolean
}

export interface ItemType {
  id: number,
  name: string,
  description: string,
}

export interface ItemModel {
  id: number,
  name: string,
  model_number: string,
  item_type_id: number,
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
  city: string,
  photo ? : string
}

export interface Booking {
  person_id?: string,
  item_id?: string | string[], // in post its possible to be an array
  datetime_out?: Date,
  datetime_in?: Date,
  person?: Person,
  item?: Item
}
