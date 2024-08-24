// script.js
function generateQR() {
    const qrText = document.getElementById('qrText').value;
    const qrColor = document.getElementById('qrColor').value;
    const qrBgColor = document.getElementById('qrBgColor').value;
    const qrSize = parseInt(document.getElementById('qrSize').value);
    const canvas = document.getElementById('qrCanvas');

    const qr = new QRious({
        element: canvas,
        value: qrText,
        size: qrSize,
        background: qrBgColor,
        foreground: qrColor
    });

    // Actualiza el enlace de descarga
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = canvas.toDataURL('image/png');
}
