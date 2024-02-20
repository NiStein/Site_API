import {starRate} from "./stars.mjs";

async function retorno() {
    const reponse = await fetch('https://fakestoreapi.com/products')
    const conteudo = await reponse.json();
    lista_Produtos(conteudo)
}
retorno()

function lista_Produtos(produtos) {
    let saida = '';
    for (let produto of produtos) {
   
        let classificacao = starRate(produto.rating.rate)
        console.log(classificacao);
        saida += `
        <div class="div-produtos" >
            <p class="titulo-produto" >${produto.title}</p>
            <img class="img-produtos" src=${produto.image} alt="imagem"/>
            <p class="preco">R$ ${produto.price}</p>
            <p class = "category">Categoria: ${produto.category}</p>
            <div class="div-descricao">
               <p class="descricao">${produto.description}</p>
            </div>
           ${classificacao}
        </div>` 
        
    }

    document.getElementById('lista-Geral').innerHTML = saida;
}

/* const searchInput = document.getElementById('barra_pesquisa'); {
    searchInput = 
    let input = document.getElementById('barra_pesquisa').value
    input = input.toLowerCase();
    let x = document.getElementById('titulo-produto');

    for ( i= 0; i < x.clientHeight; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-itens";
        }
    }
} */