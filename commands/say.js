const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return Message.reply("Nah");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
}