import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => setContagem(contagem + 1);

  const decrementar = () => {
    // Garante que o contador não fique negativo
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  };

  const zerar = () => setContagem(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contagem Atual:</Text>
      <Text style={styles.numero}>{contagem}</Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoIncrementar]}
          onPress={incrementar}
        >
          <Text style={styles.textoBotao}>+ Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoDecrementar]}
          onPress={decrementar}
        >
          <Text style={styles.textoBotao}>- Decrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoZerar]}
          onPress={zerar}
        >
          <Text style={styles.textoBotao}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    color: "#333333",
  },
  numero: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#4caf50",
    marginBottom: 30,
  },
  botoesContainer: {
    width: "100%",
    alignItems: "center",
  },
  botao: {
    width: "80%",
    paddingVertical: 14,
    borderRadius: 25,
    marginVertical: 8,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  botaoIncrementar: {
    backgroundColor: "#4caf50",
  },
  botaoDecrementar: {
    backgroundColor: "#e53935",
  },
  botaoZerar: {
    backgroundColor: "#757575",
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

