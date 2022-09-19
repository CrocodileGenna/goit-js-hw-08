import throttle from "lodash.throttle";

const emailL = document.querySelector("input");
const messegeE = document.querySelector("textarea");
const form = document.querySelector("form");

form.addEventListener('input', throttle(funIn, 500));

function funIn(ev){
    const eForm = ev.target.form.elements
    const {
        email, message 
    } = eForm
    const obJect = {
        emeil: email.value,
        mesege: message.value,
    }
    const obJSon = JSON.stringify(obJect);
    localStorage.setItem("feedback-form-state", obJSon)
    
}

function inputText(){
    const lsForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    const {
        emeil, mesege
    } = lsForm;
    emailL.value = emeil
    messegeE.value = mesege
    
}
inputText()

const butTon = document.querySelector("button");
butTon.addEventListener('click', clickButton);
function clickButton(ev){
    ev.preventDefault();
    const lsForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    const {
        emeil, mesege
    } = lsForm;
    console.log(`Email: ${emeil}`, `Messege:${mesege}`)
    emailL.value = ""
    messegeE.value = ""
}
