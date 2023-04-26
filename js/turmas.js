const formulario = document.forms.formCadastro;
const formdelete = document.forms.formdelete;

const cep = document.getElementById('cep');

let texto = document.querySelector("#span"); 

let spandelete = document.getElementById('spandelete')

// //função popular no formulario informações de cep

// const mostrarDadosDoCepNoFormulário = (result) =>{
//   for(const campo in result){
//     if(document.querySelector('#'+campo)){
//       document.querySelector('#'+campo).value = result[campo]

//     }
    
//   }
// }

// //função via cep

// cep.addEventListener('blur', (e) => {
// let search = cep.value.replace("-", "")
// const urlCep = `https://viacep.com.br/ws/${search}/json/`;
// const options = {
//   method: 'GET',
//   mode: 'cors',
//   cache: 'default'
// }

// fetch(urlCep, options)
// .then(res => {res.json()
// .then(data => mostrarDadosDoCepNoFormulário(data))
// })
// .catch(error => console.log('erro'))

// console.log(cep.value)
// });


const url = 'http://localhost:8010/turma/cadastrarTurma';


// function pegarValores(evento) {
//   evento.preventDefault();
// }


//funçao de cadastro

function cadastrar(evento) {
  evento.preventDefault();

  const formData = new FormData(formulario);
  const dados = Object.fromEntries(formData);

  

  const body = {
    "nome": dados.nome,
    "serie": dados.serie,
    "responsavel":dados.responsavel,
    "quantidadeAlunos": dados.quantidadeAlunos,
    "quantidadeMaxima": dados.quantidadeMaxima
}

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(dados => console.log(dados))
    .catch(error => console.log("erro"));


mostrar(formulario)
}

function mostrar(body){
  let output = ''
  let footer = `  Cadastro realizado com sucesso !`


  for(let user of body){

      output += `<li>${user.name}:   ${ user.value}</li>`
  
  }
  document.getElementById('span').innerHTML = output
  document.getElementById('footer').innerHTML = footer

}

//Chamando a função cadastrar no formulário

formulario.addEventListener("submit", cadastrar);

//função de deletar

function deletar(evento){
evento.preventDefault();

const idDelete = document.getElementById('deletar').value;
const urldelete = `http://localhost:8010/turma/DeleteTurma/${idDelete}`

let spandell = `  Cadastro deletado com sucesso !`

const formData = new FormData(formdelete);
const id = Object.fromEntries(formData);

fetch(urldelete, {
  method: 'DELETE',
  headers: {
    'Content-Type': "application/json",
  },
  body: JSON.stringify(id),
})
  .then(res => res.json())
  .then(dados => console.log(dados))
  .catch(error => console.log("erro"));


  document.getElementById('footer').innerHTML = spandell
}


formdelete.addEventListener('submit', deletar)
