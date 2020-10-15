
@echo off
:: nodejs安装目录下的nodevars.bat
set nodevars = "D:\node\anzhuang\nodevars.bat"
:: 切换到D盘
e:
:: 移动到需要启动的目录
cd code/jjjshop/app-shop
:: 启动项目
cmd /c %nodevars%&&npm run dev