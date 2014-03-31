-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: localhost    Database: radicalbooking
-- ------------------------------------------------------
-- Server version	5.5.16
/* Preserve session variables */
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS=0;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `offer_id` int(11) DEFAULT NULL,
  `maxPart` int(11) NOT NULL,
  `minPart` int(11) NOT NULL,
  `part` int(11) NOT NULL,
  `allDay` tinyint(1) NOT NULL,
  `bgColor` varchar(45) DEFAULT NULL,
  `borderColor` varchar(45) DEFAULT NULL,
  `textColor` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (21,5,4,2,4,0,NULL,NULL,NULL,NULL),(22,12,3,1,3,0,NULL,NULL,NULL,NULL),(23,5,4,2,4,0,NULL,'red',NULL,NULL),(27,12,3,1,3,0,NULL,NULL,NULL,NULL),(28,5,4,2,0,0,NULL,NULL,NULL,NULL),(29,14,4,2,1,0,NULL,NULL,NULL,NULL),(30,12,3,1,3,0,NULL,NULL,NULL,NULL),(31,15,2,1,0,0,NULL,NULL,NULL,NULL),(32,8,1,1,1,0,NULL,NULL,NULL,NULL),(33,6,6,2,3,0,NULL,NULL,NULL,NULL),(34,5,4,2,0,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` mediumint(8) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sex` varchar(1) NOT NULL,
  `height` smallint(6) NOT NULL,
  `weight` smallint(6) NOT NULL,
  `nationality` varchar(45) NOT NULL,
  `info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Client_users1` (`users_id`),
  CONSTRAINT `fk_Client_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (2,8,'client01h3','client1 h3 address','client1h3@mail.com','666666','1980-07-18','f',170,80,'portugues','client1h3'),(3,8,'client02h3','addr','client2h3@mail.com','222222','1980-07-23','m',0,0,'ingles',''),(5,8,'client03h3','addr','client3h3@mail.com','333333','1980-07-14','m',0,0,'portugues',''),(6,8,'client04h3','addr','client4h3@mail.com','444444','1980-07-09','m',0,0,'portugues',''),(7,8,'client05h3','addr','client5h3@mail.com','555555','1980-07-04','m',0,0,'portugues',''),(8,8,'client06h3','addr','client6h3@mail.com','666669','1980-07-17','m',0,0,'portugues',''),(9,5,'client1h1','addr','client1h1@mail.com','111111','1980-07-02','m',0,0,'portugues',''),(10,5,'client2h1','addr','client2h1@mail.com','222222','1980-07-31','m',0,0,'portugues',''),(27,7,'s3Client01','address ','s3Client01@mail.com','910000000','1980-07-01','m',175,80,'Portuguesa','information about s3Client01'),(28,7,'s3Client02','address ','s3Client02@mail.com','912000000','1980-07-01','m',170,90,'Portuguesa','information about s3Client02'),(29,7,'s3Client03','address ','s3Client03@mail.com','913000000','1980-07-01','f',165,50,'Portuguesa','information about s3Client03'),(54,3,'Maria','Rua das Travessas','maria@mail.com','914567898','1980-07-31','f',165,50,'Portuguesa','Iniciante'),(55,3,'João','Rua quintero','joao@mail.com','968533445','1972-07-25','m',180,80,'Portuguesa','Ja fez algumas aulas'),(56,3,'Manuel','Rua das vitorias','manuel@mail.com','918974532','1972-07-19','m',168,80,'Portuguesa','iniciante'),(57,3,'Marta','Rua qualquer','marta@mail.com','9178547327','1988-07-21','f',164,60,'Portuguesa','A iniciar'),(58,5,'João','Rua do carmo','joao@mail.com','913848383','1975-07-09','m',180,80,'Portuguesa','Observações de João');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_language`
--

DROP TABLE IF EXISTS `client_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_language` (
  `client_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  PRIMARY KEY (`client_id`,`language_id`),
  CONSTRAINT `fk_client_language` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_language`
--

LOCK TABLES `client_language` WRITE;
/*!40000 ALTER TABLE `client_language` DISABLE KEYS */;
INSERT INTO `client_language` VALUES (2,1),(2,2),(2,3),(3,1),(3,2),(5,1),(6,1),(6,2),(8,1),(9,1),(9,4),(10,1),(10,3),(58,1),(58,2);
/*!40000 ALTER TABLE `client_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extra`
--

DROP TABLE IF EXISTS `extra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `extra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `included_in_offer` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extra`
--

LOCK TABLES `extra` WRITE;
/*!40000 ALTER TABLE `extra` DISABLE KEYS */;
INSERT INTO `extra` VALUES (3,7,'almoço',15.00,'almoço',1,0),(4,7,'prancha',60.00,'prancha de surf',1,1),(5,7,'extra 1',10.00,'extra 1\r\n',1,1),(6,7,'extra 2',20.00,'extra 2',1,1),(7,7,'extra 3',30.00,'descrição do extra 3',1,1),(11,3,'extra 1',10.00,'',1,0);
/*!40000 ALTER TABLE `extra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extra_offer`
--

DROP TABLE IF EXISTS `extra_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `extra_offer` (
  `extra_id` int(11) NOT NULL,
  `offer_id` int(11) NOT NULL,
  PRIMARY KEY (`extra_id`,`offer_id`),
  KEY `fk_extra_offer` (`offer_id`),
  CONSTRAINT `fk_extra_offer` FOREIGN KEY (`offer_id`) REFERENCES `offer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extra_offer`
--

LOCK TABLES `extra_offer` WRITE;
/*!40000 ALTER TABLE `extra_offer` DISABLE KEYS */;
INSERT INTO `extra_offer` VALUES (4,5),(4,6),(6,8),(4,12);
/*!40000 ALTER TABLE `extra_offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extra_reserve`
--

DROP TABLE IF EXISTS `extra_reserve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `extra_reserve` (
  `extra_id` int(11) NOT NULL,
  `client_reserves_id` int(11) NOT NULL,
  KEY `fk_extra_reserves_client_reserves` (`client_reserves_id`),
  CONSTRAINT `fk_extra_reserves_client_reserves` FOREIGN KEY (`client_reserves_id`) REFERENCES `reserve` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extra_reserve`
--

LOCK TABLES `extra_reserve` WRITE;
/*!40000 ALTER TABLE `extra_reserve` DISABLE KEYS */;
INSERT INTO `extra_reserve` VALUES (3,36),(3,56),(4,56),(5,37),(5,38),(5,44),(5,46),(5,51),(6,43),(6,44),(6,48),(6,49),(6,62),(7,43),(7,52),(7,56),(7,62),(7,65),(11,50);
/*!40000 ALTER TABLE `extra_reserve` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fullcalevent`
--

DROP TABLE IF EXISTS `fullcalevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fullcalevent` (
  `schedule_id` int(11) NOT NULL,
  `editable` tinyint(1) NOT NULL,
  `allDay` tinyint(1) NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `bgColor` varchar(45) DEFAULT NULL,
  `borderColor` varchar(45) DEFAULT NULL,
  `textColor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`schedule_id`),
  CONSTRAINT `fk_schedule` FOREIGN KEY (`schedule_id`) REFERENCES `schedule` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fullcalevent`
--

LOCK TABLES `fullcalevent` WRITE;
/*!40000 ALTER TABLE `fullcalevent` DISABLE KEYS */;
INSERT INTO `fullcalevent` VALUES (98,0,0,'blue',NULL,'black',NULL),(99,0,0,'blue',NULL,'black',NULL),(100,0,0,'blue',NULL,'black',NULL),(101,0,0,'blue',NULL,'black',NULL),(102,0,0,'blue',NULL,'black',NULL),(103,0,0,'blue',NULL,'black',NULL),(104,0,0,'blue',NULL,'black',NULL),(105,0,0,'blue',NULL,'black',NULL),(107,0,0,'blue',NULL,'black',NULL),(109,0,0,'blue',NULL,'black',NULL),(110,0,0,'blue',NULL,'black',NULL),(112,0,0,'blue',NULL,'black',NULL),(113,0,0,'blue',NULL,'black',NULL),(114,0,0,'blue',NULL,'black',NULL),(115,0,0,'blue',NULL,'black',NULL),(116,0,0,'blue',NULL,'black',NULL),(117,0,0,'blue',NULL,'black',NULL),(118,0,0,'blue',NULL,'black',NULL),(119,0,0,'blue',NULL,'black',NULL),(120,0,0,'blue',NULL,'black',NULL),(121,0,0,'blue',NULL,'black',NULL),(122,0,0,'blue',NULL,'black',NULL),(123,0,0,'blue',NULL,'black',NULL),(124,0,0,'blue',NULL,'black',NULL),(125,0,0,'blue',NULL,'black',NULL);
/*!40000 ALTER TABLE `fullcalevent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'admin','Administrator'),(2,'members','General User'),(3,'school','school group'),(4,'hotel','hotel group');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `language` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_en` varchar(45) NOT NULL,
  `nome_pt` varchar(45) NOT NULL,
  `nombre_es` varchar(45) NOT NULL,
  `nom_fr` varchar(45) NOT NULL,
  `duits_de` varchar(45) NOT NULL,
  `domain` varchar(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES (1,'Portuguese','Português','Portugués','Portugais','Portuguees','pt'),(2,'English','Inglês','Inglés','Anglais','Engels','en'),(3,'Spanish','Espanhol','español','espagnol','Spaans','es'),(4,'French','Francês','Francés','Francais','Französisch','fr'),(5,'Alemão','German','Alemán','Allemand','Deutsch','de');
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meta`
--

DROP TABLE IF EXISTS `meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meta` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(8) unsigned DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(100) NOT NULL,
  `transportPrice` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meta`
--

LOCK TABLES `meta` WRITE;
/*!40000 ALTER TABLE `meta` DISABLE KEYS */;
INSERT INTO `meta` VALUES (1,1,'Admin','istrator','ADMIN','0','',NULL),(2,2,'adriano','teixeira','softingal','912473876','',NULL),(3,3,'kim','sc1','Escola Um','919871234','Rua da Escola Um',20),(5,5,'fdaf','xxx','Hotel Um ','913498855','Morada do hotel 1',NULL),(6,6,'yuyuy','zzzfd','Hotel Dois','253584939','Morada do hotel Dois',NULL),(7,7,'school 3','last name school 3','Escola Três','912694589','Rua da Escola Três',10),(8,8,'hotel3','last name hotel 3','Hotel Três','948577373','Morada do hotel Três',NULL),(9,9,'sc2','sc2','Escola Dois','914577878','Rua da Escola Dois',5),(11,11,'sc4','sc4','Escola Quatro','917894545','Rua da Escola Quatro',NULL),(14,14,'','','Hotel Cem','100100100','Morada do hotel Cem',0),(16,16,'','','Hotel Quatro','938584343','Morada do hotel Quatro',0);
/*!40000 ALTER TABLE `meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` mediumint(9) NOT NULL,
  `name` varchar(45) CHARACTER SET latin1 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `numberOfClasses` int(11) NOT NULL,
  `level` varchar(45) CHARACTER SET latin1 NOT NULL,
  `minPart` int(11) NOT NULL,
  `maxPart` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `visible` tinyint(1) NOT NULL,
  `remainingClasses` int(11) NOT NULL,
  `part` int(11) NOT NULL DEFAULT '0',
  `description` varchar(255) DEFAULT NULL,
  `allDay` tinyint(1) NOT NULL,
  `bgColor` varchar(45) DEFAULT NULL,
  `borderColor` varchar(45) DEFAULT NULL,
  `textColor` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
INSERT INTO `offer` VALUES (5,7,'oferta1 - sh3 - Curso iniciação em grupo',85.00,3,'beginner',2,4,1,1,3,0,'Curso para a iniciação da pratica de surf ...',0,NULL,NULL,NULL,'#376355'),(6,7,'oferta2 - sh3 - Aula Iniciação em grupo',25.00,1,'beginner',2,6,1,1,1,0,'Aula para o primeiro contacto com o surf\r\n',0,NULL,NULL,NULL,NULL),(7,7,'oferta3 - sh3 - Curso Iniciação Individual',200.00,5,'advanced',1,1,1,1,5,0,'desc ... curso iniciação individual',0,NULL,NULL,NULL,NULL),(8,7,'oferta4 - sh3 - Aula Iniciação individual',50.00,1,'beginner',1,1,1,1,1,0,'Aula personalizada ...',0,'red','red',NULL,NULL),(9,7,'oferta5 - sh3 - Pack evolução em grupo',15.00,1,'advanced',2,6,1,1,1,0,'Descrição Pack evolução em Grupo',0,NULL,NULL,NULL,NULL),(10,7,'oferta6 - sh3 - curso, grupo Competição i8',200.00,8,'advanced',1,4,1,1,8,0,'Descrição grupo competição i8',0,NULL,NULL,NULL,NULL),(11,7,'oferta7 - sh3 - curso avançado individual',100.00,4,'advanced',1,1,1,1,4,0,'Curso personalizado para praticantes de surf avancado',0,NULL,NULL,NULL,NULL),(12,7,'oferta8 - sh3 - curso temporario',100.00,2,'advanced',1,3,1,1,2,0,'oferta 8 ',0,NULL,NULL,NULL,'#C43BD6'),(14,3,'tmp',10.00,2,'beginner',2,4,1,1,2,0,'tmp desc',0,NULL,NULL,NULL,NULL),(15,3,'offer 1 - sc1',30.00,2,'beginner',1,2,1,1,2,0,'oferta da escola 1',0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserve`
--

DROP TABLE IF EXISTS `reserve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reserve` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) NOT NULL,
  `reserves_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `offer_tmp_id` int(11) DEFAULT NULL,
  `hotelPayment` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `transportPrice` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserve`
--

LOCK TABLES `reserve` WRITE;
/*!40000 ALTER TABLE `reserve` DISABLE KEYS */;
INSERT INTO `reserve` VALUES (36,21,NULL,2,'2012-04-26 15:43:07',5,NULL,NULL,0),(37,21,NULL,3,'2012-04-26 15:52:25',5,NULL,NULL,0),(38,21,NULL,5,'2012-04-26 15:53:27',5,NULL,NULL,0),(39,21,NULL,6,'2012-04-26 17:54:15',5,NULL,NULL,0),(40,22,NULL,8,'2012-04-27 00:42:01',12,NULL,NULL,0),(41,22,NULL,7,'2012-04-27 00:42:21',12,NULL,NULL,0),(42,22,NULL,6,'2012-04-27 00:43:53',12,NULL,NULL,0),(43,23,NULL,27,'2012-04-30 17:09:31',NULL,NULL,NULL,0),(44,23,NULL,28,'2012-05-02 10:12:23',NULL,NULL,NULL,0),(45,23,NULL,29,'2012-05-02 17:33:14',NULL,NULL,NULL,0),(46,23,NULL,2,'2012-05-03 10:33:24',5,NULL,NULL,0),(47,27,NULL,28,'2012-05-04 18:42:15',NULL,NULL,NULL,0),(48,27,NULL,2,'2012-05-07 10:27:48',12,NULL,NULL,0),(49,27,NULL,5,'2012-05-10 18:29:39',12,NULL,NULL,0),(50,29,NULL,53,'2012-05-16 16:50:14',14,NULL,NULL,0),(51,30,NULL,27,'2012-05-24 14:13:33',NULL,NULL,NULL,0),(52,30,NULL,29,'2012-05-24 16:04:57',NULL,NULL,NULL,0),(53,30,NULL,28,'2012-05-24 16:07:30',NULL,NULL,NULL,0),(56,32,NULL,58,'2012-05-25 17:35:31',8,40,175,0),(62,33,NULL,27,'2012-05-28 16:24:12',NULL,NULL,75,0),(64,33,NULL,58,'2012-05-28 17:14:04',6,40,30,5),(65,33,NULL,28,'2012-05-29 11:28:06',NULL,NULL,55,0);
/*!40000 ALTER TABLE `reserve` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) DEFAULT NULL,
  `offer_id` int(11) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `reserves_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (98,21,5,'2012-04-28 07:00:00','2012-04-28 09:00:00',NULL),(99,21,5,'2012-04-28 09:30:00','2012-04-28 11:30:00',NULL),(100,21,5,'2012-04-28 12:00:00','2012-04-28 13:30:00',NULL),(101,23,5,'2012-05-04 08:30:00','2012-05-04 10:30:00',NULL),(102,22,12,'2012-05-05 08:30:00','2012-05-05 10:00:00',NULL),(103,22,12,'2012-05-05 11:30:00','2012-05-05 13:30:00',NULL),(104,23,5,'2012-05-11 08:00:00','2012-05-11 10:00:00',NULL),(105,23,5,'2012-05-11 11:00:00','2012-05-11 12:30:00',NULL),(107,25,13,'2012-05-10 07:30:00','2012-05-10 09:30:00',NULL),(109,27,12,'2012-05-22 06:30:00','2012-05-22 09:30:00',NULL),(110,27,12,'2012-05-23 07:30:00','2012-05-23 09:30:00',NULL),(112,28,5,'2012-05-16 10:00:00','2012-05-16 12:00:00',NULL),(113,30,12,'2012-05-26 14:30:00','2012-05-26 17:30:00',NULL),(114,28,5,'2012-05-28 10:30:00','2012-05-28 11:30:00',NULL),(115,28,5,'2012-05-29 10:00:00','2012-05-29 11:30:00',NULL),(116,29,14,'2012-05-23 09:00:00','2012-05-23 11:30:00',NULL),(117,29,14,'2012-05-23 15:00:00','2012-05-23 16:30:00',NULL),(118,30,12,'2012-06-02 11:00:00','2012-06-02 13:00:00',NULL),(119,31,15,'2012-05-29 12:00:00','2012-05-29 13:30:00',NULL),(120,31,15,'2012-05-31 13:30:00','2012-05-31 15:00:00',NULL),(121,32,8,'2012-06-06 08:30:00','2012-06-06 10:30:00',NULL),(122,33,6,'2012-06-09 10:00:00','2012-06-09 11:00:00',NULL),(123,34,5,'2012-06-15 11:00:00','2012-06-15 13:00:00',NULL),(124,34,5,'2012-06-19 11:00:00','2012-06-19 13:30:00',NULL),(125,34,5,'2012-06-21 11:30:00','2012-06-21 13:30:00',NULL);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sh`
--

DROP TABLE IF EXISTS `sh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sh` (
  `school_id` mediumint(9) NOT NULL,
  `hotel_id` mediumint(9) NOT NULL,
  `hotelPayment` int(11) DEFAULT NULL,
  `transportPrice` int(11) DEFAULT NULL,
  PRIMARY KEY (`school_id`,`hotel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sh`
--

LOCK TABLES `sh` WRITE;
/*!40000 ALTER TABLE `sh` DISABLE KEYS */;
INSERT INTO `sh` VALUES (3,5,5,10),(7,5,40,5),(7,8,20,10);
/*!40000 ALTER TABLE `sh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` mediumint(8) unsigned NOT NULL,
  `ip_address` char(16) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(40) NOT NULL,
  `salt` varchar(40) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `activation_code` varchar(40) DEFAULT NULL,
  `forgotten_password_code` varchar(40) DEFAULT NULL,
  `remember_code` varchar(40) DEFAULT NULL,
  `created_on` int(11) unsigned NOT NULL,
  `last_login` int(11) unsigned DEFAULT NULL,
  `active` tinyint(1) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'127.0.0.1','administrator','b706a6b0b50adaf2bd0302ca455c12cb8df35f1b','9462e8eee0','admin@mail.com','',NULL,'',1268889823,1343343517,1),(2,1,'127.0.0.1','adriano','48430585f689525e48f4c464978ddc35f48905f1',NULL,'adrianojlt@gmail.com',NULL,NULL,'',1321985401,1349544156,1),(3,3,'127.0.0.1','sc1','2d57ab77a60e954975bf579a8a45af2cdd09405a',NULL,'sc1@mail.com','',NULL,NULL,1322063781,1350181486,1),(5,4,'127.0.0.1','h1','b451c6af03b22646305aac0e42ffbe666aa79e47',NULL,'h1@mail.com',NULL,NULL,'',1323176704,1350430561,1),(6,4,'127.0.0.1','h2','5ce2a95ee2031563c2dc830f062e74e6f42a7a00',NULL,'h2@mail.com',NULL,NULL,NULL,1323705129,1338303482,1),(7,3,'127.0.0.1','sc3','508b13d75280ac2db6145e950661aa62525a5a8e',NULL,'sc3@mail.com',NULL,NULL,NULL,1324380789,1350181589,1),(8,4,'127.0.0.1','h3','3db321b68fb4b347966d74733cb03aeb85c18e21',NULL,'h3@mail.com',NULL,NULL,NULL,1326901519,1343343279,1),(9,3,'127.0.0.1','sc2','3043fe810bf8c39e8def21400af51af39d0b85e4',NULL,'sc2@mail.com',NULL,NULL,NULL,1329136174,1338397654,1),(11,3,'0.0.0.0','sc4','0f8b94af1aa434fb350dc74423587344978fb911',NULL,'sc4@mail.com',NULL,NULL,NULL,1330173661,1347714738,1),(14,4,'127.0.0.1','h100@mail.com','4f47f0b756d3750ac8ceed998915e9f1050e4ed6',NULL,'h100@mail.com',NULL,NULL,NULL,1338462816,1338480047,1),(16,4,'127.0.0.1','h4@mail.com','90c97ac1b1f86e292cf64b710f5b14bac6b67f77',NULL,'h4@mail.com',NULL,NULL,NULL,1338480205,1338480216,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-10-17  0:38:13
