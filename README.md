# Simulador de Votação

Projeto desenvolvido para a Prática Laboratorial 04 da disciplina INF204 — Desenvolvimento para Dispositivos Móveis.

## Integrantes

- Guilherme Osório Pedrosa — Matrícula 27822
- Hugo de Oliveira Marcondes — Matrícula 25586

## Funcionalidades

- votação independente em três candidatos;
- total de votos calculado automaticamente;
- percentual de votos de cada candidato;
- identificação do mesário por campo de texto controlado;
- botão para reiniciar a votação;
- layout adaptado para celular e navegador.

## Como executar

É necessário ter o Node.js instalado. Depois, na pasta do projeto, execute:

```bash
npm install
npx expo start
```

No terminal do Expo, pressione `w` para abrir no navegador ou leia o QR Code com o Expo Go.

## Estrutura principal

- `App.js`: estados da votação, total, percentuais e identificação do mesário;
- `CandidatoCard.js`: componente reutilizável que apresenta cada candidato e seu botão de voto.

O desenvolvimento desta atividade está na branch `feature/pratica-04`.
