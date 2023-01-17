function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".btn_next"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.fa_solid = document.querySelector(".fa-solid"),
    this.option_list = document.querySelector(".option_list"),
    this.timer = document.querySelector(".timer"), 
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line"),
    this.win = document.querySelector(".win"),
    this.lose = document.querySelector(".lose");
    this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`,
    this.inCorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`
}

UI.prototype.showQuest = function(quest){
    let question = `<span>${quest.questText}</span>`;
    let option = ``;

    for(let answer in quest.answerOptions){
        option +=
        `
            <div class="option">
                <span><b>${answer}</b> ) ${quest.answerOptions[answer]}</span>
            </div>
        `;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = option;

    const options = this.option_list.querySelectorAll(".option");

    for(let opt of options){
        opt.setAttribute("onClick","optionSeleceted(this)");
    }
}

UI.prototype.showQuestNumber = function(questionOrder, totalQuestion){
    let tag =`
    <span class="badge bg-secondary">${questionOrder} / ${totalQuestion}</span>
    `;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showScore = function (totalQuestion, correctAnswer){
    let tag = `You answered ${correctAnswer} out of ${totalQuestion} questions correctly.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
    this.fa_solid.classList.remove("fa-thumbs-down");
    this.lose.classList.remove("active");
    if(correctAnswer >= totalQuestion / 2){
        this.fa_solid.classList.add("fa-thumbs-up");
        this.win.classList.add("active");
    }
    else{
        this.fa_solid.classList.remove("fa-thumbs-up");
        this.fa_solid.classList.add("fa-thumbs-down");
        this.win.classList.remove("active");
        this.lose.classList.add("active");
    }
}