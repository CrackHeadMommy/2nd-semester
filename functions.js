///Jānolasa ievadītais
///Jāizvēlas skaitlis (datoram)
///Jāpārbauda ievadītais
///Jāievada atbilde

let pcnummber = 10;


function readinput(){
    let inserted=document.getElementById("guess").value;
    console.log(inserted);
    return inserted;
} 


function compareNummbers(humanNummber){
    if (humanNummber>pcnummber){
        return "PC nummber is smaller"
    };
    if (humanNummber<pcnummber){
        return "PC nummber is bigger"
    };
    return "Winner!"
}





function check(){
    console.log("check", pcnummber)
    let guess2 = readinput();
    let answer = compareNummbers(guess2);
    insertanswer(answer)
}
function changeNummber(){
    pcnummber = Math.round(Math.random() * 100);
    console.log(pcnummber)
}

function answer(answer){
    document.getElementById(answer).innerHTML=answer;
}