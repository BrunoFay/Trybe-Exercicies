let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
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
function verificName(inputName,tamanhoMaximo) {
 let catchElement = document.querySelector(`[name = ${inputName}]`) 
if (catchElement.value.length > tamanhoMaximo ||catchElement.value.length < 0){
    alert(`verifique o ${inputName}`)
}
}
verificName('name',40)

window.onload= () =>{
    const getButton = document.querySelector('#curriculo')
    getButton.addEventListener('click',(event) =>{
        event.preventDefault()

    })
}