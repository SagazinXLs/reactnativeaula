const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.33}',
    '{"nome": "Kit de Lapis", "preco": 9.37}',
    '{"nome": "Caneta", "preco": 1.50}'
]

// Retorna um array apenas com preço

const paraObjeto = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPrecos)
const resultado2 = carrinho.map(paraObjeto)
console.log(resultado)
console.log(resultado2)

