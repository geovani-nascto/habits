const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save)

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExisting = nlwSetup.dayExists(today);

    if(dayExisting){
        alert('Erro! Dia já adicionado.')
        return
    }

    alert('Hábito adicionado com sucesso!');
    nlwSetup.addDay(today);
}

function save(){
    localStorage.setItem('NlwSetup-habits', JSON.stringify(nlwSetup.data))
    //Cria um armazenamento no navegador, guardando as modificacções com o nome NlwSetup-habits, depois o converte em string
}

/*const data = {
    run: ['01-01', '01-02', '01-06', '01-09', '01-10'],
    //water: ['01-04', '01-05'],
    food: ["01-01", "01-03"],
    takePills: ["01-03"],
    journal: ["01-02"],
}*/

/*Desconverte a string salva no armazenamento do navegador novamente em objeto, pegando esse objeto e salvando na variável*/ 
const data = JSON.parse(localStorage.getItem('NlwSetup-habits'))
nlwSetup.setData(data);
nlwSetup.load()