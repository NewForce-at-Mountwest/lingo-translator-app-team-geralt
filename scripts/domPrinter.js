// The purpose of this file is to define functions that will return individual HTML components

// You should not call any of these functions in this file. Instead, you should call them in the individual file for your language (e.g. hindi.js)


// For example, we can define a function here that prints an H1 element

const h1 = (text, classNames) => {
    return `<h1 class="${classNames}">${text}</h1>
    <div class="notable-people" id="${classNames}-people"><h3>Notable people that speak ${text}</h3>
    </div>
    <div class="fun-facts" id="${classNames}-facts"><h3>Fun facts about ${text}</h3></div>
    <div class="countries" id="${classNames}-spoken"><h3>Countries where ${text} is spoken</h3></div>
    <div class="translate-container" id="${classNames}-translate-container">
      <form class="translate-form" id="${classNames}-translate-form">
        <input type="text" class="translate-input" id="${classNames}-translate-form" placeholder="text">
      <button class="translate-btn" id="${classNames}-translate-btn">Translate</button>
      <section class="translate-phrase-area" id="${classNames}-translate-phrase-area">Translated phrase: </section>
    </div>`
}


// Go to french.js to see how we can execute this function


// -------------------- For reference! -----------------//

// Here are some other ways to right the exact same function we wrote above:

// function h1(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = function(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = (text, classNames) => `<h1 class="${classNames}">${text}</h1>`