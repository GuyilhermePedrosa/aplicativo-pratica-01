import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CartaoPerfil from "./CartaoPerfil";
import JogoDaVelha from "./JogoDaVelha";

const perfis = [
  {
    id: 1,
    nome: "Guilherme Pedrosa",
    profissao: "Desenvolvedor Mobile",
    avatar:
      "https://ui-avatars.com/api/?name=Guilherme+Pedrosa&background=0064A0&color=FFFFFF&size=256",
  },
  {
    id: 2,
    nome: "Hugo Marcondes",
    profissao: "Designer de Interfaces",
    avatar:
      "https://ui-avatars.com/api/?name=Hugo+Marcondes&background=14325A&color=FFFFFF&size=256",
    seguindo: true,
  },
  {
    id: 3,
    nome: "João Vitor",
    profissao: "Professor de Desenvolvimento Mobile",
    avatar:
      "https://ui-avatars.com/api/?name=Joao+Vitor&background=E0734D&color=FFFFFF&size=256",
  },
];

export default function App() {
  return (
    <View style={styles.tela}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cabecalho}>
          <Text style={styles.subtitulo}>INF204 • Prática 03</Text>
          <Text style={styles.titulo}>Perfis da comunidade</Text>
          <Text style={styles.descricao}>
            Conheça os participantes e atualize os nomes diretamente nos cartões.
          </Text>
        </View>

        <View style={styles.listaPerfis}>
          {perfis.map((perfil) => (
            <CartaoPerfil
              key={perfil.id}
              avatar={perfil.avatar}
              nomeInicial={perfil.nome}
              profissao={perfil.profissao}
              seguindoInicial={perfil.seguindo}
            />
          ))}
        </View>

        <View style={styles.areaJogo}>
          <JogoDaVelha />
        </View>

        <Text style={styles.rodape}>
          INF204 • Desenvolvimento para Dispositivos Móveis
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#EEF3F8",
  },
  conteudo: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 48,
  },
  cabecalho: {
    width: "100%",
    maxWidth: 440,
    marginBottom: 24,
  },
  subtitulo: {
    color: "#0064A0",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  titulo: {
    color: "#14325A",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 8,
  },
  descricao: {
    color: "#5B6878",
    fontSize: 16,
    lineHeight: 23,
  },
  listaPerfis: {
    alignItems: "center",
    gap: 18,
    width: "100%",
  },
  areaJogo: {
    marginTop: 32,
    maxWidth: 440,
    width: "100%",
  },
  rodape: {
    color: "#7B8794",
    fontSize: 12,
    marginTop: 28,
    textAlign: "center",
  },
});
