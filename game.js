player1_score = document.getElementById("player1_score").value;
player2_score = document.getElementById("player2_score").value;

player1_name = document.getElementById("player1_name").value;
player2_name = document.getElementById("player2_name").value;

function send(){
    console.log("Send");
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    answer_input = "<br/>Answer = <input type='text' id='input_checkbox'>";
    check_button = "<br/><br/><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + answer_input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "Player_1";
answer_turn = "Player_2";

function check(){
    get_answer = document.getElementById("input_checkbox").value;
    if (actual_answer == get_answer)
    {
        if (answer_turn == "Player_1")
        {
        console.log("Correct");
        document.getElementById('input_checkbox').style.display = "none";
        document.getElementById('input_checkbox').innerHTML = "Correct";
            document.getElementById("correct").style.display = "inline-block";
        document.getElementById("correct").innerHTML = "Correct!"
        player1_score_updated = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score_updated;
        }
        else
        {
             document.getElementById("correct").style.display = "inline-block";
        document.getElementById("correct").innerHTML = "Correct!"
        player2_score_updated = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score_updated;
        }
    }
    else
    {
        console.log("Wrong");
        document.getElementById('input_checkbox').style.display = "none";
        document.getElementById('input_checkbox').innerHTML = "Wrong! Try Again";
        document.getElementById("correct").style.display = "inline-block";
        document.getElementById("correct").innerHTML = "Wrong!"
    }

    if (question_turn == "Player_1")
        {
        question_turn = "Player_2";
        answer_turn = "Player_1";
        document.getElementById("question").innerHTML = " Question turn - " + player2_name;
        document.getElementById("answer").innerHTML = " Answer turn - " + player1_name;
        }
        else
        {
            question_turn = "Player_1";
            answer_turn = "Player_2";
            document.getElementById("question").innerHTML = " Question turn - " + player1_name;
            document.getElementById("answer").innerHTML = " Answer turn - " + player2_name;
        }
}
