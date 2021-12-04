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
        }
    });
