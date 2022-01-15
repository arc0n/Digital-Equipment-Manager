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
		birthdate DATE NOT NULL,
		sex INTEGER NOT NULL,
		id_card VARCHAR(255) NOT NULL,
      dynamic_id VARCHAR(25) NOT NULL UNIQUE,
		address_id INTEGER NOT NULL,
      photo VARCHAR(50)
   );

CREATE TABLE user
   (    
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      username VARCHAR(255) NOT NULL,
      role INTEGER NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255)
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
      item_id INTEGER NOT NULL,
		casuality_type_id INTEGER
   );
   

CREATE TABLE borrowed_item 
   (    
      id INTEGER AUTO_INCREMENT PRIMARY KEY, 
      datetime_out DATETIME NOT NULL,
      datetime_in DATETIME,
		item_id INTEGER NOT NULL,
      person_id INTEGER NOT NULL
   );



alter table item_model ADD FOREIGN KEY(item_type_id) references item_type (id) on delete cascade;

alter table item ADD FOREIGN KEY(item_model_id) references item_model (id) on delete cascade;

alter table casuality ADD FOREIGN KEY(casuality_type_id) references casuality_type (id) on delete cascade;
alter table casuality ADD FOREIGN KEY(item_id) references item (id) on delete cascade;

alter table borrowed_item ADD FOREIGN KEY (item_id) references item (id) on delete cascade;
alter table borrowed_item ADD FOREIGN KEY (person_id) references person (id) on delete cascade;

alter table person ADD FOREIGN KEY(address_id) references address (id) on delete cascade;


INSERT INTO item_type (name, description) VALUES ("Schlagstock", "Ein langes zylindrisches Instrument.");
INSERT INTO item_type (name, description) VALUES ("Taser", "Elektroschockpistole");
INSERT INTO item_type (name, description) VALUES ("Handschellen", "Handschellen");
INSERT INTO item_type (name, description) VALUES ("Pfefferspray", "Pfefferspray");
INSERT INTO item_type (name, description) VALUES ("Handfeuerwaffe", "Pistole");

INSERT INTO item_model (name, model_number, item_type_id) VALUES ("S-12", "12", 1);
INSERT INTO item_model (name, model_number, item_type_id) VALUES ("T-14", "14", 2);
INSERT INTO item_model (name, model_number, item_type_id) VALUES ("H-12", "12", 3);
INSERT INTO item_model (name, model_number, item_type_id) VALUES ("P-117", "117", 4);
INSERT INTO item_model (name, model_number, item_type_id) VALUES ("Glock", "G17", 5);

INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12001,"4z8k9a6bqx7u7ad", "equipment_schlagstock.jpeg","Standard-Schlagstock Reihe S, Laenge 90 cm, Stahl", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12002,"q6irq09w1aha126", "equipment_schlagstock.jpeg","Standard-Schlagstock Reihe S, Laenge 90 cm, Stahl", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12003,"7zdqatdaohetbl9", "equipment_schlagstock.jpeg","Standard-Schlagstock Reihe S, Laenge 90 cm, Stahl", "inaktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12004,"jvi6q46zqrns5hv", "equipment_glock.jpeg","Pistole Glock, Kaliber 9mm, Schwarz", "aktiv",5);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12005,"k9ioxw31r7m5h92", "equipment_glock.jpeg","Pistole Glock, Kaliber 9mm, Schwarz", "aktiv",5);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12006,"yh63pmq4jq2qa46", "equipment_spray.jpeg","Pfefferspray Teardrop Standard 500ml", "aktiv",4);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12007,"grxhy5j72vfiwmw", "equipment_taser.jpeg","Taser 120 V, Reihe T, Groesse 15cm", "aktiv",2);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12008,"gqh073b9yrf49oj", "equipment_taser.jpeg","Taser 120 V, Reihe T, Groesse 15cm", "aktiv",2);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12009,"c7341j0vum6weq2", "equipment_taser.jpeg","Taser 120 V, Reihe T, Groesse 15cm", "aktiv",2);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12010,"okt240f1tqzk1us", "equipment_spray.jpeg","Pffeferspray Teardrop Standard 500ml", "aktiv",4);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12011,"bxrnkl15s8dvkv5", "equipment_handschellen.jpeg","Handschellen Robust, Stahl, Groesse M", "aktiv",3);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12012,"f9lloij3b9wmz82", "equipment_handschellen.jpeg","Handschellen Robust, Stahl, Groesse M", "aktiv",3);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12013,"ifdgzecuseimxci", "equipment_schlagstock.jpeg","Standard-Schlagstock Reihe S, Laenge 90 cm, Stahl", "dekommisioniert",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12014,"nv2kopck0vg6ave", "equipment_schlagstock.jpeg","Standard-Schlagstock Reihe S, Laenge 90 cm, Stahl", "aktiv",1);
INSERT INTO item(serial_number,dynamic_id, photo, description, status, item_model_id) VALUES (12015,"k8spg6siw36act6", "equipment_schlagstock.jpeg","Standard-Schlagstock Reihe S, Laenge 90 cm, Stahl", "aktiv",1);

INSERT INTO address(street, zip, city) VALUES ("Steiner Landstrasse 45", 3500, "Stein");
INSERT INTO address(street, zip, city) VALUES ("Steiner Landstrassse 48", 3500, "Stein");
INSERT INTO address(street, zip, city) VALUES ("Steiner Landstrasse 52", 3500, "Stein");
INSERT INTO address(street, zip, city) VALUES ("Doktor-Karl-Dorrek-Strasse 87", 3500, "Stein");

INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id,photo) VALUES ("Friedrich", "Fellner", "1944-01-05", 1, "e789g50","68gngbkw875rc6x",1, "man1.jpeg");
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id,photo) VALUES ("Sylvia", "Stern", "1955-10-03", 0, "fdsgfd","bxe7toded6807gn", 2,"woman1.jpeg");
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Andreas", "Lang", "1981-01-04", 1, "6764587","pldpdfib2qy7stv",3);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Sebastian", "Kogler", "1978-02-10", 1, "785287587","1f55e5pkyzatd5c",4);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Alexander", "Wurst", "1972-03-15", 1, "7868787","cjz7282s5y9ro9d",1);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Joachim", "Strauss", "1974-04-15", 1, "144717","yc48wg669irk369",2);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Martin", "hat ein Minus", "1969-06-18", 1, "1757886","518hf4o6lsnf27m",3);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Roland", "Schmidt", "1966-08-15", 1, "7868767","m4bbclu89ef9x8r",4);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Theresia", "Rosenbauer", "1977-11-05", 0, "1475758","iwgb3zkzbt1jaho",1);
INSERT INTO person(firstname, lastname, birthdate, sex, id_card, dynamic_id, address_id) VALUES ("Maria", "Winkelbauer", "1970-01-05", 0, "248789","e4bcon7egqe0d9a",2);

INSERT INTO casuality_type(id,name) VALUES ("1", "Defekt"), ("2", "Ende der Lebzeit");

INSERT INTO casuality (id,date,description,status,item_id,casuality_type_id) VALUES ("1", "2021-12-19 18:26:31", "Herr Fellner hat den Taser unabsichtlich beschädigt.", "inaktiv", "3", "1");
INSERT INTO casuality (id,date,description,status,item_id,casuality_type_id) VALUES ("2", "2021-12-19 18:26:31", "Ist leider komplett kaputt gegangen", "dekommisioniert", "13", "2");

INSERT INTO borrowed_item(datetime_out, datetime_in, item_id, person_id) VALUES ("2021-12-20 08:26:31", "2021-12-20 18:26:00", 1, 1);
INSERT INTO borrowed_item(datetime_out, datetime_in, item_id, person_id) VALUES ("2021-12-20 08:20:10", "2021-12-20 18:00:42", 2, 2);
INSERT INTO borrowed_item(datetime_out, datetime_in, item_id, person_id) VALUES ("2021-12-20 08:22:50", "2021-12-20 18:50:40", 5, 3);
INSERT INTO borrowed_item(datetime_out, datetime_in, item_id, person_id) VALUES ("2021-12-20 08:10:15", "2021-12-20 18:10:25", 6, 4);
INSERT INTO borrowed_item(datetime_out, datetime_in, item_id, person_id) VALUES ("2021-12-21 08:10:15", NULL, 2, 4);

INSERT INTO user(username, role, email, password) VALUES ('admin', 0,'admin@email.com', '$2b$10$lPR3pJcnep5h7qAFJ6wpaOVALfmm9nlguOURAjtYRj422D.IYPFZy');
INSERT INTO user(username, role, email, password) VALUES ('user', 1, 'user@email.com', '$2b$10$EX8ZN8QwkwGqTaQKJlcyC.kBt6T5mSjNvyC7lIpS7UUAo8Lwv/Nim');
INSERT INTO user(username, role, email, password) VALUES ('user2', 1, 'user2@email.com', '$2b$10$EX8ZN8QwkwGqTaQKJlcyC.kBt6T5mSjNvyC7lIpS7UUAo8Lwv/Nim');
