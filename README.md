# Lista de Compras

**Aluno:** Paulo Ribeiro Marinho
**RM:** 567459

## Descrição

Aplicativo React Native (Expo) de uma lista de compras simples, desenvolvido para o Checkpoint 2 da disciplina de Cross-Platform Application Development.

O usuário digita o nome de um item no campo de texto e toca em "Adicionar" para inseri-lo na lista. A lista é exibida com `FlatList` e o estado é controlado com `useState`, sem uso de `.push()`.

## Funcionalidades

- Título do app
- Campo de texto (`TextInput`) para digitar um novo item
- Botão "Adicionar" que insere o item na lista usando `useState` (`setLista([...lista, novoItem])`)
- Lista exibida com `FlatList`
- Itens vazios são ignorados e o campo é limpo após adicionar

## Tecnologias

- React Native
- Expo
- React Hooks (`useState`)

## Como executar

```bash
npm install
npx expo start
```

Abra no Expo Go (celular) ou pressione `w` para abrir no navegador.

## Prints

Os prints da tela estão na pasta [prints](prints):

1. [Lista vazia](prints/1-lista-vazia.png)
2. [Lista com 1 item](prints/2-um-item.png)
3. [Lista com 5 itens](prints/3-cinco-itens.png)
