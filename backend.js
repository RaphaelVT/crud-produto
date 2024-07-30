const prompt = require("prompt-sync")();

const produtos = []

const criar = () => {
    const nome = prompt("Digite o nome do produto: ")
    const valorProduto = Number(prompt("Digite o preço do produto: "))

    if (nome !== "" && valorProduto !== Number) {
        return {
        nome,
        valorProduto,
    };
} else {
    console.log("Dados inválidos");
    return undefined;
}
};

criar();
