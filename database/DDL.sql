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
      dynamic_id VARCHAR(25) NOT NULL UNIQUE,
		photo VARCHAR(50) NOT NULL,
		description VARCHAR(100),
		status VARCHAR(30) NOT NULL,
		item_model_id INTEGER NOT NULL
   );

/*CREATE TABLE item_dynamic_id
 (
    dynamic_id VARCHAR PRIMARY KEY,
    item_id INTEGER NOT NULL
 )*/

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
      dynamic_id VARCHAR(25) NOT NULL UNIQUE,
		address_id INTEGER NOT NULL
   );


/*CREATE TABLE person_dynamic_id
 (
    dynamic_id VARCHAR PRIMARY KEY,
    person_id INTEGER NOT NULL
 )*/

   

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

alter table item_dynamic_id ADD FOREIGN KEY(item_id) references item (id) on delete cascade;
alter table person_dynamic_id ADD FOREIGN KEY(person_id) references person (id) on delete cascade;

INSERT INTO item_type (name, description) VALUES ("Schlagstock", "Ein langes zylindrisches Instrument.");
INSERT INTO item_type (name, description) VALUES ("Taser", "Elektroschockpistole");
INSERT INTO item_type (name, description) VALUES ("Handschellen", "Handschellen");
INSERT INTO item_type (name, description) VALUES ("Pfefferspray", "Pfefferspray");

INSERT INTO item_model (name, model_number, item_type_id) VALUES ("S-12", "12", 1);
INSERT INTO item_model (name, model_number, item_type_id) VALUES ("T-14", "14", 2);
INSERT INTO item_model (name, model_number, item_type_id) VALUES ("H-12", "12", 3);
INSERT INTO item_model (name, model_number, item_type_id) VALUES ("P-117", "117", 4);

INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12001,"4z8k9a6bqx7u7ad", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12002,"q6irq09w1aha126", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12003,"7zdqatdaohetbl9", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12004,"jvi6q46zqrns5hv", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12005,"k9ioxw31r7m5h92", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12006,"yh63pmq4jq2qa46", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12007,"grxhy5j72vfiwmw", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12008,"gqh073b9yrf49oj", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12009,"6i8tvxzhnv85b54", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12010,"okt240f1tqzk1us", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12011,"bxrnkl15s8dvkv5", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12012,"f9lloij3b9wmz82", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12013,"ifdgzecuseimxci", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12014,"nv2kopck0vg6ave", "/","", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12015,"k8spg6siw36act6", "/","", "aktiv",1);

INSERT INTO address(street, zip, city) VALUES ("Steiner Landstraße 45", 3500, "Stein");
INSERT INTO address(street, zip, city) VALUES ("Steiner Landstraße 48", 3500, "Stein");
INSERT INTO address(street, zip, city) VALUES ("Steiner Landstraße 52", 3500, "Stein");
INSERT INTO address(street, zip, city) VALUES ("Doktor-Karl-Dorrek-Straße 87", 3500, "Stein");

INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Friedrich", "Fellner", 24192000000, 1, "e789g50","68gngbkw875rc6x",1);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Sonja", "Goebels", 655344000000, 0, "fdsgfd","bxe7toded6807gn", 2);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Andreas", "Lang", 24192000000, 1, "6764587","pldpdfib2qy7stv",3);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Sebastian", "Kogler", 24192000000, 1, "785287587","1f55e5pkyzatd5c",4);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Alexander", "Wurst", 24192000000, 1, "7868787","cjz7282s5y9ro9d",1);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Joachim", "Strauss", 181958400000, 1, "144717","yc48wg669irk369",2);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Peter", "Bauer", 24192000000, 1, "1757886","518hf4o6lsnf27m",3);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Roland", "Schmidt", 655344000000, 1, "7868767","m4bbclu89ef9x8r",4);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Theresia", "Rosenbauer", 181958400000, 0, "1475758","iwgb3zkzbt1jaho",1);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Maria", "Winkelbauer", 24192000000, 0, "248789","e4bcon7egqe0d9a",2);

