// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade
let produto = { nome: "Notebook", preco: 3000 };

Object.freeze(produto);  // congela o objeto

produto.preco = 2500;    // tentativa de alteração (não vai funcionar)
produto.descricao = "Novo modelo"; // tentativa de adicionar nova propriedade (não vai funcionar)

console.log(produto);
