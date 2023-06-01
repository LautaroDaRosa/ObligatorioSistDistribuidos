CREATE TABLE IF NOT EXISTS sensor
(
    sensor_id INT auto_increment,
    ubication VARCHAR(40),
    max_value DOUBLE,
    min_value DOUBLE,
    PRIMARY KEY (sensor_id)
);

CREATE TABLE IF NOT EXISTS medition
(
    medition_id INT auto_increment,
    sensor_id   INT      NOT NULL,
    date        DATETIME NOT NULL,
    value       DOUBLE   NOT NULL,
    analyzed    BOOLEAN DEFAULT 0,
    PRIMARY KEY (medition_id),
    FOREIGN KEY (sensor_id) REFERENCES sensor (sensor_id)
);

CREATE TABLE IF NOT EXISTS alerta
(
    medition_id    INT    NOT NULL,
    analyzed_value DOUBLE NOT NULL,
    expected_value DOUBLE NOT NULL,
    PRIMARY KEY (medition_id),
    FOREIGN KEY (medition_id) REFERENCES medition (medition_id)
);

CREATE TABLE IF NOT EXISTS user
(
    email    VARCHAR(30)  NOT NULL,
    password VARCHAR(200) NOT NULL,
    status   VARCHAR(20)  NOT NULL,
    salt     VARCHAR(20)  NOT NULL,
    PRIMARY KEY (email)
);

INSERT INTO user (email, password, status, salt)
VALUES ('Nicolas', '$2b$12$3oQ.8XHnlHaN129xbonPUeOwxphDbua.BwZSRODMCz6cLOqkLAYi6', 'active', 'abcd');

INSERT INTO user (email, password, status, salt)
VALUES ('Lauta', 'password123', 'removed', 'ijkl');

INSERT INTO user (email, password, status, salt)
VALUES ('Alejandra', 'password789', 'pending', 'ijkl');

INSERT INTO sensor (ubication, min_value, max_value)
VALUES ('Malvin', 25.0, 40.0);