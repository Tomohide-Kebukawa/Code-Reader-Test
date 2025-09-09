const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../WorkSet/data.json');
const outputPath = path.join(__dirname, '../WorkSet/qrcode.png');

try {
  const jsonData = fs.readFileSync(dataPath, 'utf8');

  // QRコードのオプションを設定
  const options = {
    // データをより多く格納するためにバージョンを高く設定
    version: 8, 
    // データ容量を増やすために誤り訂正レベルを低く設定 エラー訂正レベル (L, M, Q, H)
    errorCorrectionLevel: 'L'
  };

  QRCode.toFile(outputPath, jsonData, options, err => {
    if (err) {
      // エラーが発生した場合は、詳細な情報を出力して終了
      console.error('Error generating QR code:', err);
      process.exit(1);
    }
    console.log('QR code generated successfully!');
  });
} catch (error) {
  console.error('An error occurred while reading the data file:', error);
  process.exit(1);
}
