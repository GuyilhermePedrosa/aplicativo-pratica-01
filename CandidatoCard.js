import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CandidatoCard({
  nome,
  numero,
  votos,
  porcentagem,
  cor,
  onVotar,
}) {
  return (
    <View style={styles.card}>
      <View style={[styles.numero, { backgroundColor: cor }]}>
        <Text style={styles.numeroTexto}>{numero}</Text>
      </View>

      <View style={styles.informacoes}>
        <Text style={styles.nome}>{nome}</Text>
        <View style={styles.resultado}>
          <Text style={styles.votos}>
            {votos} {votos === 1 ? "voto" : "votos"}
          </Text>
          <Text style={[styles.porcentagem, { color: cor }]}>{porcentagem}</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel={`Votar em ${nome}`}
        style={[styles.botao, { backgroundColor: cor }]}
        onPress={onVotar}
      >
        <Text style={styles.botaoTexto}>Votar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E2E8F0",
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    padding: 16,
  },
  numero: {
    alignItems: "center",
    borderRadius: 14,
    height: 48,
    justifyContent: "center",
    width: 48,
  },
  numeroTexto: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },
  informacoes: {
    flex: 1,
    marginHorizontal: 14,
  },
  nome: {
    color: "#1E293B",
    fontSize: 17,
    fontWeight: "700",
  },
  votos: {
    color: "#64748B",
    fontSize: 14,
  },
  resultado: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  porcentagem: {
    fontSize: 13,
    fontWeight: "800",
  },
  botao: {
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
});
