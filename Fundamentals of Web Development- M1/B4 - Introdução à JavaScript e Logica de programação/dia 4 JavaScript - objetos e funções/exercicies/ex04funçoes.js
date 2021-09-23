let nomes= ['José', 'jaminladada', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function maiorNome(params) {
    let maiorNome=[0];
    
    for (let index = 0; index < params.length; index+=1) {
        if(maiorNome.length < params[index].length){
            maiorNome= params[index]
        }
        
    }return maiorNome;
}
console.log(maiorNome(nomes));