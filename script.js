//INICIO

let pessoas = []; 
let mensagensErros = [];

function Pessoa(nome,sobrenome,email){ 
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
}

let nome = document.querySelector('#input-nome')
let sobrenome = document.querySelector('#input-sobrenome')
let email = document.querySelector('#input-email')
let lista = document.querySelector('#lista-registro')
let erros = document.querySelector('#erros')

function AdicionarNovoRegistro(){ 
    if (ValidacaoCampo() != 0 ){
    let nomeUsuario = nome.value;
    let sobrenomeUsuario = sobrenome.value;
    let pessoa = new Pessoa(nomeUsuario,sobrenomeUsuario)
    pessoas.push(pessoa);
    let novaPessoa = document.createElement('li')
    novaPessoa.innerHTML = `Nome: ${nomeUsuario} <br> Sobrenome: ${sobrenomeUsuario}`;
    novaPessoa.classList.add('list-group-item')
    lista.appendChild(novaPessoa);
    
    form.reset(); 
    } else {
        erros.textContent = mensagensErros.join(', ')
        erros.classList.add('error')
    }
   
}

function ValidacaoCampo(){
    if(nome.value ==""){
        mensagensErros.push("Campo nome é obrigatorio")
        nome.focus()
        return 0
    }
    if (nome.value.length < 2){
        mensagensErros.push("Campo nome deve ter pelo menos 3 carateres")
    
    }else if (idade.value == ""){
        mensagensErros.push("Campo sobrenome é obrigatorio")
        idade.focus();
        return 0 
    }
    else if (email.value.indexOf('@')==-1 ||
    email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido") 
    }

}

