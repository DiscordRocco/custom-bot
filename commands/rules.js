const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  await message.delete()
  return message.reply("Hello! Just a reminder to check <#741329118498390129>").then(m => m.delete(10000))
}
