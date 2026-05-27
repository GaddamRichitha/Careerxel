$ErrorActionPreference = 'Stop'

function Test-FrontendResponse {
    param([int]$Port)

    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:$Port" -TimeoutSec 2 -ErrorAction Stop
        return ($response.StatusCode -eq 200 -and $response.Content -match "__next|_next/static")
    }
    catch {
        return $false
    }
}

function Stop-StaleFrontendProcesses {
    foreach ($port in 3000, 3010) {
        $connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($connection) {
            Stop-Process -Id $connection.OwningProcess -Force -ErrorAction SilentlyContinue
        }
    }
}

$backendRunning = $false
$existingConnections = Get-NetTCPConnection -LocalPort 1337 -ErrorAction SilentlyContinue
if ($existingConnections) {
    $backendRunning = $true
}

$frontendRunning = Test-FrontendResponse -Port 3000
if (-not $frontendRunning) {
    $frontendRunning = Test-FrontendResponse -Port 3010
}

$commands = @()
if (-not $frontendRunning) {
    Stop-StaleFrontendProcesses
    Remove-Item -LiteralPath frontend\.next -Recurse -Force -ErrorAction SilentlyContinue
    $commands += 'npm run dev --prefix frontend'
}

if (-not $backendRunning) {
    $commands += 'npm run develop --prefix backend'
}
else {
    Write-Host 'Strapi is already running on 127.0.0.1:1337. Skipping backend startup.'
}

$commands += 'npm run open-frontend'

& concurrently @commands
