const express = require('express'); 
const app = express(); 
const port = 3000; 


app.get('/calculadora', (req, res) => {
    
    const operacao = req.query.operacao;
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    
    if (!operacao || isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Pedido inválido: certifique-se de fornecer números válidos.');
    }

    let resultado;

    
    if (operacao === 'soma') {
        resultado = n1 + n2;
    } else if (operacao === 'subtracao') {
        resultado = n1 - n2;
    } else if (operacao === 'multiplicacao') {
        resultado = n1 * n2;
    } else if (operacao === 'divisao') {
        if (n2 === 0) {
            return res.status(400).send('Pedido inválido: divisão por zero não é permitida, se não da pau no sistema ;-;.');
        }
        resultado = n1 / n2;
    } else {
        return res.status(400).send('Pedido inválido: operação desconhecida. Use "soma", "subtracao", "multiplicacao" ou "divisao".');
    }

    
    res.send(`Resultado: ${resultado}`);
});


app.listen(port, () => {
    console.log(`Web Service está rodando em http://localhost:${port}`);
});
