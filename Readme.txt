Secret number
Objectivo
Adivinhar o número escondidso por trás do ponto de interrogação.

Lógica do jogo
1. Quando a págimna é carregada, é gerado um nímero aleatório que é atribuido ao campo '.number'.
   Esse número não é visivel. O campo '.number' apresenta um ponto de interrogação. O número aleatório 
   é substitui o ponto de interrogação quando o valor de '.guess' é igual a'.number'
2. Quando o botão "Check!" é premido, o campo '.guess' é analisado e é vazio ou contem um número.
	Se '.guess' é vazio, apresenta no campo '.message' a mensagem "No number!"
	Se '.guess' não é vazio:, compara '.guess' com '.number'