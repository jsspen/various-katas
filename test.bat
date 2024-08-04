@echo off

setlocal enabledelayedexpansion

rem Prompt the user to enter a name
rem set is used to assign value to a variable (search_name) in this case
rem /p is used to prompt the user for the value of the variable
rem the prompt comes from =Enter the name of the folder to search for:
set /p search_name=Enter the name of the folder to search for: 

rem Use the dir command to search for folders with the specified name
rem searches for folders with the specified name (%search_name%) in the current directory
rem /b is an option for the dir command that is used to display "bare format" names of files and directories
rem /ad is an option for the dir command that filters out files and lists only directories
rem > nul redirects the output to nul, suppressing the output from display
dir /b /ad /s "%search_name%" > nul

rem Check the errorlevel to determine if the folder was found
rem errorlevel 1 means it encountered an error
if errorlevel 1 (
    echo Folder "%search_name%" not found in the current directory.
) else (
    echo Folder "%search_name%" found in the current directory.
    set /p "answer=Would you like to change to that directory and continue? (yes/no): "
    set "firstChar=!answer:~0,1!"
    set "firstChar=!firstChar:y=Y!"
    set "firstChar=!firstChar:n=N!"

    if "!firstChar!"=="Y" (
        echo User chose Yes.
        REM Your Yes logic here
    ) else if "!firstChar!"=="N" (
        echo User chose No.
        REM Your No logic here
    ) else (
        echo Invalid input. Please enter Yes or No.
    )
)
