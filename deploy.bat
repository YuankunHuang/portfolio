@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo.
echo ========================================
echo   Yuankun Huang Portfolio - Deploy
echo ========================================
echo.

if exist "node_modules\" (
    echo [1/5] Dependencies already installed, skipping...
) else (
    echo [1/5] Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: npm install failed
        pause
        exit /b 1
    )
    echo Done.
)

echo.
echo [2/5] Type-checking...
call npm run check
if %errorlevel% neq 0 (
    echo ERROR: Type check failed. Fix the errors above before deploying.
    pause
    exit /b 1
)

echo.
echo [3/5] Building production bundle (catches errors before pushing)...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed. Nothing was pushed.
    pause
    exit /b 1
)
echo Done.

echo.
echo [4/5] Committing changes...
git add -A

git diff --cached --quiet
if %errorlevel% equ 0 (
    echo No local changes to commit.
) else (
    set "commitmsg="
    set /p commitmsg="   Commit message (Enter for default): "
    if "!commitmsg!"=="" (
        for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set "d=%%a-%%b-%%c"
        set "commitmsg=Update site content !date! !time!"
    )
    git commit -q -m "!commitmsg!"
    if %errorlevel% neq 0 (
        echo ERROR: Commit failed
        pause
        exit /b 1
    )
)

echo.
echo [5/5] Pushing to GitHub (triggers Actions build + deploy)...
git push origin main
if %errorlevel% neq 0 (
    echo ERROR: Push failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo   PUSHED - GitHub Actions is now building
echo ========================================
echo.
echo   Watch progress:  https://github.com/YuankunHuang/portfolio/actions
echo   Live site:       https://yuankunhuang.com/
echo.
echo   (Deployment usually finishes within 1-2 minutes of this push.)
echo.
echo ========================================
echo.
pause
