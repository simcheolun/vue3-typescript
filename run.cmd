@echo off

if "%1" == "build" (
    npm run build
) else if "%1" == "dev" (
    nvm use 14
    pause
    npm run dev
) else if "%1" == "open" (
    git pull origin main 
    code .
) else (
   git pull origin main 
   call code .  
   exit /b 1
)
