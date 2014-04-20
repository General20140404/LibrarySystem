@echo off
call config.bat

%MONGODB_PATH%\bin\mongoimport -d %MONGODB_DATABASE% -c %MONGODB_COLLECTION% %HOME%\data\book.dat


pause