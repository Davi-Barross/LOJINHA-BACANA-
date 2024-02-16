console.log("Bem vindo a LOJINHA DIGITAL!, informe a suas informações");
let nome = "Davi";
let idade = 18;
let NumeroParacontato = "(55) 99198565";
let cpf = "565.145.965-45"; //CPF ALEATORIO!
let Registrodegole = false;
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(
  "Bem vindo  " +
    nome +
    " Onde corresponde pelo cpf " +
    cpf +
    " E tem atualmente " +
    idade +
    " anos "
);

let itemcomprado = "Pc gamer pichau valor: 7k";
let formadepagamento1 = 7000;
let formadepagamento2 = 7000;
let comprou = "";

if (comprou === "10VEZESSEMJUROS") {
  formadepagamento1 = 7000 / 10;
  console.log("Olá " + nome);
  console.log("");
  console.log(
    "Gostaria de informar que sua compra do PC no valor de R$ 7000 foi confirmada. Para tornar o pagamento mais conveniente, organizamos um plano de parcelamento em 10 vezes, com cada parcela no valor de R$ 700."
  );
  console.log("");
  console.log(
    "Agradecemos pela sua compra e estamos à disposição para qualquer dúvida ou informação adicional."
  );
} else if (comprou === "avista") {
  formadepagamento2 = 7000 - 350;
  console.log("Olá [Nome],");
  console.log("");
  console.log(
    "Gostaria de informar que sua compra do PC no valor de R$ 7000 foi confirmada. Para tornar o pagamento mais conveniente, organizamos um plano de parcelamento em 10 vezes, com cada parcela no valor de R$ 700."
  );
  console.log("");
  console.log(
    "Além disso, estamos felizes em informar que oferecemos um desconto especial para pagamento à vista. Optando por pagar à vista, o preço sai por R$ 6650. O valor já foi descontado diretamente no débito."
  );
  console.log("");
  console.log(
    "Caso tenha alguma dúvida ou precise de mais informações, estamos à disposição para ajudar."
  );
  console.log("");
  console.log(
    "Agradecemos pela sua compra e esperamos que aproveite o novo PC!"
  );
} else {
  console.log(
    "Bem-vindo à Lojinha Digital! Nossa loja se orgulha de oferecer produtos de alta qualidade e um serviço excepcional. Se você está procurando por um novo PC, você veio ao lugar certo! Estamos confiantes de que você não se arrependerá de sua compra conosco. Além disso, lembre-se de que, quando você adiciona um item ao carrinho, ele fica triste se você não finalizar a compra! Portanto, não deixe seu carrinho triste - faça sua compra hoje mesmo!"
  );
}
