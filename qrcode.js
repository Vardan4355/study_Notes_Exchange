<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website QR Code</title>
  <style>
    #qrcode {
      margin: 20px;
    }
  </style>
</head>
<body>

  <h2>Scan to visit my website</h2>
  <div id="qrcode"></div>

  <!-- Include QRCode.js Library -->
  <script src="https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js"></script>

  <script>
    // Replace with your website URL
    const myWebsite = "file://C:/Users/sharm/Desktop/Webiste.IBM/study%20notes%20exchange%20.html#contact";

    // Create the QR code
    new QRCode(document.getElementById("qrcode"), {
      text: myWebsite,
      width: 200,
      height: 200
    });
  </script>

</body>
</html>
