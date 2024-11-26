@echo off
setlocal enabledelayedexpansion

:main
cls
echo.
set "target="
set "found="

REM Prompt user for folder name to search
set /p "target=Enter the name of the folder to search for: "

REM Search for the folder (case insensitive)
for /d /r %%d in (*) do (
    if /i "%%~nxd"=="%target%" (
        set "found=%%d"
        goto :found
    )
)

:found
if defined found (
    echo.
    echo Folder found: %found%
    set /p "change=Would you like to change to this directory? (Y/N): "
    if /i "%change%"=="Y" (
        cd /d "%found%"
        echo Changed directory to: %found%
        echo dir
        pause
        goto :main
    ) else (
        goto :main
    )
) else (
    echo.
    echo Folder not found.
    :retryAction
    set "action="
    set /p "action=Would you like to try again with different input, create a new folder, or quit? (T/C/Q): "
    set "action=!action:~0,1!"
    echo You entered: %action%
    if /i "%action%"=="T" (
        goto :main
    ) else if /i "%action%"=="C" (
        goto :createFolder
    ) else if /i "%action%"=="Q" (
        exit /b
    ) else (
        echo Invalid input. Please try again.
        goto :retryAction
    )
)

:createFolder
REM Create a new folder matching the name in a subdirectory
set "firstLetter=%target:~0,1%"
set "firstLetter=%firstLetter:A=Z=a=z%"
if not exist "%cd%\%firstLetter%\" (
    mkdir "%cd%\%firstLetter%"
)
mkdir "%cd%\%firstLetter%\%target%"
set "newDir=%cd%\%firstLetter%\%target%"

echo.
echo New folder created: %newDir%
set /p "change=Would you like to change to this directory? (Y/N): "
if /i "%change%"=="Y" (
    cd /d "%newDir%"
    echo Changed directory to: %newDir%
    echo dir
    pause
)

goto :main
