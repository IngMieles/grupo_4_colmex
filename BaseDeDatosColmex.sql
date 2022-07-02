Create database colmex;

show databases;

CREATE TABLE users (
    id int unique auto_increment not null,
    telefono bigint not null,
    birth_date varchar(255) not null,
    addres varchar(255) not null,
    profile bit not null, /*Bit se usa para generar un booleano 0 es FALSE y 1 es TRUE debemos hacer que vendedor sea 1 y comprador 0*/
    fname varchar (255) not null,
    lname varchar (255) not null,
    email varchar(255) not null,
    country varchar(255) not null,
    password int not null,
    subject varchar(255),
    fileImg text,
    primary key(id)
);


insert into users (telefono, birth_date, addres, profile, fname, lname, email, country, password, subject, fileImg)
values (4422503259, '06-11-2022', 'Pirineos', 1, 'LUIS ALBERTO', 'ANGELES', 'langeles11@alumnos.uaq.mx', 'mexico', '12345678', null, 'beto.jpg');

insert into users (telefono, birth_date, addres, profile, fname, lname, email, country, password, subject, fileImg)
values (3118739670, '14-08-1992', 'Bogotá', 1, 'David', 'Pieters', 'davidpieters12@gmail.com', 'Colombia', '12345678', null, '1656633069900-th-1649551002.jpg');

insert into users (telefono, birth_date, addres, profile, fname, lname, email, country, password, subject, fileImg)
values (11251458, '2022-06-21', 'Av. siempre vida', 0, 'Pablo', 'M', 'pablo@digitalHouse.com', 'Colombia', '12345678', 'saludos', '"1655866290764-pablo.JPG');


select * from users;