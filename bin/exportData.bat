@echo off
call config.bat

%MONGODB_PATH%\bin\mongoexport -d %MONGODB_DATABASE% -c %MONGODB_COLLECTION% -o %HOME%\data\book.dat

pause