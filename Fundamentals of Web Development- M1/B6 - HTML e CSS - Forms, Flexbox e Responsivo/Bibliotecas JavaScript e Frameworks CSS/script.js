import './node_modules/just-validate/dist/js/just-validate.js'
window.onload = () => {
    new window.JustValidate('.js-form', {
        rules: {
            name: {
                required: true,
                minLength: 3,
                maxLength: 40,
            },
            email: {
                required: true,
                email: true,
                minLength: 3,
                maxLength: 50,
            },
            cidade: {
                required: true,
                minLength: 3,
                maxLength: 28,
            },
            text: {
                required: false,
                minLength: 3,
                maxLength: 1000,
            },
            cargo: {
                required: false,
                minLength: 3,
                maxLength: 40,
            },
            Dcargo: {
                required: false,
                minLength: 3,
                maxLength: 40,
            },
            endereco: {
                required: false,
                minLength: 3,
                maxLength: 200,
            },
            radioType:{
                required: true,
            }
        },
        messages:{
            name:{
                required: 'Coloque seu nome',
                minLength:'Valor minimo é de 3 caracteres',
                maxLength: 'Voce execedeu o numero maximo de caracteres'
            },
            email:{
                required: 'Coloque seu email',
                email: 'email não é valido'
            },
            cidade:{
                required: 'Coloque sua Cidade e Estado logo abaixo',
                minLength: 4,
                maxLength: 28,
            },
            radioType:{
                required: 'selecione uma das opções'
            }
        }


    });
}
/* ESta funcionando, só implementar as regras e as mensagens  */

/* função para verificar se o valor do cpf é apenas numeros  */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
isNumber(document.querySelector('#cpf').value)
