-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: mi_aplicacion2
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `data` blob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,'sveltekit (1).jpg',_binary 'uploads\\1716685014255-sveltekit (1).jpg'),(2,1,'Imagen de WhatsApp 2024-03-15 a las 22.25.04_fe09b04b.jpg',_binary 'uploads\\1716767909163-Imagen de WhatsApp 2024-03-15 a las 22.25.04_fe09b04b.jpg'),(3,1,'Imagen de WhatsApp 2024-03-15 a las 22.26.58_e4ba08c0.jpg',_binary 'uploads\\1716768659529-Imagen de WhatsApp 2024-03-15 a las 22.26.58_e4ba08c0.jpg'),(4,1,'Imagen de WhatsApp 2024-03-15 a las 22.23.22_602d72ce.jpg',_binary 'uploads\\1716801844625-Imagen de WhatsApp 2024-03-15 a las 22.23.22_602d72ce.jpg'),(5,1,'607shots_so.png',_binary 'uploads\\1716811061408-607shots_so.png'),(6,1,'348shots_so.png',_binary 'uploads\\1716832056399-348shots_so.png'),(7,1,'711shots_so.png',_binary 'uploads\\1716923285522-711shots_so.png'),(8,1,'796shots_so.png',_binary 'uploads\\1716923285524-796shots_so.png'),(9,1,'809shots_so.png',_binary 'uploads\\1716923285524-809shots_so.png'),(10,1,'89shots_so.png',_binary 'uploads\\1716924040839-89shots_so.png'),(11,1,'192shots_so.png',_binary 'uploads\\1716924040840-192shots_so.png'),(12,1,'348shots_so.png',_binary 'uploads\\1716924040840-348shots_so.png'),(13,1,'389shots_so.png',_binary 'uploads\\1716924040840-389shots_so.png'),(14,1,'453shots_so.png',_binary 'uploads\\1716924040841-453shots_so.png');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `correo_electronico` varchar(255) NOT NULL,
  `contrase├▒a` varchar(255) NOT NULL,
  `es_admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo_electronico` (`correo_electronico`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'onlyirina7@gmail.com','1234',1),(3,'1234','1234',0),(4,'proyectoperfumerias@gmail.com','9999',0),(13,'karina@gmail.com','Karina2003.',0),(15,'lucky@gmail.com','Lucky2003.',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-04  0:20:01
