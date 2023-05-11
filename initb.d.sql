CREATE TABLE IF NOT EXISTS sensor
  (
     id        INT auto_increment,
     ubication VARCHAR(40),
     PRIMARY KEY (id)
  );

CREATE TABLE IF NOT EXISTS medition
  (
     id        INT auto_increment,
     sensor_id INT NOT NULL,
     date      DATETIME NOT NULL,
     value     INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (sensor_id) REFERENCES sensor (id)
  );

CREATE TABLE IF NOT EXISTS alerta
  (
     id INT NOT NULL,
     analyzed_value INT NOT NULL,
     expected_value INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (id) REFERENCES medition (id)
  );

CREATE TABLE IF NOT EXISTS user
  (
     email    VARCHAR(30) NOT NULL,
     password VARCHAR(200) NOT NULL,
     status   VARCHAR(20) NOT NULL,
     salt     VARCHAR(4) NOT NULL,
     PRIMARY KEY (email)
  );

INSERT INTO user (email, password, status, salt) VALUES ('Nicolas', '$2b$12$3oQ.8XHnlHaN129xbonPUeOwxphDbua.BwZSRODMCz6cLOqkLAYi6', 'active', 'abcd');

INSERT INTO user (email, password, status, salt) VALUES ('Lauta', 'password123', 'removed', 'ijkl');

INSERT INTO user (email, password, status, salt) VALUES ('Alejandra', 'password789', 'pending', 'ijkl');

INSERT INTO sensor (ubication) VALUES ('Buce');

INSERT INTO sensor (ubication) VALUES ('Malvin');

INSERT INTO sensor (ubication) VALUES ('Pando');

INSERT INTO medition (sensor_id, date, value) VALUES (1, '2023-05-10 12:00:00', 50);

INSERT INTO medition (sensor_id, date, value) VALUES (2, '2023-05-10 12:00:00', 45);

INSERT INTO medition (sensor_id, date, value) VALUES (3, '2023-05-10 12:00:00', 30);