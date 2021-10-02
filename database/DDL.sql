CREATE TABLE item_type
   (   
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      name VARCHAR(50) NOT NULL,
		description VARCHAR(100)
   );


CREATE TABLE item_model
   (    
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      name VARCHAR(50) NOT NULL,
		model_number VARCHAR(25),
		item_type_id INTEGER NOT NULL
   );


CREATE TABLE item
   (    
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      serial_number VARCHAR(30) NOT NULL,
		photo VARCHAR(50) NOT NULL,
		description VARCHAR(100),
		status VARCHAR(30) NOT NULL,
		item_model_id INTEGER NOT NULL
   );


CREATE TABLE address 
   (    
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      street VARCHAR(255) NOT NULL,
		zip INTEGER NOT NULL,
		city VARCHAR(255) NOT NULL
   );


CREATE TABLE person 
   (    
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      firstname VARCHAR(255) NOT NULL,
		lastname VARCHAR(255) NOT NULL,
		birthdate TIMESTAMP NOT NULL,
		sex INTEGER NOT NULL,
		id_card VARCHAR(255) NOT NULL,
		address_id INTEGER NOT NULL
   );
   

CREATE TABLE casuality_type 
   (  
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
		name VARCHAR(50) NOT NULL
   );


CREATE TABLE casuality 
   (    
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      date DATETIME NOT NULL,
		description VARCHAR(255) NOT NULL,
		status VARCHAR(50),
      borrowed_item_id INTEGER,
      item_id INTEGER NOT NULL,
		casuality_type_id INTEGER NOT NULL
   );
   

CREATE TABLE borrowed_item 
   (    
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      datetime_in DATETIME NOT NULL,
		datetime_out DATETIME,
		item_id INTEGER NOT NULL,
      person_id INTEGER NOT NULL
   );



alter table item_model ADD FOREIGN KEY(item_type_id) references item_type (id) on delete cascade;

alter table item ADD FOREIGN KEY(item_model_id) references item_model (id) on delete cascade;

alter table casuality ADD FOREIGN KEY(casuality_type_id) references casuality_type (id) on delete cascade;
alter table casuality ADD FOREIGN KEY(item_id) references item (id) on delete cascade;
alter table casuality ADD FOREIGN KEY(borrowed_item_id) references borrowed_item (id) on delete cascade;

alter table borrowed_item ADD FOREIGN KEY (item_id) references item (id) on delete cascade;
alter table borrowed_item ADD FOREIGN KEY (person_id) references person (id) on delete cascade;

alter table person ADD FOREIGN KEY(address_id) references address (id) on delete cascade;


