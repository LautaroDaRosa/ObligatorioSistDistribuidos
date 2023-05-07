CREATE TABLE medida
(
    id           int PRIMARY KEY auto_increment,
    sensor_id    int      NOT NULL,
    fecha        datetime NOT NULL,
    valor_medido int      NOT NULL,
    FOREIGN KEY (sensor_id) REFERENCES sensor (id)
);

CREATE TABLE sensor
(
    id        int PRIMARY KEY auto_increment,
    ubicacion VARCHAR(40)
);

CREATE TABLE alerta
(
    id             int PRIMARY KEY auto_increment,
    sensor_id      int      NOT NULL,
    fecha          datetime NOT NULL,
    valor_medido   int      NOT NULL,
    valor_esperado int      NOT NULL,
    FOREIGN KEY (sensor_id) REFERENCES sensor (id),
    FOREIGN KEY (fecha) REFERENCES medida (fecha)
);

CREATE TABLE usuario
(
    email    VARCHAR(30) PRIMARY KEY,
    password VARCHAR(20) NOT NULL,
    status   VARCHAR(20) NOT NULL,
    salt     VARCHAR(4)  NOT NULL
);