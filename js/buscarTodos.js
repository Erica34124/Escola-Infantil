const form = document.getElementById("form").innerHTML;
console.log(form);

async function getContent() {
  console.log("testando...");
  try {
    const response = await fetch("http://localhost:8010/aluno/buscarTodos");
    const dados = await response.json();
    mostrar(dados);
    console.log(dados);

    console.log("teste resposta", response);
  } catch (error) {
    console.log("teste erro", error);
  }
}

  function mostrar(dados){

    let output = ''

    for(let user of dados){

        output += `<li>${user.nome }:   ${ user.id}</li>`
    
    }
    document.getElementById('section').innerHTML = output

  }

// form.addEventListener("submit", (event) => {
//   getContent();
//   console.log(event);
// });

// function PegarEvento() {
//   form.addEventListener("submit", (event) => {
//     getContent();
//     console.log("Pegando evento", event);
//   });
// }
