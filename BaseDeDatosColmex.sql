Create database colmex;

use colmex;

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


create table products (
	id int unique auto_increment not null,
    name varchar(255) not null,
    description varchar(255) not null,
    precio float not null,
    categoria varchar(255) not null,
    img text,
    fileImg text,
    primary key (id)
);

insert into products (name, description, precio, categoria, img, fileImg)
values ('tv-samsung-smart', 'Consola semi-nueva', 3000, 'Video juegos', null, 'fileImg-Consola.jpg');

insert into products (name, description, precio, categoria, img, fileImg)
values ('FPGA-Board', 'Descripción: Tarjeta de desarrollo FPGA disponible para ser programada en VHDL y Verilog', 4499, 'Electrónica', null, 'fileImg-fpgaBoard.jpg');

insert into products (name, description, precio, categoria, img, fileImg)
values ('Libro fisico usado', 'Libro para aprender a programar una fpga', 1200, 'Lectura', null, 'fileImg-Libro.jpg');

insert into products (name, description, precio, categoria, img, fileImg)
values ('macbook', 'descripción no disponible', 400, 'Computadoras', null, 'fileImg-macbook.jpg');

insert into products (name, description, precio, categoria, img, fileImg)
values ('samsung-galaxy-s10', 'descripción no disponible', 500, 'Celulares', null, 'fileImg-samsung-galaxy-s10.jpg');

insert into products (name, description, precio, categoria, img, fileImg)
values ('tv-samsung-smart', 'descripción no disponible', 600, 'Entretenimiento', null, 'fileImg-tv-samsung-smart.jpg');

insert into products (name, description, precio, categoria, img, fileImg)
values ('Bicicleta roja', 'Bicicleta de alto rendimiento', 1250, 'Deportes', 'https://ciclo-mania.com/wp-content/uploads/2019/11/Bicicleta-de-carretera-WRC-Volcano-disc-105.jpeg', null);

insert into products (name, description, precio, categoria, img, fileImg)
values ('Mouse Inalámbrico para Notebook, PC, computadora', 'Mouse Inalámbrico para Notebook, PC, computadora' , 15, 'Computo', 'https://www.quierofertas.com/media/catalog/product/m/o/mouse4_1_3_1_1_1.jpg', null);

insert into products (name, description, precio, categoria, img, fileImg)
values ('Imagen de un paisaje', 'Es un cuadro de un paisaje de 30x30 cm.' , 3333, 'SIN CATEGORIA', 'https://img.fotocommunity.com/atardeceres-1b2829bd-e28f-47e5-9a55-8d9988f8e184.jpg?height=1080', null);

select * from products;
