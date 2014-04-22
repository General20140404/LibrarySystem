@echo off
call config.bat

for %%a in (%MONGODB_COLLECTION%) do (
	echo %%a :
	%MONGODB_PATH%\bin\mongoimport -d %MONGODB_DATABASE% -c %%a %HOME%\data\%%a.dat
)

pause