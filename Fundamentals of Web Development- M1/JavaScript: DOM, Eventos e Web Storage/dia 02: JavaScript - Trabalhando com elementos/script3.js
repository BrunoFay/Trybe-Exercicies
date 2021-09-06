let removePrimeiroF = document.querySelector("#primeiroFilho")
let removeSecondoF = document.querySelector("#segundoEUltimoFilhoDoFilho") 
function removeChildById(params) {
    let remove = document.querySelector(`#${params}`);
    remove.removeChild(params);
    return remove
}
removeChildById();