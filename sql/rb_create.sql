
-- DROP DATABASE IF EXISTS radicalbooking;
-- CREATE DATABASE IF NOT EXISTS radicalbooking;
USE scheduler;

-- DROP TABLE IF EXISTS Client, Offer, Teacher; 
-- CREATE TABLE user ();


-- DROP TABLE IF EXISTS client;
CREATE TABLE Client (
	id  			INT UNSIGNED 	NOT NULL AUTO_INCREMENT,
	name			VARCHAR(40),
    gender      	ENUM ('M','F')  NOT NULL
);

CREATE TABLE Teacher (
	id  			INT UNSIGNED 	NOT NULL AUTO_INCREMENT,
	name			VARCHAR(40),
    gender      	ENUM ('M','F')  NOT NULL
);

CREATE TABLE Offer (
	id  			INT UNSIGNED 	NOT NULL AUTO_INCREMENT,
	name			VARCHAR(40),
	description		VARCHAR(150)
);

CREATE TABLE Schedule (
	id  			INT UNSIGNED 	NOT NULL AUTO_INCREMENT,
	start			DATETIME		NOT NULL,
	end				DATETIME		NOT NULL
);

CREATE TABLE Class (
	id  			INT UNSIGNED 	NOT NULL AUTO_INCREMENT,
);



