# 主要注意点

## category的添加接口 有具体的自增id的写法

## log-configs 的列表获取接口 有具体的多条件模糊匹配代码   后端代码

1. 本地启动先到mongodb的bin内启动 usr/local/mongodb/bin 启用命令 ./mongod --dbpath=/../../../Users/zhangzeyi/data/db

2. 注意进程以及根目录中 data/db的权限问题  重新展示项目时就删除db 新建一个 初始化项目  后端代码也要yarn start

3. 默认账号密码 zhangzeyi 123456