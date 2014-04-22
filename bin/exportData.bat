@echo off
call config.bat

for %%a in (%MONGODB_COLLECTION%) do (
	echo %%a :
	%MONGODB_PATH%\bin\mongoexport -d %MONGODB_DATABASE% -c %%a -o %HOME%\data\%%a.dat	
)

pause