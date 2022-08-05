import { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [qrValue, setQrValue] = useState("");

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setQrValue("");
  };

  const enterToDownload = (e) => {
    if (e.keyCode === 13) {
      downloadQRCode();
      setQrValue("");
    }
  };

  return (
    <div className="app">
      <input
        type="text"
        value={qrValue}
        placeholder="Write text here"
        onChange={(e) => setQrValue(e.target.value)}
        onKeyDown={enterToDownload}
      />
      <br />
      <QRCode
        id="qr-gen"
        value={qrValue}
        size={310}
        level={"H"}
        includeMargin={true}
      />
      <button type="button" onClick={downloadQRCode}>
        Download QR Code
      </button>
    </div>
  );
}

export default App;
