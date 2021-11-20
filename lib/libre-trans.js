const axios = require('axios');

exports.libreTrans = function() {
  let myArgs = process.argv.slice(2);
  let sourceLang;
  let targetLang;
  let translatingText;

  if(myArgs[0] !== undefined) {
    sourceLang = myArgs[0];
    targetLang = myArgs[1];
    translatingText = myArgs[2];
    
  } else {
    console.log('Incorrect params');
  }

  axios.post('https://translate.astian.org/translate', {
    q: translatingText,
    source: sourceLang,
    target: targetLang
  }).then(res => {
      console.log("\x1b[32m", res.data.translatedText, "\x1b[0m")
  }).catch(error => {
      console.error(error)
  });
}