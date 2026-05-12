CREATE DATABASE Vtech;

USE Vtech;

CREATE TABLE
    Usuario (
        id INT PRIMARY KEY AUto_increment,
        nome VARCHAR(45) NOT NULL,
        email VARCHAR(45) UNIQUE NOT NULL,
        senha VARCHAR(20) NOT NULL
    );

CREATE TABLE
    quiz (
        id INT PRIMARY KEY AUto_increment,
        nuvem VARCHAR(45) NOT NULL,
        historia_nuvem VARCHAR(45) NOT NULL,
        vantagens_nuvem VARCHAR(45) NOT NULL,
        iam VARCHAR(45) UNIQUE NOT NULL,
        ec2 VARCHAR(20) NOT NULL,
        s3 VARCHAR(20) NOT NULL,
        num_acertos INT,
        id_usuario INT,
        FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
    );

    ALTER TABLE quiz ADD COLUMN história_nuvem VARCHAR(45);
    ALTER TABLE quiz ADD COLUMN vantagens_nuvem VARCHAR(45);
    ALTER TABLE quiz ADD COLUMN num_acertos INT;