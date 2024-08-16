function generateQR() {
    var url = document.getElementById('url').value;
    var qrcodeDiv = document.getElementById('qrcode');
    qrcodeDiv.innerHTML = ''; // Limpiar el contenido anterior

    // Usar la biblioteca qrcode.js para generar el código QR
    new QRCode(qrcodeDiv, {
        text: url,
        width: 250,
        height: 250
    });

    // Mostrar el botón de descarga
    document.getElementById('downloadBtn').style.display = 'block';
}

function downloadQR() {
    var img = document.querySelector("#qrcode img");
    if (img) {
        var link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = img.src;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Por favor, genera un código QR primero.");
    }
}