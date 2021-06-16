require('dotenv').config();

console.log("Beep Beep!");

const Discord = require('discord.js');
const client = new Discord.Client();

// const guildMember = new Discord.GuildMember();

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
    'Se quieres de la buena, yo tengo o que precisas 😏🚬🌱',
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
    if(msg.channel.id == '854462842895466506' && msg.content === 'hola senor robo'){
        
        const index = Math.floor(Math.random() * replies.length)
        console.log(msg);
        
        msg.reply(replies[index]);
    }
    
    if(msg.channel.id == '854462842895466506' && msg.content === 'Y soy rebelde!'){
        const index = Math.floor(Math.random() * rebelde.length)

        msg.reply(rebelde[index]);
    }
})
