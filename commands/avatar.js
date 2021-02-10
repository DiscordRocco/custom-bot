const Discord = require('discord.js');
 
module.exports = {
    name: 'avatar',
    description: 'returns a users avatar',
    execute(message, args){
        const { prefix, token } = require ('../config.json');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setTitle("Your Avatar:")
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setDescription("This is your avatar.")
            embed.setColor("RANDOM")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setTitle(`${user.tag}'s Avatar:`)
            embed.setThumbnail(user.displayAvatarURL())
            embed.setDescription(`This is ${user.tag}'s avatar.`)
            embed.setColor('RANDOM')
            embed.setFooter("This is a test.")
            return message.channel.send(embed)
        }
    }
}