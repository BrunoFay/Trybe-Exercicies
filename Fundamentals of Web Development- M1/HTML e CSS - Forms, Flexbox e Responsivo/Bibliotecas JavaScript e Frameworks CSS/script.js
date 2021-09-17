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
                minLength: 3,
                maxLength: 50,
                email: true,
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
            }
        },
        messages:{
            name:{
                required: 'Coloque seu nome',
                minLength:'Valor minimo é de 3 caracteres',
                maxLength: 'Voce execedeu o numero maximo de caracteres'
            }
        }


    });
}
/* ESta funcionando, só implementar as regras e as mensagens  */