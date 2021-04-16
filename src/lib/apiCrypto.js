const crypto = require('crypto');
const pkcs7 = require('pkcs7');

const appSecretKey = "f8449d6220b54dddb892a262409c3e07";
const timeSt = "20210218190839";
const caesar = require('./ceasar');
function rpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        console.log('오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다')
        return str + ''
    }
    str += '' // 문자로
    padStr += '' // 문자로
    while (str.length < padLen) str += padStr
    str = str.length >= padLen ? str.substring(0, padLen) : str
    return str
}
const pkcs7Pad = (params) => {
    const buffer = Buffer.from(params, "utf8");
    const bytes = new Uint8Array(buffer.length);
    let i = buffer.length;
    while (i--) {
        bytes[i] = buffer[i];
    }
    return Buffer.from(pkcs7.pad(bytes));
}

module.exports = {
    hsKey : (str) =>{
        const key = appSecretKey + timeSt;
        var hmac = crypto.createHmac("sha512", new Buffer.from(key, 'utf-8'));
        var signed = hmac.update(new Buffer.from(str, 'utf-8')).digest("base64");
        console.log(signed);
        return signed
    },
    ssnEncrypt : (ssnnum) => {
        const serial = timeSt + appSecretKey;
        let secureKey = rpad(serial, 32, '0')
        var bytes = crypto.randomBytes(20);
        let iv = crypto.randomBytes(16)
        console.log(bytes);
        const key = crypto.pbkdf2Sync(secureKey, bytes, 70000, 32, 'sha1');
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        cipher.setAutoPadding(false);
        console.log('b:' , bytes.toString('base64'))
        console.log('iv:', iv.toString('base64'))
        let encrypted = cipher.update(pkcs7Pad(ssnnum), 'utf8','base64');
        encrypted += cipher.final('base64');
        console.log("here :", encrypted)
        var encBuf = Buffer.from(encrypted,'base64');
        let arr = [bytes, iv, encBuf];
        let conBuf = Buffer.concat(arr);
        console.log(conBuf.toString('base64'));
        // encrypted += conBuf.toString('base64');
        console.log(encrypted);
        return conBuf.toString('base64');
    }
}
console.log(caesar.encrypt(6, 'hi how are you'));
console.log(caesar.decrypt(9, 'no nuc gxk eua'));