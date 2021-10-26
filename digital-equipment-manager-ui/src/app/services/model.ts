export interface Item {
  "dynamic_id": string,
  "serial_number": string,
  "photo": string,
  "description": string,
  "status": "aktiv",
  "item_model_id": number,
  "model_name": string,
  "item_type": string,
  "item_type_id": number,
  "item_type_description": string
}

export interface Person {
  "id": 1,
  "firstname": string,
  "lastname": string,
  "birthdate": Date,
  "sex": string,
  "id_card": string,
  "dynamic_id": string,
  "street": string,
  "zip": number,
  "city": string
}
