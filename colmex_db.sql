DROP DATABASE IF EXISTS colmex_db;
CREATE DATABASE colmex_db;
USE colmex_db;

--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `telefono` INT,
   `birth_date` VARCHAR(255),
   `addres` VARCHAR(255),
   `profile` VARCHAR(255) NOT NULL,
   `fname` VARCHAR(255) NOT NULL,
   `lname` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `country` VARCHAR(255),
   `password` TEXT NOT NULL,
   `subject` VARCHAR(255),
   `fileImg` TEXT,
   PRIMARY KEY (`id`)
);

--
-- Dumping data for table `users`
--
insert into users (telefono, birth_date, addres, profile, fname, lname, email, country, password, subject, fileImg)
values (4422503259, '06-11-2022', 'Pirineos', 'sell', 'LUIS ALBERTO', 'ANGELES', 'langeles11@alumnos.uaq.mx', 'mexico', '$2a$10$bUDQnGBwSXb80w8Ep49K1O.x/v1C4/c9OLU9J49APLuJyQLB0Kcgq', null, 'beto.jpg');

insert into users (telefono, birth_date, addres, profile, fname, lname, email, country, password, subject, fileImg)
values (3118739670, '14-08-1992', 'Bogotá', 'buy', 'David', 'Pieters', 'davidpieters12@gmail.com', 'Colombia', '$2a$10$bUDQnGBwSXb80w8Ep49K1O.x/v1C4/c9OLU9J49APLuJyQLB0Kcgq', null, '1656633069900-th-1649551002.jpg');

insert into users (telefono, birth_date, addres, profile, fname, lname, email, country, password, subject, fileImg)
values (11251458, '2022-06-21', 'Av. siempre vida', 'sell', 'Pablo', 'M', 'pablo@digitalHouse.com', 'Colombia', '$2a$10$LdK8oF0HoL38i4XoOi9VxO4VHs5PMmMF3n/eG1Zto6kyWyIDzG52e', 'saludos', '1655866290764-pablo.JPG');
UNLOCK TABLES;

--
-- Table structure for table `famous`
--
DROP TABLE IF EXISTS `famous`;
CREATE TABLE `famous` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `precio` FLOAT NOT NULL,
   `categoria` VARCHAR(255) NOT NULL,
   `img` TEXT,
   `fileImgP` TEXT,
   `description` VARCHAR(255),
   `userId` INT NOT NULL,
   `product_id` INT NOT NULL,
   `star` INT NOT NULL,
   PRIMARY KEY (`id`)
);

--
-- Dumping data for table `famous`
--
INSERT INTO famous (name,precio,categoria,img,fileImgP,description,userId,product_id,star)
values ('FPGA-Board',4499,'Electrónica','','fileImg-fpgaBoard.jpg','Descripción: Tarjeta de desarrollo FPGA disponible para ser programada en VHDL y Verilog',1,2,5);

insert into famous (name,precio,categoria,img,fileImgP,description,userId,product_id,star)
values ('tv-samsung-smart', 600, 'Entretenimiento', '', 'fileImg-tv-samsung-smart.jpg','descripción no disponible',1,6,5);
UNLOCK TABLES;

--
-- Table structure for table `offers`
--
DROP TABLE IF EXISTS `offers`;
CREATE TABLE `offers` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `precio` FLOAT NOT NULL,
   `categoria` VARCHAR(255) NOT NULL,
   `img` TEXT,
   `fileImg` TEXT,
   `description` VARCHAR(255),
   `userId` INT NOT NULL,
   `product_id` INT NOT NULL,
   `save_product` INT NOT NULL,
   PRIMARY KEY (`id`)
);

--
-- Dumping data for table `offers`
--
INSERT INTO offers (name,precio,categoria,img,fileImg,description,userId,product_id,save_product)
values ("Libro fisico usado",1200,'Lectura','','fileImg-Libro.jpg','Libro para aprender a programar una fpga',1,3,25);

INSERT INTO offers (name,precio,categoria,img,fileImg,description,userId,product_id,save_product)
values ('macbook', 400, 'Computadoras', '', 'fileImg-macbook.jpg','descripción no disponible',1,4,15);
UNLOCK TABLES;

--
-- Table structure for table `products`
--
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `precio` FLOAT NOT NULL,
   `categoria` VARCHAR(255) NOT NULL,
   `img` TEXT,
   `fileImg` TEXT,
   `description` VARCHAR(255),
   `userId` INT NOT NULL,
   PRIMARY KEY (`id`)
);
--
-- Dumping data for table `products`
--

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('Consola de video juego', 3000, 'Video juegos', null, 'fileImg-Consola.jpg','Consola semi-nueva',1);

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('FPGA-Board', 4499, 'Electrónica', null, 'fileImg-fpgaBoard.jpg','Tarjeta de desarrollo FPGA disponible para ser programada en VHDL y Verilog',1);

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('Libro fisico usado', 1200, 'Lectura', null, 'fileImg-Libro.jpg','Libro para aprender a programar una fpga',1);

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('macbook', 400, 'Computadoras', null, 'fileImg-macbook.jpg','descripción no disponible',1);

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('samsung-galaxy-s10', 500, 'Celulares', null, 'fileImg-samsung-galaxy-s10.jpg','descripción no disponible',1);

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('tv-samsung-smart', 600, 'Entretenimiento', null, 'fileImg-tv-samsung-smart.jpg','descripción no disponible',1);

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('Bicicleta roja', 1250, 'Deportes', 'https://ciclo-mania.com/wp-content/uploads/2019/11/Bicicleta-de-carretera-WRC-Volcano-disc-105.jpeg', null,'Bicicleta de alto rendimiento',2);

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('Mouse Inalámbrico para Notebook, PC, computadora', 15, 'Computo', 'https://www.quierofertas.com/media/catalog/product/m/o/mouse4_1_3_1_1_1.jpg', null,'Mouse Inalámbrico para Notebook',3);

insert into products (name, precio, categoria, img, fileImg, description, userId)
values ('Imagen de un paisaje', 3333, 'SIN CATEGORIA', 'https://img.fotocommunity.com/atardeceres-1b2829bd-e28f-47e5-9a55-8d9988f8e184.jpg?height=1080', null,'Es un cuadro de un paisaje de 30x30 cm.',1);
UNLOCK TABLES;

--
-- Table structure for table `comments`
--
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `comment` TEXT NOT NULL,
   `userId` INT NOT NULL,
   `product_id` INT NOT NULL,
   `fileImg` TEXT,
   `fname` VARCHAR(255) NOT NULL,
   `star` INT NOT NULL,
   PRIMARY KEY (`id`)
);
--
-- Dumping data for table `comments`
--
insert into comments (comment, userId, product_id,fileImg,fname,star)
values ('esta muy caro', 1, 2,'beto.jpg','LUIS ALBERTO',5);

insert into comments (comment, userId, product_id,fileImg,fname,star)
values ('Pregunta lo que quieras del producto', 1, 3,'beto.jpg','LUIS ALBERTO',4);

insert into comments (comment, userId, product_id,fileImg,fname,star)
values ('Sigue disponible?', 2, 4,'1656633069900-th-1649551002.jpg','David',3);

insert into comments (comment, userId, product_id,fileImg,fname,star)
values ('Lo tienes en color blanco?', 3, 6,'1655866290764-pablo.JPG','Pablo',5);
UNLOCK TABLES;

--
-- Table structure for table ``shoppingCarts``
--
DROP TABLE IF EXISTS `shoppingCarts`;
CREATE TABLE `shoppingCarts` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `userId` INT NOT NULL,
   `product_id` INT NOT NULL,
   `quantity` INT NOT NULL,
   PRIMARY KEY (`id`)
);
--
-- Dumping data for table `shoppingCarts`
--
insert into shoppingCarts (userId, product_id,quantity)
values (1, 7, 3);

insert into shoppingCarts (userId, product_id,quantity)
values (1, 8, 6);

insert into shoppingCarts (userId, product_id,quantity)
values (2, 2, 1);

insert into shoppingCarts (userId, product_id,quantity)
values (3, 3, 1);
UNLOCK TABLES;

ALTER TABLE `famous` ADD CONSTRAINT `FK_338c27d0-e966-4ae6-935e-6a572c461af6` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `offers` ADD CONSTRAINT `FK_bbe03078-351e-444b-a220-4d724504a4db` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `products` ADD CONSTRAINT `FK_01a94b0a-acf3-478d-870f-1bc029a71749` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `comments` ADD CONSTRAINT `FK_0ecbb43d-1b9e-4216-b37a-7ae7258e39f4` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `comments` ADD CONSTRAINT `FK_a16b179a-adb3-4d0f-ab1c-51ef684f7b55` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `shoppingCarts` ADD CONSTRAINT `FK_7e3499d5-46eb-48be-a7ab-cd21ca35fbd8` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `shoppingCarts` ADD CONSTRAINT `FK_414b22d3-0d65-4daf-8dc6-65b3ea255fbf` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- select * from users;
-- select * from offers;
select * from famous;
-- select * from products;
-- select * from shoppingCarts;
-- select * from comments;