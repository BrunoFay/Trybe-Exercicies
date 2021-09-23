let stateOptions = ['Selecione um Estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const getEstados = document.querySelector('#estados')
function estado() {
    for (let index = 0; index < stateOptions.length; index += 1) {
        let creatOptions = document.createElement('option');
        creatOptions.value = stateOptions[index]
        creatOptions.innerHTML = stateOptions[index]
        getEstados.appendChild(creatOptions)
    }

}
estado()
function verificName(inputName, tamanhoMaximo) {
    let catchElement = document.querySelector(`[name = ${inputName}]`)
    if (catchElement.value.length > tamanhoMaximo || catchElement.value.length < 0) {
        alert(`verifique o ${inputName}`)
    }
}
function verificNumbers(inputName,tamanhoMaximo) {
    let catchElement = document.querySelector(`[name = ${inputName}]`)
    /* expressão para verificar se existe somente um numero no valor do input https://pt.stackoverflow.com/questions/11275/verificar-se-string-possui-apenas-n%C3%BAmeros */
    if (isNaN(parseFloat(catchElement.value)) && !isFinite(catchElement.value)) {
        alert(`verifique o ${inputName}`)

    }
    else if(catchElement.value.length > tamanhoMaximo || catchElement.value.length < 0){
        alert(`verifique o ${inputName}, tamanho estendido`)
    }

}
let curriculo = {}
function objetos(inputId) {
    let catchElement = document.getElementById(inputId).value
    curriculo[`${inputId}`] = catchElement
}
objetos('name')
objetos('cidade')
window.onload = () => {
    const getButtonCreat = document.querySelector('#curriculo')
    const getButtonReset = document.querySelector('#reset')
    verificNumbers('cpf',11)
    verificName('name', 40)
    verificName('endereço', 200)
    verificName('cidade', 28)
    verificName('email', 50)
    verificName('descricao-de-carg', 500)
    verificName('cargos', 40)
    verificName('resume', 1000)
    getButtonReset.addEventListener('click',(event)=>{
        
    })
    getButtonCreat.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(curriculo);
    
    })
}
