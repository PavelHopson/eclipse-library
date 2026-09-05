$ErrorActionPreference = 'Stop'
$anuraRoot = Split-Path -Parent $PSScriptRoot
$anuraDocx = Join-Path $anuraRoot 'web\experiments\anura\assets\ANURA-Guide.docx'
$anuraPdf = Join-Path $anuraRoot '.artifacts\anura\ANURA-Guide-proof.pdf'
if (Get-Process WINWORD -ErrorAction SilentlyContinue) { throw 'Word is already open; refusing to attach to a user application.' }
$anuraWord = $null
$anuraDocument = $null
try {
    $anuraWord = New-Object -ComObject Word.Application
    $anuraWord.Visible = $false
    $anuraWord.DisplayAlerts = 0
    $anuraWord.AutomationSecurity = 3
    $anuraDocument = $anuraWord.Documents.Open($anuraDocx, $false, $true, $false)
    $anuraDocument.Repaginate()
    $anuraPages = $anuraDocument.ComputeStatistics(2)
    $anuraDocument.ExportAsFixedFormat($anuraPdf, 17)
    Write-Output "ANURA DOCX rendered read-only: $anuraPages pages. PDF proof in .artifacts/anura."
} finally {
    if ($anuraDocument) { $anuraDocument.Close(0); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($anuraDocument) }
    if ($anuraWord) { $anuraWord.Quit(); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($anuraWord) }
}
