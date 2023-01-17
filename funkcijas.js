//Jānolasa ievadītais
//Jāizvēlas skaitlis (datoram)
//Jāpārbauda ievadītais
//Jāizvada atbilde

let datoraSkaitlis = 10;


function nolasitIevadito(){
    let ievaditais = document.getElementById("ievade").value;
    console.log(ievaditais);
    return ievaditais;
}

function salidzinatSkaitlus(cilvekaSkaitlis){
    if (isNaN(cilvekaSkaitlis)){
        return "Lūdzu ievadi skaitli!"
    }
    if (cilvekaSkaitlis>datoraSkaitlis){
        return "datora skaitlis ir mazāks"
    };
    if(cilvekaSkaitlis<datoraSkaitlis){
        return "datora skaitlis ir lielāks"
    };
    return "Urrā, Tu uzvarēji!"
}


function izvaditAtbildi(atbilde){
    document.getElementById("atbilde").innerHTML=atbilde;
}

function veiktParbaudi(){
    console.log("Pārbaudīts!!!", datoraSkaitlis);
    let minejums = nolasitIevadito();
    let rezultats = salidzinatSkaitlus(minejums);
    izvaditAtbildi(rezultats);
}

function nomainitSkaitli(){
    datoraSkaitlis = Math.round(Math.random() * 100);
    console.log(datoraSkaitlis);
    izvaditAtbildi("Jauna spēle!")
}