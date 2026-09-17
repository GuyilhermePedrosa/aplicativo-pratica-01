import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import CandidatoCard from "./CandidatoCard";

export default function App() {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const [votosC, setVotosC] = useState(0);
  const [nomeMesario, setNomeMesario] = useState("");

  const totalVotos = votosA + votosB + votosC;

  function calcularPorcentagem(votos) {
    if (totalVotos === 0) {
      return "0,0%";
    }

    return `${((votos / totalVotos) * 100).toFixed(1).replace(".", ",")}%`;
  }

  function reiniciarVotacao() {
    setVotosA(0);
    setVotosB(0);
    setVotosC(0);
  }

  return (
    <View style={styles.tela}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cabecalho}>
          <Text style={styles.etiqueta}>INF204 • PRÁTICA 04</Text>
          <Text style={styles.titulo}>Simulador de Votação</Text>
          <Text style={styles.subtitulo}>
            Escolha um candidato para registrar o voto.
          </Text>
        </View>

        <View style={styles.mesarioContainer}>
          <Text style={styles.campoRotulo}>Nome do mesário</Text>
          <TextInput
            autoCapitalize="words"
            maxLength={60}
            placeholder="Digite o nome"
            placeholderTextColor="#94A3B8"
            style={styles.campo}
            value={nomeMesario}
            onChangeText={setNomeMesario}
          />
          <Text style={styles.mesarioAtual}>
            Mesário atual: {nomeMesario.trim() || "não informado"}
          </Text>
        </View>

        <View style={styles.resumo}>
          <Text style={styles.resumoRotulo}>TOTAL DE VOTOS</Text>
          <Text style={styles.resumoNumero}>{totalVotos}</Text>
        </View>

        <View style={styles.lista}>
          <CandidatoCard
            nome="Candidato A"
            numero="01"
            votos={votosA}
            porcentagem={calcularPorcentagem(votosA)}
            cor="#4F46E5"
            onVotar={() => setVotosA((votosAnteriores) => votosAnteriores + 1)}
          />

          <CandidatoCard
            nome="Candidato B"
            numero="02"
            votos={votosB}
            porcentagem={calcularPorcentagem(votosB)}
            cor="#0F766E"
            onVotar={() => setVotosB((votosAnteriores) => votosAnteriores + 1)}
          />

          <CandidatoCard
            nome="Candidato C"
            numero="03"
            votos={votosC}
            porcentagem={calcularPorcentagem(votosC)}
            cor="#B45309"
            onVotar={() => setVotosC((votosAnteriores) => votosAnteriores + 1)}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Reiniciar votação"
          style={styles.botaoReiniciar}
          onPress={reiniciarVotacao}
        >
          <Text style={styles.textoReiniciar}>Reiniciar votação</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  conteudo: {
    width: "100%",
    maxWidth: 620,
    alignSelf: "center",
    paddingTop: 64,
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  cabecalho: {
    marginBottom: 24,
  },
  etiqueta: {
    color: "#4F46E5",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  titulo: {
    color: "#18212F",
    fontSize: 30,
    fontWeight: "800",
  },
  subtitulo: {
    color: "#64748B",
    fontSize: 16,
    lineHeight: 23,
    marginTop: 8,
  },
  resumo: {
    alignItems: "center",
    backgroundColor: "#18212F",
    borderRadius: 20,
    marginBottom: 20,
    paddingVertical: 20,
  },
  mesarioContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E2E8F0",
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
  },
  campoRotulo: {
    color: "#334155",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  campo: {
    backgroundColor: "#F8FAFC",
    borderColor: "#CBD5E1",
    borderRadius: 12,
    borderWidth: 1,
    color: "#18212F",
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  mesarioAtual: {
    color: "#64748B",
    fontSize: 13,
    marginTop: 10,
  },
  resumoRotulo: {
    color: "#CBD5E1",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.1,
  },
  resumoNumero: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "800",
    marginTop: 2,
  },
  lista: {
    gap: 12,
  },
  botaoReiniciar: {
    alignItems: "center",
    borderColor: "#CBD5E1",
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 20,
    paddingVertical: 15,
  },
  textoReiniciar: {
    color: "#475569",
    fontSize: 15,
    fontWeight: "700",
  },
});
