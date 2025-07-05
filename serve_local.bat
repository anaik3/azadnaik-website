@echo off
REM Local development server for Azad Naik Portfolio
REM Requires Python 3 (for http.server) or Node.js (for http-server)

where python >nul 2>nul
if %errorlevel%==0 (
    echo Starting Python HTTP server on http://localhost:8000
    python -m http.server 8000
) else (
    where npx >nul 2>nul
    if %errorlevel%==0 (
        echo Starting Node.js http-server on http://localhost:8080
        npx http-server .
    ) else (
        echo Please install Python 3 or Node.js to run a local server.
        pause
    )
)
