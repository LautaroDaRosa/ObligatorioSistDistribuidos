CREATE TABLE medition
(
    id           int PRIMARY KEY auto_increment,
    sensor_id    int      NOT NULL,
    date        datetime NOT NULL,
    value int      NOT NULL,
    FOREIGN KEY (sensor_id) REFERENCES sensor (id)
);

CREATE TABLE sensor
(
    id        int PRIMARY KEY auto_increment,
    ubication VARCHAR(40)
);

CREATE TABLE alerta
(
    id             int PRIMARY KEY auto_increment,
    sensor_id      int      NOT NULL,
    date          datetime NOT NULL,
    analyzed_value   int      NOT NULL,
    expected_value int      NOT NULL,
    FOREIGN KEY (sensor_id) REFERENCES sensor (id),
    FOREIGN KEY (date) REFERENCES medida (date)
);

CREATE TABLE user
(
    email    VARCHAR(30) PRIMARY KEY,
    password VARCHAR(20) NOT NULL,
    status   VARCHAR(20) NOT NULL,
    salt     VARCHAR(4)  NOT NULL
);