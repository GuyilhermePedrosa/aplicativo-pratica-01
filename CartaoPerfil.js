import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CartaoPerfil({
  avatar,
  nomeInicial,
  profissao,
  seguindoInicial = false,
}) {
  const [nome, setNome] = useState(nomeInicial);
  const [seguindo, setSeguindo] = useState(seguindoInicial);

  function alternarSeguindo() {
    setSeguindo((estadoAtual) => !estadoAtual);
  }

  return (
    <View style={styles.cartao}>
      <Image
        accessibilityLabel={`Foto de ${nome}`}
        source={{ uri: avatar }}
        style={styles.avatar}
      />

      <Text numberOfLines={1} style={styles.nomeUsuario}>
        {nome || "Sem nome"}
      </Text>
      <Text style={styles.profissao}>{profissao}</Text>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={{ selected: seguindo }}
        activeOpacity={0.75}
        onPress={alternarSeguindo}
        style={[styles.botao, seguindo && styles.botaoDesativado]}
      >
        <Text style={styles.textoBotao}>
          {seguindo ? "Já Seguindo" : "Seguir"}
        </Text>
      </TouchableOpacity>

      <TextInput
        autoCapitalize="words"
        maxLength={30}
        onChangeText={setNome}
        placeholder="Alterar nome..."
        placeholderTextColor="#8A94A1"
        style={styles.input}
        value={nome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#DDE5ED",
    borderRadius: 18,
    borderWidth: 1,
    elevation: 4,
    maxWidth: 440,
    padding: 28,
    shadowColor: "#14325A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    width: "100%",
  },
  avatar: {
    borderColor: "#D8E9F3",
    borderRadius: 60,
    borderWidth: 4,
    height: 120,
    marginBottom: 16,
    width: 120,
  },
  nomeUsuario: {
    color: "#14325A",
    fontSize: 22,
    fontWeight: "800",
    maxWidth: "100%",
  },
  profissao: {
    color: "#667281",
    fontSize: 15,
    marginBottom: 20,
    marginTop: 4,
  },
  botao: {
    alignItems: "center",
    backgroundColor: "#0064A0",
    borderRadius: 9,
    marginBottom: 18,
    paddingHorizontal: 30,
    paddingVertical: 11,
    width: "100%",
  },
  botaoDesativado: {
    backgroundColor: "#7B8794",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#F7F9FB",
    borderColor: "#C9D2DC",
    borderRadius: 9,
    borderWidth: 1,
    color: "#263849",
    fontSize: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
    textAlign: "center",
    width: "100%",
  },
});
