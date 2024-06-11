function newSection(section: string) {
  console.log("======================================");
  console.group(section);
  console.log("======================================");
}

newSection("STRING");

let texto: string;

texto = "Luciel";

console.log("🚀 ~ texto:", texto);

texto = "Santos";

console.log("🚀 ~ texto:", texto);

const constante: string = "Luciel Santos";

console.log("🚀 ~ constante:", constante);

var variable = "Luciel Vitor";

console.log("🚀 ~ variable:", variable);

variable = "Vitor";

console.log("🚀 ~ variable:", variable);

console.group("🚀 Teste de escopo");

if (true) {
  var teste: string = "Teste";

  teste = "Mudou";

  console.log("🚀 ~ teste:", teste);

  teste = "Alterado dentro do If";

  console.log("🚀 ~ teste:", teste);

  if (true) {
    teste = "Mudou dentro de um If dentro de um If";
  }
} else {
  console.log("🚀 ~ teste:", teste);
}

console.log("🚀 ~ teste:", teste);

console.groupEnd();

let nome: string = "luciel santos";

console.log("🚀 ~ nome:", nome);

const nomeMaiusculo: string = nome.toUpperCase();

console.log("🚀 ~ nomeMaiusculo:", nomeMaiusculo);

console.log("🚀 ~ nomeMaiusculo:", nomeMaiusculo.split(" "));

console.groupEnd();

newSection("NUMBER");

let numero: number;
const numeroTexto: string = "389";

numero = 85;

console.log("🚀 ~ numero:", numero);

numero = 789;

console.log("🚀 ~ numero:", numero);

console.log("🚀 ~ numeroTexto:", numeroTexto);

numero = Number(numeroTexto);

console.log("🚀 ~ numero:", numero);

const numeroConst: number = 654;
console.log("🚀 ~ numeroConst:", numeroConst);
console.groupEnd();

newSection("BOOLEAN");

// true ou false
let boleano: boolean;

boleano = true;

console.log("🚀 ~ boleano:", boleano);

boleano = false;

console.log("🚀 ~ boleano:", boleano);

boleano = true;

console.log("🚀 ~ boleano:", boleano);

if (boleano) {
  console.log("🚀 Dentro do if");
} else {
  console.log("🚀 Dentro do else");
}

let usuario: string = "Luciel";

console.log("🚀 ~ usuario:", usuario);

let possuiSentenca: boolean = usuario.includes("Luci");

console.log("🚀 ~ possuiSentenca:", possuiSentenca);

let cpfCorreto: string = "12345678958";
let cpfIncorreto: string = "123456789585";

let isCpfCorreto: boolean = cpfCorreto.length === 11;

console.log("🚀 ~ isCpfCorreto:", isCpfCorreto);

isCpfCorreto = cpfIncorreto.length === 11;

console.log("🚀 ~ isCpfCorreto:", isCpfCorreto);

console.groupEnd();

newSection("Typeof");

console.log(typeof {} == typeof null);

console.groupEnd();

newSection("Undefined");

let indefinido: undefined;

console.log("🚀 ~ indefinido:", indefinido);

indefinido = undefined;

console.log("🚀 ~ indefinido:", indefinido);

console.log("🚀 ~ Boolean(indefinido):", Boolean(indefinido));

if (indefinido) {
  console.log("Dentro do if");
} else {
  console.log("Dentro do else");
}

console.groupEnd();

newSection("ARRAY");

let lista: Array<string>;

lista = ["Luciel", "Vitor", "Brusch", "dos", "Santos"];

console.log("🚀 ~ lista:", lista);

console.log("🚀 ~ lista join:", lista.join(" "));

let numericos: number[];

numericos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("🚀 ~ numericos:", numericos);

console.log("🚀 ~ Números de 1 a 9:", numericos.join(", "));

let alunosDeTs: ["Luciel", "Vitor", "Santos"];

alunosDeTs = ["Luciel", "Vitor", "Santos"];

console.log("🚀 ~ Todos os alunos de TS:", alunosDeTs.join(", "));

let tuplaDeUsuario: [number, string];

tuplaDeUsuario = [25, "Luciel"];

console.log("🚀 ~ tuplaDeUsuario:", tuplaDeUsuario);

console.log("🚀 ~ tuplaDeUsuario:", tuplaDeUsuario[1].toUpperCase());

tuplaDeUsuario = [67, "Fulano"];

console.log("🚀 ~ tuplaDeUsuario:", tuplaDeUsuario);

console.groupEnd();

newSection("Objetos");

let objeto: Record<string, number | string>;

objeto = {
  123: "",
  um: 1,
  dois: 2,
  nome: "Luciel",
};

console.log("🚀 ~ objeto:", objeto);

interface Usuario {
  nome: string;
  idade: number;
  email: string;
}

let usuarioAdm: Usuario;

usuarioAdm = {
  nome: "Luciel",
  email: "luciel@gmial.com",
  idade: 52,
};

console.log("🚀 ~ usuarioAdm:", usuarioAdm);

console.groupEnd();

newSection("Enum");

enum CorDisponivelEnum {
  VERMELHO = "RED",
  BRANCO = "WHITE",
  VERDE = "GREEN",
}

interface Paleta {
  corSelecionada: CorDisponivelEnum;
}

let paleta: Paleta;

paleta = {
  corSelecionada: CorDisponivelEnum.VERMELHO,
};

console.log("🚀 ~ paleta:", paleta);

console.groupEnd();
