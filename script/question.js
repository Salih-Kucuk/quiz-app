function Quest(questText, answerOptions, correctAnswer) {
    this.questText = questText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}
Quest.prototype.controlAnswer = function(answer){return answer === this.correctAnswer;}

let questions = [
    new Quest("<h3>1 - Identify the noun.</h3> <p>I live in Amsterdam.</p>",{A:"In",B:"Live",C:"Amsterdam",D:"I"},"C"),
    new Quest("<h3>2 - Identify the pronoun.</h3><p>They were having dinner.<p>",{A:"Dinner",B:"They",C:"Were",D:"Having"},"B"),
    new Quest("<h3>3 - Identify the verb.</h3><p>cevap d<p>",{A:"Monkey",B:"By",C:"Door",D:"Sat"},"D"),
    new Quest("<h3>4 - Identify the Adverb.</h3><p>Marcus always arrives early.<p>",{A:"Arrives",B:"Always",C:"Early",D:"Marcus"},"B"),
    new Quest("<h3>5 - Identify the adjective.</h3><p>Ria lives in a beautiful house.<p>",{A:"Ria",B:"House",C:"Beautiful",D:"Lives"},"C"),
    new Quest("<h3>6 - Identify present, past or future tense.</h3><p>He plays basketball every day.<p>",{A:"Present",B:"Past",C:"Future"},"A"),
    new Quest("<h3>7 - Fill In The Blanks.</h3><p>The students are _____ their notes.<p>",{A:"Wrote",B:"Written",C:"Writing",D:"Write"},"C"),
    new Quest("<h3>8 - Questions On Punctuation.</h3><p>Identify the correct sentence.<p>",{A:"The weather is wet, and windy and unpredictable.",B:"The weather is wet, windy and unpredictable.",C:"The weather is wet, windy, unpredictable.",D:"The weather is wet windy, unpredictable."},"B"),
    new Quest("<h3>9 - Identify the preposition.</h3><p>I will see you on Saturday.<p>",{A:"Will",B:"See",C:"On",D:"You"},"C"),
    new Quest("<h3>10 - Identify the synonym.</h3><p>Listen<p>",{A:"Hear",B:"Quiet",C:"Play",D:"Whisper"},"A"),
    new Quest("<h3>11 - Identify the antonym.</h3><p>Polite<p>",{A:"Rude",B:"Crazy",C:"Irritable",D:"Angry"},"A"),
    new Quest("<h3>12 - Choose The Right Spelling.</h3><p> It is _____.<p>",{A:"Wndrful",B:"Wonderfool",C:"Wunderful",D:"Wonderful"},"D"),
]
