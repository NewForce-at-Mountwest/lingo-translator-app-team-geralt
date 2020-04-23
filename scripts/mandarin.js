const mandarinData = {
  name: "Mandarin",
  notablePeople: [
    "Herbert Hoover",
    "Koji Yano",
    "Mark Henry Rowswell",
    "Mark Zuckerberg",
    "Ming Na Wen",
    "John Cena",
    "Kevin Rudd",
    "Park Geun-hye",
    "Vanessa Branch",
    "Mira Sorvino",
    "Bob Woodruff",
    "Takeshi Kaneshiro",
    "Lou Jing"
  ],
  funFacts: {
    relatedLanguages: ["Korean", "Japanese"],
    lettersInAlphabet: 50000,
    numberOfSpeakers: "about 900 million",
    mandrinInfo: {
      dialectInfo: "Mandrin is one of many different Chinese dialects. It is mainly spoken in North and Southeast China",
      chineseDialects: ["Mandarin", "Wu", "Gan", "Xiang", "Hakka", "Yue", "Min"]
    }
  },
  countriesSpoken: [
    "China",
    "Singapore",
    "Taiwan"
  ],
  dictionary: {
    hello: "你好",
    goodbye: "再见",
    thankYou: "谢谢",
    goodEvening: "晚上好",
    howAreYou: "你好吗",
    whatsYourName: " 你叫什么名字"
  }
}

//Make Function that inputs text into the page instead of just Mandarin.
function noteablePeople(peopleArray) {
  let peopleList = ""
  // console.log(peopleArray);
  for (let i = 0; i < peopleArray.length; i++) {
    peopleList += `<li>${peopleArray[i]}</li>`
  }
  return peopleList
}
const mardarinPeopleList = noteablePeople(mandarinData.notablePeople)

function printMandarinPeople() {
  document.querySelector(`#mandarin-people`).innerHTML += mardarinPeopleList
}

function printMandarinRelatedLanguages() {
  let LangList = ""
  for (let i = 0; i < mandarinData.funFacts.relatedLanguages.length; i++) {
    LangList += `<li>${mandarinData.funFacts.relatedLanguages[i]}</li>`
  }
  document.querySelector(`#mandarin-facts`).innerHTML += `<p>Related Languages:${LangList}</p>`
}

function printMandarinLettersInAlphabet() {
  document.querySelector(`#mandarin-facts`).innerHTML += `<p>Letters in alphabet: ${mandarinData.funFacts.lettersInAlphabet}</p>`
}

function printMandarinNumberOfSpeakers() {
  document.querySelector(`#mandarin-facts`).innerHTML += `<p>Number of speakers: ${mandarinData.funFacts.numberOfSpeakers}</p>`
}

function printMardarinDialectInfo() {
  document.querySelector(`#mandarin-facts`).innerHTML += `<p>${mandarinData.funFacts.mandrinInfo.dialectInfo}`
}

function printMandarinDialectList() {
  let dialectList = ""
  for (let i = 0; i < mandarinData.funFacts.mandrinInfo.chineseDialects.length; i++) {
    dialectList += `<li>${mandarinData.funFacts.mandrinInfo.chineseDialects[i]}</li>`
  }
  document.querySelector(`#mandarin-facts`).innerHTML += `<p>Mandarin Dialects:${dialectList}</p>`
}

function printMandarinCountriesSpoken() {
  let mandarinCountriesList = ""
  for (let i = 0; i < mandarinData.countriesSpoken.length; i++) {
    mandarinCountriesList += `<li>${mandarinData.countriesSpoken[i]}`
  }
  document.querySelector(`#mandarin-spoken`).innerHTML += mandarinCountriesList
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function outputSpeech(language, word) {
  if (word !== `Not in dictionary. Check your spelling, or the word may not be in our dictionary yet.`) {
    let utterance = new SpeechSynthesisUtterance(word)
    let selectLan = language
    if (language === "mandarin") {
      selectLan = `zh-CN`
    } else if (language === `french`) {
      selectLan = `fr-FR`
    } else if (language === `hindi`) {
      selectLan = `hi-IN`
    } else if (language === `spanish`) {
      selectLan = `es-ES`
    }
    if (selectLan === `zh-CN`) {
      utterance.lang = 'zh-CN'
    } else if (selectLan === `fr-FR`) {
      utterance.lang = `fr-FR`
    } else if (selectLan === `hi-IN`) {
      utterance.lang = `hi-IN`
    } else if (selectLan === `es-ES`) {
      utterance.lang = `es-ES`
    }
    speechSynthesis.speak(utterance)
  }
}

function translateMandarin(word) {
  let preCamel = camelize(word)
  let finalWord = ""
  if (preCamel in mandarinData.dictionary) {
    finalWord = mandarinData.dictionary[preCamel]
  } else {
    finalWord = `Not in dictionary. Check your spelling, or the word may not be in our dictionary yet.`
  } return finalWord
}

document.querySelector(`#mandarin`).addEventListener("click", eventClick => {
  document.querySelector(`#language-container`).innerHTML = h1(mandarinData.name, "mandarin"),
    printMandarinPeople(), printMandarinRelatedLanguages(), printMandarinLettersInAlphabet(),
    printMandarinNumberOfSpeakers(), printMardarinDialectInfo(), printMandarinDialectList(), printMandarinCountriesSpoken()
})

document.querySelector(`#language-container`).addEventListener("click", translateEvent => {
  if (event.target.id === "mandarin-translate-btn") {
    // let wordOut = translateMandarin(document.querySelector(`#mandarin-translate-input.input`).value)
    let speechValue = translateMandarin(document.querySelector(`#mandarin-translate-input`).value)
    document.querySelector(`#mandarin-translate-phrase-area`).innerHTML = translateMandarin(document.querySelector(`#mandarin-translate-input`).value), outputSpeech("mandarin", speechValue)
  }
})