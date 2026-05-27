Start-Sleep -Seconds 10

$ports = @('3000', '3010')
$selectedPort = $null

foreach ($port in $ports) {
    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:$port" -TimeoutSec 2 -ErrorAction Stop

        if ($response.StatusCode -eq 200 -and $response.Content -match "__next|_next/static") {
            $selectedPort = $port
            break
        }
    }
    catch {
        continue
    }
}

if (-not $selectedPort) {
    $selectedPort = '3010'
}

Start-Process "http://127.0.0.1:$selectedPort"
