function Quiz(questions) {
    this.questions = questions;    
    this.questIndex = 0;
    this.correctAnswer = 0;
}
Quiz.prototype.getQuest = function(){
    return this.questions[this.questIndex];
}