const cowsay = require('cowsay')

exports.run = function (undefined, msg, args) {
	msg.channel.send(`\`\`\`\n${cowsay.say({ text: args.join(' '), e: '👀', T: '👅 ' })}\n\`\`\``).catch()
}