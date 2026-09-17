import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const combinacoesVencedoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function encontrarVencedor(tabuleiro) {
  for (const [a, b, c] of combinacoesVencedoras) {
    if (
      tabuleiro[a] &&
      tabuleiro[a] === tabuleiro[b] &&
      tabuleiro[a] === tabuleiro[c]
    ) {
      return tabuleiro[a];
    }
  }

  return null;
}

export default function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorAtual, setJogadorAtual] = useState("X");

  const vencedor = encontrarVencedor(tabuleiro);
  const empate = !vencedor && tabuleiro.every(Boolean);

  function jogar(indice) {
    if (tabuleiro[indice] || vencedor) {
      return;
    }

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indice] = jogadorAtual;

    setTabuleiro(novoTabuleiro);
    setJogadorAtual((jogador) => (jogador === "X" ? "O" : "X"));
  }

  function reiniciar() {
    setTabuleiro(Array(9).fill(null));
    setJogadorAtual("X");
  }

  function obterMensagem() {
    if (vencedor) {
      return `Jogador ${vencedor} venceu!`;
    }

    if (empate) {
      return "Deu velha!";
    }

    return `Vez do jogador ${jogadorAtual}`;
  }

  return (
    <View style={styles.cartaoJogo}>
      <Text style={styles.etiqueta}>Desafio extra</Text>
      <Text style={styles.titulo}>Jogo da Velha</Text>
      <Text style={styles.instrucao}>Toque em uma casa para começar.</Text>

      <View
        accessibilityLabel="Tabuleiro do jogo da velha"
        style={styles.tabuleiro}
      >
        {[0, 1, 2].map((linha) => (
          <View key={linha} style={styles.linha}>
            {[0, 1, 2].map((coluna) => {
              const indice = linha * 3 + coluna;
              const valor = tabuleiro[indice];

              return (
                <TouchableOpacity
                  accessibilityLabel={`Casa ${indice + 1}${valor ? `, marcada com ${valor}` : ""}`}
                  accessibilityRole="button"
                  accessibilityState={{ disabled: Boolean(valor || vencedor) }}
                  activeOpacity={0.65}
                  key={indice}
                  onPress={() => jogar(indice)}
                  style={[
                    styles.celula,
                    coluna < 2 && styles.bordaDireita,
                    linha < 2 && styles.bordaInferior,
                  ]}
                >
                  <Text
                    style={[
                      styles.marca,
                      valor === "X" ? styles.marcaX : styles.marcaO,
                    ]}
                  >
                    {valor}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>

      <Text accessibilityLiveRegion="polite" style={styles.resultado}>
        {obterMensagem()}
      </Text>

      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={0.75}
        onPress={reiniciar}
        style={styles.botaoReiniciar}
      >
        <Text style={styles.textoBotao}>Reiniciar partida</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartaoJogo: {
    alignItems: "center",
    backgroundColor: "#14325A",
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 28,
    width: "100%",
  },
  etiqueta: {
    color: "#72C7F2",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 4,
  },
  instrucao: {
    color: "#C9D7E6",
    fontSize: 14,
    marginBottom: 22,
    marginTop: 5,
  },
  tabuleiro: {
    backgroundColor: "#FFFFFF",
    borderColor: "#9BB4CA",
    borderRadius: 12,
    borderWidth: 2,
    flexDirection: "column",
    overflow: "hidden",
  },
  linha: {
    flexDirection: "row",
  },
  celula: {
    alignItems: "center",
    height: 86,
    justifyContent: "center",
    width: 86,
  },
  bordaDireita: {
    borderColor: "#9BB4CA",
    borderRightWidth: 2,
  },
  bordaInferior: {
    borderBottomWidth: 2,
    borderColor: "#9BB4CA",
  },
  marca: {
    fontSize: 42,
    fontWeight: "800",
  },
  marcaX: {
    color: "#0064A0",
  },
  marcaO: {
    color: "#E0734D",
  },
  resultado: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 20,
  },
  botaoReiniciar: {
    borderColor: "#72C7F2",
    borderRadius: 9,
    borderWidth: 1,
    marginTop: 14,
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});
