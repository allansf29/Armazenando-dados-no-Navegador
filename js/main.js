
// const form = document.getElementById("novoItem");
// // quando for clicado no botão de enviar.
// form.addEventListener("submit", (evento) => {
//     evento.preventDefault(); // reseta o padrão.

//     criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)// CRIA
// })


// function criaElemento(nome, quantidade) { // função para criar o elemento.
//     console.log(nome)
//     console.log(quantidade)

//     // <li class="item"><strong>7</strong>Camisas</li>
//     const novoItem = document.createElement('li');
//     novoItem.classList.add("item")

//     const numeroItem = document.createElement('strong')
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem) // estou colocando o strong dentro do elemento "li".
//     novoItem.innerHTML += nome // += acrescentar

//     const lista = document.getElementById("lista")

//     lista.appendChild(novoItem)

//     console.log(novoItem)

// }

// const form = document.getElementById("novoItem");

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
// })

// function criaElemento(nome, quantidade){
//     console.log(nome)
//     console.log(quantidade)

//     const novoItem = document.createElement('li')
//     novoItem.classList.add('item')

//     const numeroItem = document.createElement('strong')
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += nome

//     const lista = document.getElementById('lista')
//     lista.appendChild(novoItem)

//     console.log(novoItem)
// }

// const form = document.querySelector("#novoItem");

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);

// })

// function criaElemento(nome, quantidade){
//     console.log(nome);
//     console.log(quantidade);

//     const novoItem = document.createElement('li')
//     novoItem.classList.add('item')

//     const numeroItem = document.createElement('strong')
//     numeroItem.innerHTML = quantidade

//     novoItem.appendChild(numeroItem)
//     novoItem.innerHTML += nome;

//     const lista = document.querySelector('#lista')
//     lista.appendChild(novoItem);

// }



// const form = document.querySelector("#novoItem");

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     criaElemento(evento.target.elements["nome"].value, evento.target.elements["quantidade"].value);
// })

// function criaElemento(nome, quantidade) {
//     console.log(nome);
//     console.log(quantidade);

//     const novoItem = document.createElement("li");
//     novoItem.classList.add("item")
//     console.log(novoItem)

//     const numeroItem = document.createElement('strong')
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += nome;

//     const lista = document.querySelector("#lista")
//     lista.appendChild(novoItem)
// }


// const form = document.querySelector("#novoItem");
// const lista = document.querySelector("#lista");

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();

//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     criaElemento(nome.value, quantidade.value);

//     nome.value = "";
//     quantidade.value = "";

// })

// function criaElemento(nome, quantidade) {
//     console.log(nome)
//     console.log(quantidade)

//     const novoItem = document.createElement('li');
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement('strong');
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += nome;

//     console.log(novoItem);

//     lista.appendChild(novoItem)

//     localStorage.setItem("item", JSON.stringify(itemAtual))
// }

// const form = document.querySelector("#novoItem");
// const lista = document.querySelector('#lista')
// const itens = JSON.parse(localStorage.getItem("itens")) || [];

// itens.forEach(elemento => {
//     criaElemento(elemento)
// });

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault()

//     const nome = evento.target.elements['nome']
//     const quantidade = evento.target.elements['quantidade']

//     itemAtual = {
//         "nome": nome.value, 
//         "quantidade": quantidade.value
//     }

//     itens.push(itemAtual)

//     criaElemento(itemAtual)

//     localStorage.setItem("itens", JSON.stringify(itens));;

//     nome.value =""
//     quantidade.value =""
    
// })

// function criaElemento(item){
//     const novoItem = document.createElement('li')
//     novoItem.classList.add('item')

//     const numeroItem = document.createElement('strong')
//     numeroItem.innerHTML = item.quantidade

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += item.nome; 
//     lista.appendChild(novoItem)

// }

// const form = document.querySelector("#novoItem");
// const lista = document.querySelector("#lista")
// const itens = localStorage.getItem("itens") || []

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();

//     const nome = evento.target.elements['nome']
//     const quantidade = evento.target.elements['quantidade']

//     criaElemento(nome.value, quantidade.value)

//     nome.value = ""
//     quantidade.value = ""
// })

// function criaElemento(nome, quantidade) {
//     console.log(nome)
//     console.log(quantidade)

//     const novoItem = document.createElement("li");
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement("strong");
//     numeroItem.innerHTML = quantidade

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += nome

//     lista.appendChild(novoItem)

//     const itemAtual = {
//         "nome": nome,
//         "quantidade": quantidade
//     }

//     itens.push(itemAtual)

//     localStorage.setItem("itens", JSON.stringify(itens))

// }

// const form = document.querySelector("#novoItem")
// const lista = document.querySelector("#lista")
// const itens = JSON.parse(localStorage.getItem("itens")) || [];


// //-------------------------------BUSCAR DADOS DO LOCALSTORAGE---------------------------------
// itens.forEach((elemento) => {
//     criaElemento(elemento)
// })//-----------------------------------------------------------------------------------------

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();


// //-------------------------------PEGANDO VALORES DO NOME E QUANTIDADE-------------------------
//     const nome = evento.target.elements['nome']
//     const quantidade = evento.target.elements['quantidade']

//     const existe = itens.find(elemento => elemento.nome === nome.value)


//     const itemAtual = {
//         "nome": nome.value,
//         "quantidade": quantidade.value
//     }


//     if(existe) {
//         itemAtual.id = existe.id

//         atualizaElemento(itemAtual)
//     }else{
//         itemAtual.id = itens.length

//         criaElemento(itemAtual);

//         itens.push(itemAtual);
//     }

// //-------------------------------lOCALSTORAGE AMARZENAR INPUT---------------------------------

    

//     localStorage.setItem("itens", JSON.stringify(itens));

// //--------------------------------LIMPAR INPUT QUANDO ENVIAR---------------------------------
//     nome.value=""
//     quantidade.value=""
// })


// //-------------------------------- FUNÇÃO APENAS PARA CRIAR O ELEMENTO!-----------------------
// function criaElemento(item) {
//     const novoItem = document.createElement("li");
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement('strong');
//     numeroItem.innerHTML = item.quantidade;
//     numeroItem.dataset.id = item.id
//     novoItem.appendChild(numeroItem);

//     novoItem.innerHTML += item.nome;

//     lista.appendChild(novoItem);
// }

// function atualizaElemento(item) {
//     document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
// }



const form = document.querySelector("#novoItem");
const lista = document.querySelector('#lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(elemento => {
    criaElemento(elemento)
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value)

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if(existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    }else{
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length-1]).id +1 : 0;
        criaElemento(itemAtual)
        itens.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value=""
    quantidade.value=""
})

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)

}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement('button');
    elementoBotao.innerHTML = 'X'

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}


function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}