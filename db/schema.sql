DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean NOT NULL DEFAULT 0,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger_name) VALUES ('Triple Quadruple Cheeseburger');
INSERT INTO burgers (burger_name) VALUES ('Black bean spicy mayo');
INSERT INTO burgers (burger_name) VALUES ('Shake Shack burger');
