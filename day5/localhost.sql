-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 05 月 19 日 01:21
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `eight`
--
CREATE DATABASE `eight` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `eight`;

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `src` varchar(250) NOT NULL,
  `price` varchar(30) DEFAULT NULL,
  `jieshao` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`sid`, `src`, `price`, `jieshao`) VALUES
(1, 'http://pic3.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_1_pic1080_3763.jpg', '58.80', '【爆款】G7中原3合1速溶咖啡1600g(越南进口 袋)'),
(2, 'http://pic3.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_2_pic1080_8904.jpg', NULL, NULL),
(3, 'http://pic2.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_3_pic1080_7696.jpg', NULL, NULL),
(4, 'http://pic1.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_4_pic1080_4055.jpg', NULL, NULL),
(5, 'http://pic1.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_5_pic1080_2308.jpg', NULL, NULL),
(6, 'http://pic3.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_6_pic1080_5249.jpg', NULL, NULL),
(7, 'http://pic1.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_7_pic1080_2897.jpg', NULL, NULL),
(8, 'http://pic1.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_8_pic1080_8827.jpg', NULL, NULL),
(9, 'http://pic1.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_10_pic1080_7379.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `classifytab`
--

CREATE TABLE IF NOT EXISTS `classifytab` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `src` varchar(300) NOT NULL,
  `price` varchar(20) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `classifytab`
--

INSERT INTO `classifytab` (`sid`, `src`, `price`, `name`) VALUES
(1, 'http://pic3.womai.com/upload/601/603/606/6300/6305/6315/531671/531671_1_pic270_3763.jpg', '58.8', '【爆款】G7中原3合1速溶咖啡1600g(越南进口 袋)'),
(2, 'http://pic3.womai.com/upload/601/602/51600/564393/564393_1_pic270_5762.jpg', '89', '【中粮海外直采】Nescafe雀巢金牌速溶咖啡粉200g ...'),
(3, 'http://pic1.womai.com/upload/601/603/606/66102/66110/585440/585440_1_pic270_9562.jpg', '12.8', '【爆款】Tao Kae Noi小老板经典香脆紫菜27g（泰国...'),
(4, 'http://pic1.womai.com/upload/601/603/606/6060/6061/6074/611841/611841_0_pic270_9627.jpg', '13.9', '【中粮海外直采】时怡糙米夹心海苔脆'),
(5, 'http://pic2.womai.com/upload/601/603/90900/216060/216062/10181557/10181557_1_pic270_1480.jpg', '169', 'Perrier巴黎水含气天然矿泉水330ml(法国进口 瓶)*24'),
(6, 'http://pic3.womai.com/upload/601/604/439208/10681233/10681233_1_pic270_1390.jpg', '109', '瑞欧real coco椰子水（进口食品 罐装330ml*12）'),
(7, 'http://pic3.womai.com/upload/601/603/606/66102/66108/496884/619138/10692727_1_pic270_3062.jpg', '39,8', '【中粮海外直采】Snack House零食屋盐焗腰果300g ...'),
(8, 'http://pic1.womai.com/upload/601/603/606/66102/200620/623497/10692721_1_pic270_4111.jpg', '3', '【中粮海外直采】高尾制面牌精选乌冬面270g（日本...');

-- --------------------------------------------------------

--
-- 表的结构 `loading`
--

CREATE TABLE IF NOT EXISTS `loading` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `src` varchar(300) NOT NULL,
  `alt` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `loading`
--

INSERT INTO `loading` (`sid`, `src`, `alt`) VALUES
(1, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad1-1.png', '进口'),
(2, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad2.png', '我买严选'),
(3, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad3-1.png', '休闲零食'),
(4, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad4-1.png', NULL),
(5, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad5-1.png', '环球母婴囤货节'),
(6, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad6-1.png', '好奶疯狂购'),
(7, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad7.png', '囤水好时节'),
(8, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad8.png', '厨具厨电'),
(9, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad9-3.png', '麻辣小龙虾'),
(10, 'http://pic.womai.com/pic/sale/2018/selfimages/0502/hb/ad10-2.png', '女性用具');

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`username`, `password`, `email`) VALUES
('asdasd', '25d55ad283aa400af464c76d713c07ad', '12312312312'),
('qweqwe', '0b49939d6415354c950b142a0b1e696a', '12312312312'),
('qweqwe1q', '4297f44b13955235245b2497399d7a93', '12312312312'),
('qweqwe1qwe', '4297f44b13955235245b2497399d7a93', '12312312312'),
('阿斯顿撒旦', 'b26986ceee60f744534aaab928cc12df', '12312312312');

-- --------------------------------------------------------

--
-- 表的结构 `nav`
--

CREATE TABLE IF NOT EXISTS `nav` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- 转存表中的数据 `nav`
--

INSERT INTO `nav` (`sid`, `name`) VALUES
(1, '樱桃'),
(2, '奇异果'),
(3, '橙子'),
(4, '苹果'),
(5, '热带水果'),
(6, '葡萄提子'),
(7, '瓜'),
(8, '芒果'),
(9, '虾类'),
(10, '鱼类'),
(11, '贝类'),
(12, '海参'),
(13, '蟹类'),
(14, '鲍类'),
(15, '干货类'),
(16, '海鲜礼盒'),
(17, '进口肉食'),
(18, '羊肉'),
(19, '牛肉'),
(20, '猪肉'),
(21, '畜肉'),
(22, '蛋类'),
(23, '有机蔬菜'),
(24, '精品蔬菜'),
(25, '加工蔬菜'),
(26, '冷冻蔬菜'),
(27, '鲜奶'),
(28, '酸奶'),
(29, '黄油乳酪'),
(30, '低温果汁'),
(31, '低温饮品'),
(32, '饺子混沌'),
(33, '包子馒头'),
(34, '汤圆年糕'),
(35, '西式主食'),
(36, '西式糕点'),
(37, '中式糕点'),
(38, '酸菜'),
(39, '调味品'),
(40, '火锅肉丸'),
(41, '腌腊制品'),
(42, '熟肉肠类'),
(43, '即食菜品'),
(44, '火腿'),
(45, '冰淇棱'),
(46, '雪糕'),
(47, '冰棍'),
(48, '肉类礼盒'),
(49, '海鲜礼盒'),
(50, '生鲜提货券'),
(51, '特色礼品'),
(52, '礼卡');
