const crypto = require('crypto');
const appKey = "f8449d6220b54dddb892a262409c3e07";
const timeSt = "20210218190839";
const caesar = require('./ceasar');
module.exports = {
    hsKey : (str) =>{
        const key = appKey + timeSt;
        var hmac = crypto.createHmac("sha512", new Buffer.from(key, 'utf-8'));
        var signed = hmac.update(new Buffer.from(str, 'utf-8')).digest("base64");
        console.log(signed);
        return signed
    }
}
console.log(caesar.encrypt(6, 'hi how are you'));
console.log(caesar.decrypt(9, 'no nuc gxk eua'));