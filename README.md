# <strong><p style="text-align: center">Ricardito, Lo Robo</p></strong>

## Este bot foi criado para o servidor da Resilia com o objetivo de melhorar os dados sobre as interações dos membros da comunidade
<br>

### 🔎 <strong>Como rodar</strong>

Primeiramente, você deve clonar este repositório na sua máquina, com o seguinte comando no Git Bash ou terminal de sua escolha:

```shell
git clone https://github.com/giuliabriao/Resilia-Bot.git
```
Agora, instale as dependências do projeto escrevendo:

```shell
npm install
```

### ✨ <strong>Beep beep</strong>

Escreva `npm run watch` no seu terminal e ele irá rodar o robô, permitindo que ele esteja online no servidor designado para testar o bot.

O bot foi configurado para responder a dois tipos de msgs designadas a ele: "hola senor robo" e "Y soy rebelde!", mas apenas como forma de aprendizado inicial e testes do robô. Podem ser retirados depois ou deixar como easter egg do Ricardito. Até mesmo seu nome pode ser alterado se preferir.

No servidor, ao escrever `!mensagens <id do cargo>` o Ricardito vai responder de volta dizendo o nome da pessoa e quantas mensagens ela enviou sendo do cargo especificado na sua msg. Tudo fica salvo no banco de dados, sendo o usuario registrado pela id dele.

Foi especificado ao robô que respondesse à mensagens apenas no canal "Fale-com-o-bot" no servidor de testes, mas isso pode ser alterado posteriormente. Toda lógica no código foi feita com base na biblioteca e em lógica de programação comum para resolver os problemas, como o de contagem de mensagens por exemplo.

### <strong> Estudos</strong>

A [lib do Discord](https://discord.js.org/#/docs/main/stable/general/welcome) é a principal ferramenta de estudos, além de alguns servidores de devs que podem tirar dúvidas: [Discord Developers](https://discord.gg/discord-developers), servidor oficial do Discord [Discord API](https://discord.gg/discord-api), servidor não oficial do Discord e o [Discord Js](https://discord.gg/djs), servidor específico sobre a lib.

Recomendo demais aprender de maneira fácil e divertida sobre bots com a seguinte [série de vídeos do canal The Coding Train](https://www.youtube.com/watch?v=7A-bnPlxj4k). Foi com ele que aprendi o básico sobre bots e já me ajudou a pelo menos sair do zero.

### 📌 <strong>Próximos passos</strong>

Precisamos agora seguir o projeto tendo em mente o objetivo principal do bot: contar quantas mensagens um membro do servidor enviou com base no(s) seu(s) cargo(s) para que esses dados auxiliem na análise das interações da comunidade Resilia. Outros objetivos incluem ver essa mesma relação anterior mas separando por canais e também de plotar esses dados numa linha do tempo. 

Com o passar do tempo e das novas features, o bot pode ter muito mais funcionalidades além das necessárias inicialmente, mas como realizar o MVP é o mais essencial, recomendo focar no principal por agora enquanto não está 100% realizado. 

### 🚀 <strong>Tecnologias</strong>
Foram utilizadas as seguintes tecnologias para a construção do projeto

- [DiscordJS](https://discord.js.org/#/docs/main/stable/general/welcome)
- [QuickDB](https://quickdb.js.org/)
