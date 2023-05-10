USE `test-db`;

CREATE TABLE IF NOT EXISTS sensor
  (
     id        INT auto_increment,
     ubication VARCHAR(40),
     PRIMARY KEY (id)
  );

CREATE TABLE IF NOT EXISTS medition
  (
     sensor_id INT NOT NULL,
     date      DATETIME NOT NULL,
     value     INT NOT NULL,
     PRIMARY KEY (sensor_id, date),
     FOREIGN KEY (sensor_id) REFERENCES sensor (id)
  );

CREATE TABLE IF NOT EXISTS alerta
  (
     sensor_id      INT NOT NULL,
     date           DATETIME NOT NULL,
     analyzed_value INT NOT NULL,
     expected_value INT NOT NULL,
     PRIMARY KEY (sensor_id, date),
     FOREIGN KEY (sensor_id, date) REFERENCES medition (sensor_id, date)
  );

CREATE TABLE IF NOT EXISTS user
  (
     email    VARCHAR(30) NOT NULL,
     password VARCHAR(20) NOT NULL,
     status   VARCHAR(20) NOT NULL,
     salt     VARCHAR(4) NOT NULL,
     PRIMARY KEY (email)
  );