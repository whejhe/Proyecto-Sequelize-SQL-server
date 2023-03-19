
CREATE DATABASE musicaDB;
USE musicaDB;

CREATE TABLE artistas (
    id_artista INT PRIMARY KEY,
    nombre_artista VARCHAR(50) NOT NULL
);

CREATE TABLE discos (
    id_disco INT PRIMARY KEY,
    titulo_disco VARCHAR(50) NOT NULL,
    anio_lanzamiento INT,
    id_artista INT NOT NULL,
    FOREIGN KEY (id_artista) REFERENCES artistas(id_artista)
);

CREATE TABLE usuarios (
    usuarioID INT PRIMARY KEY AUTO_INCREMENT,
    nombreUsuario VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fechaNacimiento DATE,
    contrasena VARCHAR(255) NOT NULL
);

CREATE TABLE discosUsuario(
    usuarioID INT NOT NULL,
    id_disco INT NOT NULL,
    PRIMARY KEY (usuarioID,id_disco),
    FOREIGN KEY (usuarioID) REFERENCES usuarios(usuarioID),
    FOREIGN KEY (id_disco) REFERENCES discos(id_disco)
);
