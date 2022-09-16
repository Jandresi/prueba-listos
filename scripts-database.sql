CREATE DATABASE prueba_listos

USE prueba_listos

CREATE TABLE historial(
    id int PRIMARY KEY IDENTITY(1,1),
    fecha_consulta DATETIME DEFAULT SYSDATETIME(),
    acronimo nvarchar(20)
)