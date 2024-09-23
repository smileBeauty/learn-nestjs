CREATE TABLE `local`.`t_user` (
  `id` VARCHAR(255) NOT NULL COMMENT 'id',
  `username` VARCHAR(255) NULL COMMENT '用户名',
  `password` VARCHAR(255) NULL COMMENT '密码',
  `telephone` VARCHAR(45) NULL COMMENT '手机号',
  `birthday` DATE NULL COMMENT '生日',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
COMMENT = '用户表';
