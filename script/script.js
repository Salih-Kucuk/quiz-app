const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click" , function(){
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.showQuest(quiz.getQuest());
    ui.showQuestNumber(quiz.questIndex + 1 , quiz.questions.length);
    ui.btn_next.classList.remove("show");
})

ui.btn_next.addEventListener("click", function(){
    ui.timer.classList.remove("timer_half","timer_ending");
    ui.time_line.classList.remove("time_line_half","time_line_ending");
    if(quiz.questions.length != quiz.questIndex + 1){
        quiz.questIndex +=1;
        clearInterval(counter);
        startTimer(10);
        clearInterval(counterLine)
        startTimerLine();
        ui.showQuest(quiz.getQuest());  
        ui.showQuestNumber(quiz.questIndex + 1 , quiz.questions.length);
        ui.btn_next.classList.remove("show");
    } 
    else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");   
        ui.showScore(quiz.questions.length, quiz.correctAnswer);
    }
})

ui.btn_quit.addEventListener("click", function(){
    window.location.reload();    
})

ui.btn_replay.addEventListener("click", function(){
    quiz.questIndex = 0;
    quiz.correctAnswer = 0;
    ui.score_box.classList.remove("active");
    ui.btn_start.click();
})

function optionSeleceted(options){
    let answer = options.querySelector("span b").textContent;
    let quest = quiz.getQuest();
    clearInterval(counter);
    clearInterval(counterLine);

    if(quest.controlAnswer(answer)){
        quiz.correctAnswer += 1
        options.classList.add("correct");
        options.insertAdjacentHTML("beforeend", ui.correctIcon);      
    }else{
        options.classList.add("incorrect");
        options.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }
    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
}

function startTimer(time){
    counter = setInterval(timer, 1000);

    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time < 5){
            ui.timer.classList.add("timer_half");
        }
        if(time < 3){
            ui.timer.classList.add("timer_ending");
        }

        if(time < 0){
            clearInterval(counter);
            ui.time_text.textContent = "Time Expired : ";
            let answer = quiz.getQuest().correctAnswer;
            
            for(let option of ui.option_list.children){

                if(option.querySelector("span b").textContent == answer){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);   
                }
                option.classList.add("disabled");
            }
            ui.btn_next.classList.add("show");
        }
    }
}

let counterLine;

function startTimerLine(){
    let line_width = 550;
    
    counterLine = setInterval(timer , 20);
    
    function timer(){
        line_width -= 1;
        ui.time_line.style.width = line_width + "px";
        if(line_width < 250){
            ui.time_line.classList.add("time_line_half");
        }
        if(line_width < 150){
            ui.time_line.classList.add("time_line_ending");
        }
        if(line_width < 0){
            clearInterval(counterLine);
        }
    }
}