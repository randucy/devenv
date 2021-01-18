function init() {
  let params = (new URL(document.location)).searchParams;
  let randucy = params.get('randucy');
  let ducy = params.get('ducy')

  if (randucy !== 'false') {
    const devEnvRanDucyURL = [
      "https://randucy.netlify.app/js/randucy.js",
      "https://randucy.netlify.app/js/functions.js",
      "https://randucy.netlify.app/randucy/randucy.js",
      "https://randucy.netlify.app/randucy/randucyData.js"
    ]

    for (let i = 0; i < devEnvRanDucyURL.length; i++) {
      let newScript = document.createElement('script')
      newScript.setAttribute('src',devEnvRanDucyURL[i])
      document.body.appendChild(newScript)
    };
    console.log('RanDucy DevEnv: Initated RanDucy')
  }

  if (ducy == 'true') {
    const devEnvDucyURL = [
      "https://ducy.netlify.app/ducyFunctions.js",
      "https://ducy.netlify.app/ducyInstall.js",
      "https://ducy.netlify.app/ducyList.js",
      "https://ducy.netlify.app/ducyHelp.js",
      "https://ducy.netlify.app/ducyData.js"
    ]

    for (let i = 0; i < devEnvDucyURL.length; i++) {
      let newScript = document.createElement('script')
      newScript.setAttribute('src',devEnvDucyURL[i])
      document.body.appendChild(newScript)
    };

    console.log('RanDucy DevEnv: Initated DUCY')
  }
}

init()
