CREATE TABLE IF NOT EXISTS sensor
(
    sensor_id INT auto_increment,
    ubication VARCHAR(40),
    max_value DOUBLE NOT NULL,
    min_value DOUBLE NOT NULL,
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

CREATE TABLE IF NOT EXISTS user
(
    username VARCHAR(30)  NOT NULL,
    password VARCHAR(100) NOT NULL,
    status   VARCHAR(20)  NOT NULL,
    role     VARCHAR(20)  NOT NULL,
    salt     VARCHAR(50)  NOT NULL,
    PRIMARY KEY (username)
);

INSERT INTO user (username, password, status, role, salt)
VALUES ('nicolas', '$2b$12$pIG5seHSpwTd548T0YIqlOvg766NTF55SXeLVIzLMFbEhWl11hiTi', 'ACTIVE', 'ROOT',
        '$2b$12$pIG5seHSpwTd548T0YIqlO');
# pass = xWRY2q774EL&
INSERT INTO user (username, password, status, role, salt)
VALUES ('lautaro', '$2b$12$BM0T33nFoKXuCkr6B/OhO.j5SIp650kkm2oZskVbSUHHih1vrJoi6', 'INACTIVE', 'ROOT',
        '$2b$12$BM0T33nFoKXuCkr6B/OhO.');
# pass = j$3*D947Neau
INSERT INTO user (username, password, status, role, salt)
VALUES ('alejandra', '$2b$12$4gkdgWUmy3XUENxvpwS/IedSdXct1j.yUtupDk7.KJbwURWUBmi5e', 'INACTIVE', 'ROOT',
        '$2b$12$4gkdgWUmy3XUENxvpwS/Ie');
# pass = M9qOfx1%U^1q
INSERT INTO user (username, password, status, role, salt)
VALUES ('sensor01', '$2b$12$5wsRmKglwG.Q6jbg/xhFz.liIyKxF/fWDNMFa7wGauO0P8qNFhlDS', 'ACTIVE', 'ROOT',
        '$2b$12$5wsRmKglwG.Q6jbg/xhFz.');
# pass = 99l0*2%aeX4Z
INSERT INTO sensor (ubication, min_value, max_value)
VALUES ('Malvin', 15.0, 45.0);