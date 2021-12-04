const tmi = require('tmi.js');
const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info"},
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: 'miksaajabot',
        password: 'oauth:TOKEN'
    },
    channels: ['mixerboy24']
});

client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
        if(self || !message.startsWith('!')) {
            return;
        }
        const args = message.slice(1).split(' ');
        const command = args.shift().toLowerCase();

        if(command === 'moi') {
            client.say(channel, '@${tags.username], hei ja tervetuloa! :3')
        }else
        if(command === 'discord') {
            client.say(channel, 'Liity Miksaaja Cityyn mb24.fi/discord tai koodilla "tp4AnrH"');
        }else
        if(command === 'localghostfi') {
            client.say(channel, 'LocalghostFI:n palveluihin kuuluvat verkkoasennukset- ja korjaukset, tietokonehuolto, uniikit pelipalvelimet sekä 3D-tulostuspalvelua. Localghostilla on myös oheistarvikkeita mm USB kaapeleita. https://localghost.fi')
        }
    });

client.on("subscription", (channel, username, method, message, userstate) => {
    client.say(channel, `Tervetuloa ${username} Miksaajiin! Olet lunastanut Äänipöydän käyttöoikeuden.`);
});
 
client.on('subgift', (channel, username, streakMonths, reicipient, methods, tags) => {
     const tier = { 1000: 1, 2000: 2, 3000: 3 }[methods.plan] || methods.plan;
    client.say(channel, `${username} lahjoitti ${tier}-tason äänipöydän käyttöoikeuden ${reicipient}!`);
//   });
