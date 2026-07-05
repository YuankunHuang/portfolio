@echo off
setlocal
cd /d "%~dp0"

echo.
echo ========================================
echo   Yuankun Huang Portfolio - Local Test
echo ========================================
echo.

if exist "node_modules\" (
    echo [1/3] Dependencies already installed, skipping...
) else (
    echo [1/3] Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: npm install failed
        pause
        exit /b 1
    )
    echo Done.
)

echo.
echo [2/3] Type-checking content and components...
call npm run check
if %errorlevel% neq 0 (
    echo WARNING: Type check reported issues. See above. Continuing to dev server...
)

echo.
echo [3/3] Starting dev server...
echo.
echo   Local:   http://localhost:4321
echo   Press Ctrl+C to stop
echo.
echo ========================================
echo.

start "" "http://localhost:4321"
call npm run dev

endlocal
