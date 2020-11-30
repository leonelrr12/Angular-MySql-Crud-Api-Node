CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id int(11) not null auto_increment primary key,
    title varchar(180),
    description varchar(255),
    image varchar(200),
    created_at timestamp default current_timestamp
);

DESCRIBE games;
