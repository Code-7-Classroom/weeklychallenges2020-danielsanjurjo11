CREATE DATABASE MySQL_GQ;
USE  MySQL_GQ;
SET SQL_SAFE_UPDATES=0;
-- very easy 
CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(20), 
    model VARCHAR(20), 
    year YEAR
);
INSERT INTO cars (make, model, year)
VALUES ('Toyota', 'Supra', 2020), ('Subaru', 'Brz', 2019), ('Chevy', 'Camaro', 2020), ('Subaru', 'WRX', 2020), ('Nissan', '370z', 2019);
DROP TABLE cars;
-- easy 
CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    publish_date year, 
    author_firstname VARCHAR(255),
    author_lastname VARCHAR(255)
);
INSERT INTO books (title, publish_date, author_firstname, author_lastname)
VALUES ('Noggin', 2014, 'John Corey', 'Whaley'), ('The Great Gatsby', 1925, 'F. Scott', 'Fitzgerald'), ('To kill a mocking bird', 1960, 'Harper', 'Lee'), ('The lightning thief', 2005, 'Rick', 'Riordan'), ('IT', 1986, 'Stephen', 'King');
DROP TABLE books;
-- medium 
CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating DECIMAL(2,1)
);
INSERT INTO movies (title, release_date, rating)
VALUES ('Avengers', 2012, 8.5), ('Avengers age of ultron', 2015, 7.3), ('Joker', 2019, 8.5), ('Avengers infinity war', 2018, 8.5), ('avengers endgame', 2019, 8.4), ('spiderman',2002, 7.3), ('spiderman 2',2004 , 7.3), ('fast and furious ', 2001, 6.8), ('The Gentlemen', 2019, 7.9), ('fast and furious 2 ', 2003, 5.9);
SELECT * FROM movies 
WHERE title LIKE '%s%' ORDER BY release_date ASC;
DROP TABLE movies;
-- hard
CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating DECIMAL(2,1),
    director_first VARCHAR(255), 
    director_last VARCHAR(255)
);
INSERT INTO movies (title, release_date, rating, director_first, director_last)
VALUES ('Avengers', 2012, 8.5, 'Joss', 'Whendon'), ('Avengers age of ultron', 2015, 7.3, 'Joss', 'Whendon'), ('Joker', 2019, 8.5, 'Todd', 'Phillips'), ('Avengers infinity war', 2018, 8.5, 'Joss', 'Whendon'), ('avengers endgame', 2019, 8.4, 'Joss', 'Whendon'), ('spiderman', 2002, 7.3, 'Sam', 'Raimi'), ('spiderman 2', 2004, 7.3, 'Sam', 'Raimi'), ('fast and furious', 2001, 6.8, 'John', 'Singleton'), ('The Gentlemen', 2019, 7.9, 'Guy', 'Ritchie'), ('fast and furious 2', 2003, 5.9, 'John', 'Singleton');
ALTER TABLE movies ADD COLUMN fullname VARCHAR(50);
UPDATE movies SET fullname = CONCAT(director_first, ' ', director_last);
SELECT * FROM movies ORDER BY fullname;
DELETE FROM movies WHERE REGEXP_LIKE(director_last, '[r-z]$');
SELECT * FROM movies LIMIT 3;
DROP TABLE movies;
-- very hard
CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(20), 
    model VARCHAR(20), 
    year YEAR
);
INSERT INTO cars (make, model, year)
VALUES ('Toyota', 'supra', 2020), ('Subaru', 'brz', 2019), ('subaru', 'wrx', 2020);
ALTER TABLE cars ADD COLUMN prices INT;
ALTER TABLE cars ADD COLUMN colors VARCHAR(255);
UPDATE cars SET prices=49990,  colors='Black, Light Gray, white, red, yellow' WHERE make = 'Toyota';
UPDATE cars SET prices=25795,  colors=' WR blue pearl, Crystal White Pearl, Dark Gray Metallic' WHERE make = 'Subaru';
UPDATE cars SET prices=36675,  colors='Agate Black Metallic, Blue Metallic, Magnetite Gray Metallic, Ice Silver Metallic, Ceramic White, Crystal Black Silica, ' WHERE make = 'subaru';
ALTER TABLE cars ADD COLUMN makemodel VARCHAR(50);
UPDATE cars SET makemodel = CONCAT(make, ' ', model);
SELECT make, COUNT(1) FROM cars GROUP BY make;
DROP TABLE cars;
-- Utility
DROP TABLE cars;
DESCRIBE movies;
SELECT * FROM movies;