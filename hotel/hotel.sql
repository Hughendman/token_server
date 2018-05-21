/*
Navicat MySQL Data Transfer

Source Server         : yinxs
Source Server Version : 50640
Source Host           : localhost:3306
Source Database       : hotel

Target Server Type    : MYSQL
Target Server Version : 50640
File Encoding         : 65001

Date: 2018-05-21 16:56:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hotel_user
-- ----------------------------
DROP TABLE IF EXISTS `hotel_user`;
CREATE TABLE `hotel_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0',
  `describe` varchar(255) DEFAULT NULL,
  `tel` int(20) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hotel_user
-- ----------------------------
INSERT INTO `hotel_user` VALUES ('1', 'yinxs', '123456', '2018-05-18 10:10:37', '0', null, null, null);
INSERT INTO `hotel_user` VALUES ('2', 'dan', '456789', '2018-05-18 10:10:50', '0', null, null, null);

-- ----------------------------
-- Table structure for token
-- ----------------------------
DROP TABLE IF EXISTS `token`;
CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hotel_user_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of token
-- ----------------------------
INSERT INTO `token` VALUES ('27', '1', 'yinxs123456KD2aHGmwWpDJzeakPbXe7JD4ErfcYSSA', '2018-05-18 14:46:01');
INSERT INTO `token` VALUES ('28', '1', 'yinxs123456HjyMG8iT7TRy63sAnhJFkXxxsxp3kfT7', '2018-05-18 14:46:01');
INSERT INTO `token` VALUES ('29', '1', 'yinxs123456F3FkeWDDFhWmD7EMZaf77WyW243aZJr4', '2018-05-18 14:46:02');
INSERT INTO `token` VALUES ('40', '2', 'dan456789XeeFMPKBc8Z6SNeDaYc6GtfZTfmiEp8f', '2018-05-18 15:04:02');
INSERT INTO `token` VALUES ('41', '2', 'dan4567895jk46aeCEFynP65xG2kJT6KFrrJ5ZJMX', '2018-05-18 15:05:31');
INSERT INTO `token` VALUES ('42', '2', 'dan4567898yzFkSRmnJpXpjnM7nxJRZEtrc7ZhaNa', '2018-05-18 15:05:43');
