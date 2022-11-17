import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#f5002dFF",
          light: "#ffffffFF",
        },
      },
      (err, url) => {
        if (err) {
          return console.error(err);
        }
        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Code generator</h1>
      <input
        type="text"
        placeholder="http://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
