const formulario = document.forms.formCadastro;

const cep = document.getElementById("cep");

let texto = document.querySelector("#span");

//função popular no formulario informações de cep

const mostrarDadosDoCepNoFormulário = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

//função via cep

cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");
  const urlCep = `https://viacep.com.br/ws/${search}/json/`;
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(urlCep, options)
    .then((res) => {
      res.json().then((data) => mostrarDadosDoCepNoFormulário(data));
    })
    .catch((error) => console.log("erro"));

  console.log(cep.value);
});

const url = "http://localhost:8010/aluno/cadastrar";

function pegarValores(evento) {
  evento.preventDefault();
}

//funçao de cadastro

function cadastrar(evento) {
  evento.preventDefault();

  const formData = new FormData(formulario);
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

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((dados) => mostrar(formulario))
    .catch((error) => console.log("erro"));

 
}

function mostrar(body) {
  let output = "";
  let footer = `  Cadastro realizado com sucesso !`;
  alert('Cadastro realizado com sucesso!')

  for (let user of body) {
    output += `<li>${user.name}:   ${user.value}</li>`;
  }
  document.getElementById("span").innerHTML = output;
  document.getElementById("footer").innerHTML = footer;
}

//Chamando a função cadastrar no formulário

formulario.addEventListener("submit", cadastrar);

//Deletando cadastro

function deletar(evento) {
  evento.preventDefault();

  const idDelete = document.getElementById("deletar").value;
  const urldelete = `http://localhost:8010/aluno/deletar/${idDelete}`;

  let spandell = `  Cadastro deletado com sucesso !`;

  const formData = new FormData(formdelete);
  const id = Object.fromEntries(formData);

  fetch(urldelete, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  })
    .then((res) => res.json())
    .then((id) => console.log(id))
    .catch((error) => console.log("erro"));

  document.getElementById("footer").innerHTML = spandell;
}

formdelete.addEventListener("submit", deletar);
