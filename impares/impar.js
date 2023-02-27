// 6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

let n = 100;  //numero que inicia

while (n <=200) {  //condiçao de termino

    if (n % 2 != 0) {
        // se entrar nesse if é porque é impar

        document.write(n + "<br>");
    }
 
    n++;  // passo / meio de transporte // incremento/decremento
}