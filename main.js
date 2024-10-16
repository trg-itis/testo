const title = "Martin Lutero"
const text = `Martin Lutero è nato nel $1483$ a Eisleben, in Germania. Studiò teologia all'università di $Erfurt$ e nel $1517$ affisse le sue $95$ tesi contro la vendita delle indulgenze sulla porta della chiesa di Wittenberg. Questo gesto segnò l'inizio della $Riforma protestante$, un movimento religioso che mirava a riformare la Chiesa cattolica. Lutero credeva che la salvezza venisse ottenuta attraverso la sola $fede$, senza la necessità di opere o intermediari come i $sacerdoti$. Per le sue idee fu scomunicato nel $1521$, ma il suo pensiero rivoluzionò la storia del $cristianesimo$ e diede vita a nuove correnti religiose, come il $protestantesimo$`

const inputs_box = document.querySelector(".inputs")

let answers = [];
let counter = 0;

function replacePlaceholders(text) {
  return text.replace(/\$(.*?)\$/g, (match, p1) => {
    counter++;
    answers.push(p1);
    return `<span id="nascosto-${counter}" class="hidden">...${counter}</span>`;
  });
}


document.querySelector(".text-title").innerText = title;
document.querySelector(".text-content").innerHTML = replacePlaceholders(text);

for (let i = 0; i < counter; i++) {
    console.log(i+1 + ": "+answers[i]);
    inputs_box.innerHTML += `
        ${i+1}
        <input type="text" name="" id="riposta-${i+1}" placeholder="Risposta N.${i+1}...">
    `
}

function checkAnswer() {
    const all_input = document.querySelectorAll(".inputs input")
    let color;
    for (let i = 0; i < counter; i++) {
        
        if(answers[i].toLowerCase() == (all_input[i].value).toLowerCase()){
            all_input[i].style.background = "lime"
            color = "green"
        } else {
            all_input[i].style.background = "red"
            color = "blue"
        }

        document.getElementById(`nascosto-${i+1}`).innerText = answers[i]
        document.getElementById(`nascosto-${i+1}`).style.color = color
    }
    
}