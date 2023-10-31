function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = "Olá, " + nome_variavel + ", seja bem vindo(a)!";
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
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
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
            document.getElementById("resp_errada_5").innerHTML = "Errada. Como as forças que atuam sobre o corpo possuem sentidos opostos, podemos determinar a força resultante por meio de sua subtração: Fʀ = 60 - 20 = 40 N. Por meio da Segunda lei de Newton, a aceleração pode ser encontrada: FR = m.a → 40 = 20.a → a = 2 m/s²."

        }
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada. Como m.a corresponde a F, podemos escrever que: F' = 2F."
        
        }
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada. A partir do movimento uniformemente variado, podemos determinar a aceleração do corpo: v = v0 + a.t → 6 = 9 – a.4 → a.4 = 6 – 9 → 4.a = 3 → a = ¾ = 0,75 m/s². Por meio da Segunda lei de Newton, temos: F = m.a → F = 8 . 0,75 = 6 N. Como após a aplicação da força a velocidade do corpo diminuiu, podemos concluir que a força é oposta ao movimento original do móvel."

        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada. A aceleração do veículo pode ser determinada por meio da equação de Torricelli: V² = V0² + 2.a.Δs → 40² = 202 + 2.a.400 → 1600 = 400 + 800.a → 800.a = 1600 – 400 → 800.a = 1200 → a = 1200 / 800 → a = 1,5 m/s². A partir da aplicação da Segunda lei de Newton, podemos definir a força. Fʀ = m . a → Fʀ = 1200 . 1,5 → Fʀ = 1800 N."

        }
        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada. Para resolvermos a questão, é necessário calcular a aceleração do caminhão para que, em seguida, calculemos a força que atua sobre ele. Para isso, usaremos a equação de Torricelli. Depois de termos calculado a aceleração, basta descobrirmos a intensidade da força por meio da segunda lei de Newton. Com base no cálculo, podemos afirmar que a alternativa correta é a letra A. |Fʀ| = ma → Fʀ = 4000.0,5 = 2000 N."

        }
        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada. O primeiro passo para resolvermos o exercício é determinar o módulo da aceleração que o corpo desenvolve. Para isso, usaremos a equação de Torricelli. Depois de termos calculado a aceleração, aplicamos a segunda lei de Newton e descobrimos que a força resultante sobre o corpo teve um valor de aproximadamente 1,9 N, portanto a resposta correta é a letra C."

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}


function calculo_sei_la() {
    avel_a').value;
    var b = document.getElementById('variavel_b').value;
    var x = document.getElementById('resposinha').value;
    var calculo = a*b;
    alert(a);
    if(calculo == x){
        alert("Acertou");
    }else{
        alert("errou");
    }
    
}