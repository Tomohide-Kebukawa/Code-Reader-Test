const fs = require('fs');
const QRCode = require('qrcode');

async function generateQRCode() {
  try {
    // JSON ファイルのパス
    const jsonFilePath = 'WorkSet/data.json';
    // 出力する QR コード画像のパス
    const qrCodeOutputPath = 'WorkSet/qrcode.png';

    // JSON ファイルを読み込む
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');

    // JSON の内容を QR コードとして生成する
    await QRCode.toFile(qrCodeOutputPath, jsonData, {
      type: 'png', // 画像フォーマット
      errorCorrectionLevel: 'H' // エラー訂正レベル (L, M, Q, H)
    });

    console.log(`QR code generated successfully at ${qrCodeOutputPath}`);
  } catch (err) {
    console.error('Error generating QR code:', err);
    process.exit(1); // エラーが発生した場合は処理を中断
  }
}

generateQRCode();
