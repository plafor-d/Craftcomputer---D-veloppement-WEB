DROP SCHEMA IF EXISTS `craftcomputer` ;
CREATE SCHEMA IF NOT EXISTS `craftcomputer` DEFAULT CHARACTER SET utf8 ;

USE `craftcomputer` ;
CREATE TABLE IF NOT EXISTS `craftcomputer`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `price` VARCHAR(45) NULL,
  `description` VARCHAR(400) NULL,
  `provider` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `craftcomputer`.`uses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `craftcomputer`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NULL,
  `product_id` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
