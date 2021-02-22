DROP DATABASE IF EXISTS ebid;
CREATE DATABASE ebid;
USE ebid;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(255) NOT NULL,
  min_cost DECIMAL(7,2),
  curr_bid DECIMAL(7,2),
  ends_in INT,
  image VARCHAR(255),
  PRIMARY KEY(id)
)


