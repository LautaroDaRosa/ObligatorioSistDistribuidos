USE `test-db`;
CREATE TABLE IF NOT EXISTS sensor
(
    id        int auto_increment,
    ubication VARCHAR(40),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS medition
(
    sensor_id int      NOT NULL,
    date      datetime NOT NULL,
    value     int      NOT NULL,
    PRIMARY KEY (sensor_id, date),
    FOREIGN KEY (sensor_id) REFERENCES sensor (id)
);

CREATE TABLE IF NOT EXISTS alerta
(
    sensor_id      int      NOT NULL,
    date           datetime NOT NULL,
    analyzed_value int      NOT NULL,
    expected_value int      NOT NULL,
    PRIMARY KEY (sensor_id, date),
    FOREIGN KEY (sensor_id, date) REFERENCES medition (sensor_id, date)
);

CREATE TABLE IF NOT EXISTS user
(
    email    VARCHAR(30) NOT NULL,
    password VARCHAR(20) NOT NULL,
    status   VARCHAR(20) NOT NULL,
    salt     VARCHAR(4)  NOT NULL,
    PRIMARY KEY (email)
);