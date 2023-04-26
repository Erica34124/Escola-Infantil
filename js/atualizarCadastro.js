const formularioUpdate = document.forms.formBuscar;
const formularioAtualizar = document.forms.formCadastro;

const mostrarDadosDoCepNoFormulário = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
  }
}
};

async function pegarDados(evento) {
  evento.preventDefault();
  const idUpdate = document.getElementById("buscar").value;
  const urlUpdate = `http://localhost:8010/aluno/buscarAlunoPorId/${idUpdate}`;

  console.log("testando...");
  try {
    const response = await fetch(
      urlUpdate
    );
    const dados = await response.json();
    console.log(response)
    
    const body = {
      nome: dados.nome,
      nascimento: dados.nascimento,
     
        cep: dados.endereco.cep,
        logradouro: dados.endereco.logradouro,
        bairro: dados.endereco.bairro,
        localidade: dados.endereco.localidade,
        uf: dados.endereco.uf,
      
     
        ddd: dados.telefone.ddd,
        numero: dados.telefone.numero,
      
      responsavel: dados.responsavel,
      email: dados.email,
      convenio: dados.convenio,
    };
      mostrarDadosDoCepNoFormulário(body)

  } catch (error) {
    console.log("teste erro", error);
  }
}

// function mostrar(dados) {
//   let output = "";

//   for (let user of dados) {
//     output += `<li>${user.nome}:   ${user.id}</li>`;
//   }
//   document.getElementById("footer").innerHTML = output;
// }

formularioUpdate.addEventListener("submit", pegarDados);

//----------------------------------------------------------------------



function atualizar(evento) {
  evento.preventDefault();
  const idUpdate = document.getElementById("buscar").value;
  const urlUpdate = `http://localhost:8010/aluno/atualizar/${idUpdate}`;

  const formData = new FormData(formularioAtualizar);
  const dados = Object.fromEntries(formData);

  

  const body = {
    nome: dados.nome,
    nascimento: dados.nascimento,
    endereco: {
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf,
    },
    telefone: {
      ddd: dados.ddd,
      numero: dados.numero,
    },
    responsavel: dados.responsavel,
    email: dados.email,
    convenio: dados.convenio,
  };

  fetch(urlUpdate , {
    method: 'PUT',
    body : JSON.stringify(),
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(dados => console.log(dados))
    .catch(error => console.log("erro"));


}
formularioAtualizar.addEventListener("submit", atualizar);

//----------------------------------------------------------------------

// const cep = document.getElementById('cep');

// let texto = document.querySelector("#span");

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

// const url = 'http://localhost:8010/aluno/cadastrar';

// function pegarValores(evento) {
//   evento.preventDefault();
// }

// //funçao de cadastro

// function cadastrar(evento) {
//   evento.preventDefault();

//   const formData = new FormData(formulario);
//   const dados = Object.fromEntries(formData);

//   const body = {
//     "nome": dados.nome,
//     "nascimento": dados.nascimento,
//     "endereco":{
//         "cep":dados.cep,
//         "logradouro": dados.logradouro,
//         "bairro": dados.bairro,
//         "localidade": dados.localidade,
//         "uf":dados.uf
//     },
//     "telefone":{
//         "ddd":dados.ddd,
//         "numero":dados.numero
//     },
//     "responsavel":dados.responsavel,
//     "email":dados.email,
//     "convenio": dados.convenio
// }

//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': "application/json",
//     },
//     body: JSON.stringify(body),
//   })
//     .then(res => res.json())
//     .then(dados => console.log(dados))
//     .catch(error => console.log("erro"));

// mostrar(formulario)
// }

// function mostrar(body){
//   let output = ''
//   let footer = `  Cadastro atualizado com sucesso !`

//   for(let user of body){

//       output += `<li>${user.name}:   ${ user.value}</li>`

//   }
//   document.getElementById('span').innerHTML = output
//   document.getElementById('footer').innerHTML = footer

// }

// //Chamando a função cadastrar no formulário

// // formulario.addEventListener("submit", cadastrar);

// //Deletando cadastro

// function atualizar(evento){
//   evento.preventDefault();
//   alert("atualizar it's work")

//   const idUpdate = document.getElementById('buscar').value;
//   console.log(idUpdate)

//   const urlUpdate = `http://localhost:8010/aluno/buscarAlunoPorId/${idUpdate}`

//   let spandell = `  Cadastro atualizado com sucesso !`

//   const formData = new FormData(formularioUpdate);
//   const dados = Object.fromEntries(formData);

// //   const body = {
// //     "nome": dados.nome.innerHTML = dados.nome,
// //     "nascimento": dados.nascimento,
// //     "endereco":{
// //         "cep":dados.cep,
// //         "logradouro": dados.logradouro,
// //         "bairro": dados.bairro,
// //         "localidade": dados.localidade,
// //         "uf":dados.uf
// //     },
// //     "telefone":{
// //         "ddd":dados.ddd,
// //         "numero":dados.numero
// //     },
// //     "responsavel":dados.responsavel,
// //     "email":dados.email,
// //     "convenio": dados.convenio
// // }

//   fetch(urlUpdate , {
//     method: 'GET',
//     headers: {
//       'Content-Type': "application/json",
//     },
//     body: JSON.stringify(dados),
//   })
//     .then(res => res.json())
//     .then(d => console.log(d))
//     .catch(error => console.log("erro"));

//     mostrar(formularioUpdate)
//     document.getElementById('footer').innerHTML = spandell
//   }
