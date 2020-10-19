
@echo off
:: nodejs安装目录下的nodevars.bat
set nodevars = "D:\node\nodevars.bat"
:: 切换到D盘
e:
:: 移动到需要启动的目录
cd E:\wwwRoot\社区商城\community-shop\app-shop
:: 启动项目
cmd /c %nodevars%&&npm run dev