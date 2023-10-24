function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = "Olá, " + nome_variavel + ", seja bem vindo(a).";
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

function mudar(objeto, imagem) {
    carro.src = imagem;
}


function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois Fʀ = ma. Então, Fʀ = 500 × 0,2 → Fʀ = 100 N"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, pois I = FΔt. Então, I = 200 × 20 = 400 N.s"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois a razão entre a força feita pelo muro sobre o carro e o peso do carro é: 180.000 ÷ 12000 = 15. Portanto, o peso do carro é 15 vezes menor que a força feita pelo muro sobre o veículo."
            
        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois a Segunda lei de Newton mostra que, se não existir aceleração, não há aplicação de força resultante para os movimentos retilíneos. Como o corpo move-se com velocidade constante, podemos afirmar que a força resultante que atua sobre ele é nula."

        }
        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada. Como as forças que atuam sobre o corpo possuem sentidos opostos, podemos determinar a força resultante por meio de sua subtração: Fʀ = 60 - 20 = 40 N. Por meio da Segunda lei de Newton, a aceleração pode ser encontrada: FR = m.a → 40 = 20.a → a = 2 m/s2."

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}