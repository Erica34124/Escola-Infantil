// const formulario = document.getElementById("formulario");

// const showData = () => {
//   for(const campo in formulario){
//       // console.log("vendo campos", campo)
//   }
// }

// formulario.addEventListener("onSubmit", (evento) => {
//   evento.preventDefault();
//   evento.stopPropagation();

//   // let cep = conteudo.value.replace("-", "");

//   const options = {
//     method: "",
//     mode: "cors",
//     cache: "default",
//   };

//   fetch(`http://localhost:8010/aluno/cadastrar`, options)
//     .then((res) => {
//       res.json().then((data) => showData(data));
//       console.log("teste resposta", res);
//     })
//     .catch((e) => console.log("deu erro"));
//   console.log("entrando", evento.value);
// });

(() => {
  const forms = document.querySelectorAll(".needs-validation");

  const url = "http://localhost:8010/aluno/cadastrar"

  let nome = document.getElementById("nome").value;
  let nascimento = document.getElementById("nascimento").value;
  let telefone = document.getElementById("telefone").value;
  let endereco = document.getElementById("endereco").value;
  let responsavel = document.getElementById("responsavel").value;
  let email = document.getElementById("email").value;
  let convenio = document.getElementById("convenio").value;

  body = {
    "nome": nome,
    "nacimento": nascimento,
    "telefone": telefone,
    "endereco": endereco,
    "responsavel": responsavel,
    "email": email,
    "convenio": convenio
  };



  function postando(url, body) {
    console.log(body);
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(body);

    request.onload = function () {
      console.log(this.responseText);
    };

    return request.responseText;
  }

  const showData = (result) => {
    for (const campo in result) {
      if (document.querySelector("#" + campo)) {
      

        body = {
          nome: nome,
          nacimento: nascimento,
          telefone: telefone,
          endereco: endereco,
          responsavel: responsavel,
          email: email,
          convenio: convenio,
        };
      }
    }
    postando(url, body);
  };

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        const options = {
          method: "POST",
          mode: "cors",
          cache: "default",
        };

      fetch(`http://localhost:8010/aluno/cadastrar`, options)
          .then((res) => {
            res.json().then((data) => showData(data));
            console.log("teste resposta", res);
            
            
          })
          .catch((e) => console.log("deu erro"));
      },
      false
    );
  });

  // function mostrar(body){

  //   let output = ''

  //   for(let user of body){

  //       output += `<li>${user.nome }:   ${ user.nacimento}</li>`
    
  //   }
  //   document.getElementById('span').innerHTML = output

  // };
  // mostrar(body)
})();
