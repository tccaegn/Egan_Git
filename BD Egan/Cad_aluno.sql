-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: mtec3dsegan.vpscronos0205.mysql.dbaas.com.br
-- Generation Time: 08-Nov-2024 às 10:58
-- Versão do servidor: 8.0.31-23
-- PHP Version: 5.6.40-0+deb8u12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mtec3dsegan`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Cad_aluno`
--

CREATE TABLE `Cad_aluno` (
  `idA` int NOT NULL,
  `nomeA` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `emailA` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telefoneA` varchar(30) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `rm` int DEFAULT NULL,
  `instituicaoA` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cursoA` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `senhaA` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Extraindo dados da tabela `Cad_aluno`
--

INSERT INTO `Cad_aluno` (`idA`, `nomeA`, `emailA`, `telefoneA`, `rm`, `instituicaoA`, `cursoA`, `senhaA`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Bddh', 'Vehs', '8454', 8454, 'Vshs', 'Vshs', 'bsbs'),
(3, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cad_aluno`
--
ALTER TABLE `Cad_aluno`
  ADD PRIMARY KEY (`idA`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Cad_aluno`
--
ALTER TABLE `Cad_aluno`
  MODIFY `idA` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
