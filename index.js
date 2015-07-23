var bitcoin = require('bitcoinjs-lib');
var fs = require('fs');
var qrcode = require('qrcode');


function createAndSaveWallet() {
    var key = bitcoin.ECKey.makeRandom();
    var addr = key.pub.getAddress();
    console.log("Created new bitcoin address: " + addr );
    var privateKeyFile = addr + '.wif';
    fs.writeFileSync(privateKeyFile, key.toWIF());
    console.log("Saved private key to : '" + privateKeyFile + "'");

    var qrcodeFile = addr + "_qrcode.png";
    var bitcoinURI = "bitcoin:" + addr ;

    qrcode.save(bitcoinURI, qrcodeFile, function() { 
	console.log("Generated QR Code in file : '" + qrcodeFile + "'");
    });

    return key;
}
