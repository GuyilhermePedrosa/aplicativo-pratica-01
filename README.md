# Prática Laboratorial 03 - INF204

Projeto desenvolvido para a disciplina **INF204 - Desenvolvimento para Dispositivos Móveis**.

## Dupla

- Guilherme Osório Pedrosa - Matrícula: 27822
- Hugo de Oliveira Marcondes - Matrícula: 25586

## Sobre o projeto

O aplicativo foi desenvolvido em React Native com Expo para praticar os principais componentes de interface, a estilização com `StyleSheet`, a organização com Flexbox e a manipulação de estado com `useState`.

## Funcionalidades

- três cartões de perfil dentro de uma `ScrollView`;
- imagens remotas com tamanho e bordas definidos;
- edição do nome de cada perfil com `TextInput`;
- botão de seguir com o estado visual "Já Seguindo";
- estilos condicionais aplicados por array;
- jogo da velha 3x3 construído com Flexbox;
- alternância automática entre os jogadores X e O;
- detecção de vitória e empate;
- botão para reiniciar a partida.

## Tecnologias

- React 19;
- React Native 0.86;
- Expo SDK 57;
- JavaScript.

## Como executar

É necessário ter o Node.js 22 LTS ou uma versão mais recente instalada.

```bash
npm install
npx expo start
```

Com o servidor aberto, escaneie o QR Code pelo Expo Go. O celular e o computador precisam estar conectados à mesma rede Wi-Fi.

Também é possível abrir uma plataforma diretamente:

```bash
npm run android
npm run ios
npm run web
```

O comando para iOS exige macOS. Em outros sistemas, o aplicativo pode ser aberto no iPhone por meio do Expo Go.

## Estrutura do projeto

```text
aplicativo-pratica-01/
├── App.js
├── CartaoPerfil.js
├── JogoDaVelha.js
├── app.json
├── index.js
├── package.json
└── README.md
```

`App.js` organiza a tela e a rolagem. `CartaoPerfil.js` concentra a interface e os estados de cada perfil. `JogoDaVelha.js` contém o tabuleiro e as regras da partida.

## Branch da atividade

O código da Prática 03 está na branch `feature/pratica-03`, conforme solicitado no roteiro da atividade.
