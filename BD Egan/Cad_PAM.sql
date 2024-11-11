-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: mtec3dsegan.vpscronos0205.mysql.dbaas.com.br
-- Generation Time: 08-Nov-2024 às 10:59
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
-- Estrutura da tabela `Cad_PAM`
--

CREATE TABLE `Cad_PAM` (
  `id` int NOT NULL,
  `nome` varchar(80) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(60) COLLATE latin1_general_ci DEFAULT NULL,
  `telefone` bigint DEFAULT NULL,
  `matricula` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `instituicao` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `curso` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `rg` varchar(9) COLLATE latin1_general_ci DEFAULT NULL,
  `cpf` varchar(11) COLLATE latin1_general_ci DEFAULT NULL,
  `rm` int DEFAULT NULL,
  `senha` varchar(50) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `Cad_PAM`
--

INSERT INTO `Cad_PAM` (`id`, `nome`, `email`, `telefone`, `matricula`, `instituicao`, `curso`, `rg`, `cpf`, `rm`, `senha`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Efg', 'Dui', 8666, '268', '0', '', '688', '467', 0, 'Dugh'),
(4, 'Efg', 'Dui', 8666, '268', '0', '', '688', '467', 0, 'Dugh'),
(5, 'Rr', 'Xf', 855, '85', '0', '', '466', '456', 1, 'Fyhj'),
(6, 'Rr', 'Xf', 855, '85', 'Drt', '', '466', '456', 1, 'Fyhj'),
(7, 'Rr', 'Xf', 855, '85', 'Drt', '', '466', '456', 1, 'Fyhj'),
(8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Usjs', 'Hshs', 97976, '0', 'Gstsy', 'Fehe', '0', '0', 5494, 'Gebeg'),
(10, 'Aline Caroline', 'Alisbdh', 129883524, '0', 'Shsihsbsbsbsb', 'Bsbsnndnz', '0', '0', 12138543, '1223637'),
(11, 'Aline Caroline', 'Alisbdh', 129883524, '0', 'Shsihsbsbsbsb', 'Bsbsnndnz', '0', '0', 12138543, '1223637'),
(12, 'Aline Caroline', 'Alisbdh', 129883524, '0', 'Shsihsbsbsbsb', 'Bsbsnndnz', '0', '0', 12138543, '1223637'),
(13, 'Aline Caroline', 'Alisbdh', 129883524, '0', 'Shsihsbsbsbsb', 'Bsbsnndnz', '0', '0', 12138543, '1223637'),
(14, 'A', 'A', 1, '0', 'A', 'A', '0', '0', 1, 'a'),
(15, 'B', 'B', 1, '1', 'B', '', '1', '1', 0, 'b'),
(16, 'B', 'B', 1, '1', 'B', '', '1', '1', 0, 'b'),
(17, 'C', 'C', 1, '2', 'C', '', '1', '4', 0, 'c'),
(18, 'D', 'D', 2, '5', 'D', '', '5', '5', 0, 'd'),
(19, 'Teste', 'Teste', 12, '0', 'Teste', 'Teste', '0', '0', 45, 'teste'),
(20, 'M', 'M', 2, '0', 'M', 'M', '0', '0', 2, 'm'),
(21, 'Teste1', 'Teste1', 12345678, '0', 'Teste1', 'Teste1', '0', '0', 1234, 'teste1'),
(22, 'Gi', 'giovanna@gmail.com', 12981991186, '0', 'Eosjdj', 'Dudeu', '0', '0', 2531, 'Gi25344352'),
(23, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 'Teste0', 'Teste0', 123456, '0', 'Teste0', 'Teste0', '0', '0', 123456, 'teste0'),
(26, 'trtre', 'twtw', 23432, '0', 'fdgts', 'dfsfsd', '0', '0', 42332, 'sdfsz'),
(27, 'Ppp', 'Ppp', 333, '0', 'Ppp', 'Ppp', '0', '0', 333, 'pop'),
(28, 'Teste', 'Teste', 123, '0', '195', 'Ds', '0', '0', 123, 'teste'),
(29, 'Aluno01', 'aluno01@etec.sp.gov.br', 12991548339, '0', 'ETEC São José dos Campos', 'Desenvolvimento de Sistemas', '0', '0', 220163, '123456789'),
(30, 'Aluno01', 'aluno01@etec.sp.gov.br', 12991548339, '0', 'ETEC São José dos Campos', 'Desenvolvimento de Sistemas', '0', '0', 220163, '123456789'),
(31, 'Coordenador', 'Coordenador@etec.sp.gov.br', 12991564332, '123456789', 'ETEC São José dos Campos', '', '570199523', '54460782219', 0, '123456789');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cad_PAM`
--
ALTER TABLE `Cad_PAM`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Cad_PAM`
--
ALTER TABLE `Cad_PAM`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
