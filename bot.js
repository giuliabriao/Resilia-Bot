require('dotenv').config();

console.log("Beep Beep!");

const Discord = require('discord.js');
const client = new Discord.Client();

const db = require('quick.db');

// Usar um banco de dados já existente
if (!db.has('user')) {
    db.set('user', {});
}

client.on('ready', () => {
    console.log('✨');
})

const welcomes = [
    'Bienvenido, cabrón! 🤠',
    'Hola! Espero que hayas traído los tacos! 🌮',
    '¡Mira, otro maluquito entró aquí! 😛',
    '¿Doeste cuando caíste del cielo, mi corazón? 😏',
    'Una flor para otra flor 🌹',
    'Puede entrar, pero no hagas bagunças!'
]

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');

    // Do nothing if the channel wasn't found on this server
    if (!channel) return;

    // Send the message, mentioning the member
    const index = Math.floor(Math.random() * welcomes.length)

    channel.send(`${member} ${welcomes[index]}`);
});

client.login(`${process.env.BOT_TOKEN}`)

const replies = [
    'Hola mi amigue, que tal? 👌',
    'Hola, que belo dia! 🌹',
    'Vamos bailar, chico? 😏',
    'Besa mi labios ahora! 👯‍♀️',
    'Como estas? Estoy un poquito mal... ',
    'Mi labios puedem ser frios, pero mi corazon es caliente 😘',
    'Y a mucha honra, María la del Barrio soy 💅',
    'Si de una cosa estoy seguro es de mi belleza 💋'
]

const rebelde = [
    'Cuando no sigo a los demás!',
    'Cuando te quiero hasta rabiar!',
    'Cuando no pienso igual que ayer!',
    'Cuando me juego hasta la piel!',
    'Es que quizás nadie me conoce bien!',
]

client.on('message', msg => {
    if (msg.channel.id == '854462842895466506' && msg.content === 'hola senor robo') {

        const index = Math.floor(Math.random() * replies.length)
        
        msg.reply(replies[index]);
    }

    if (msg.channel.id == '854462842895466506' && msg.content === 'Y soy rebelde!') {
        const index = Math.floor(Math.random() * rebelde.length)

        msg.reply(rebelde[index]);
    }
})

client.on('message', async message => {
    // Não fazer nada se a mensagem é de um bot.
    if (message.author.bot) return;

    const member = message.member;

    // Contador de mensagens de membros (individual).
    if (db.has(`user.messages.${member.id}`)) {
        const count = db.get(`user.messages.${member.id}`);
        db.set(`user.messages.${member.id}`, count + 1);
    } else {
        db.set(`user.messages.${member.id}`, 1);
    }

    // Comando "!mensagens <@cargo ou id>".
    if (message.content.startsWith("!mensagens")) {
        const args = message.content.split(" ");
        const mentionRoles = message.mentions.roles;

        // Se houver mais de 1 argumento,
        // Pegar a primeira menção (se houver).
        // Caso contrário, pegar o primeiro id.
        if (args.length > 1) {
            const role = mentionRoles > 0
                ? mentionRoles.first()
                : member.guild.roles.resolve(args[1]);
            
            // Se não for possível pegar o cargo, cancelar
            if (!role) return;

            // Acumulador
            let msg = `Mensagens de membros do cargo ${role.name}\n`;

            // Para cada membro do cargo requisitado
            // Verificar se está no DB.
            // Se estiver, adicionar ao Acumulador.ao
            role.members.each(roleMember => {
                if (db.has(`user.messages.${roleMember.id}`)) {
                    const quantity = db.get(`user.messages.${roleMember.id}`);
                    msg += `${roleMember.displayName} = ${quantity}\n`;
                }
            });

            await message.channel.send(msg);
        }
        
    }
})