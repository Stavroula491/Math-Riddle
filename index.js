// riddle_length is the # of the riddles
var riddle_length = document.querySelectorAll(".riddle-button").length;

var submit_length = document.querySelectorAll(".submit").length;

var input_length = document.querySelectorAll(".input").length;

var track_riddle = 0; //variable to track the current riddle

var answers = [8, 29, 401, 93, 4536, 15, 793, 676, 2, 114];

document.querySelector(".back").addEventListener("click", function(){
    document.querySelector(".win").classList.add("hidden");
    document.querySelector(".container").classList.remove("hidden");
})

// Loop through the submit buttons and add Event Listener
for (j=0; j<submit_length; j++){
    let my_submit = document.querySelectorAll(".submit")[j];
    my_submit.addEventListener("click", function(){

        // Loop through the inputs and store
        for (k=0; k<input_length; k++){
            let my_input = document.querySelectorAll(".input")[k];
            if (my_input.value.length > 0){
                user_input = my_input.value;
                if (user_input == answers[track_riddle]){
                    // alert("Right!");
                    for (n = 0; n<riddle_length; n++){
                        var current_riddle = document.querySelectorAll(".riddle")[n];
                        if (!current_riddle.classList.contains("hidden")){
                            current_riddle.classList.add("hidden");
                            document.querySelector(".win").classList.remove("hidden");
                        } 
                    } 
                } else if (user_input != answers[track_riddle]){
                    my_input.classList.add("shake");
                    
                    
                    my_input.addEventListener("animationend", function(){
                        my_input.classList.remove("shake");
                        my_input.value = "";
                    }, {once: false});
                    
                }
                
            }
        }
    });
};

// Loop through the riddle buttons and add Event Listener
for (i=0; i<riddle_length; i++){
    var my_riddle = document.querySelectorAll(".riddle-button")[i]; //the riddle the user clicked
    my_riddle.addEventListener("click", function(){
        
        var riddleNumber = this.innerHTML;
        
        switch(riddleNumber){
            case "Riddle 1":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleOne").classList.remove("hidden");
                track_riddle = 0;
                break;
            case "Riddle 2":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleTwo").classList.remove("hidden");
                track_riddle = 1;
                break;
            case "Riddle 3":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleThree").classList.remove("hidden");
                track_riddle = 2;
                break;
            case "Riddle 4":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleFour").classList.remove("hidden");
                track_riddle = 3;
                break;
            case "Riddle 5":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleFive").classList.remove("hidden");
                track_riddle = 4;
                break;
            case "Riddle 6":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleSix").classList.remove("hidden");
                track_riddle = 5;
                break;
            case "Riddle 7":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleSeven").classList.remove("hidden");
                track_riddle = 6;
                break;
            case "Riddle 8":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleEight").classList.remove("hidden");
                track_riddle = 7;
                break;
            case "Riddle 9":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleNine").classList.remove("hidden");
                track_riddle = 8;
                break;
            case "Riddle 10":
                document.querySelector(".container").classList.add("hidden");
                document.querySelector(".riddleTen").classList.remove("hidden");
                track_riddle = 9;
                break;

        }

    })

}