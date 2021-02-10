var Discord = require('discord.js');
var ms = require('ms')


exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('<a:RMX:747720808541061190> You do not have perms for this');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('<a:RMX:747720808541061190> You didn\'t mention anyone!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member= null;
    }

    if(!member) return msg.reply('<a:RMX:747720808541061190> They aren\'t in the server!');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Can\'t be bothered lol')

    var rawTime = args[1];
    var time = msg(rawTime);
    if(!time) return msg.reply('<a:RMX:747720808541061190> Please specify a time ');

    var reason = args.splice(2).join(' ');
    if(!reason) return msg.reply('<a:RMX:747720808541061190> You need to give a reason!')

    var channel = msg.guild.channels.cache.find(c => c.name === 'logs');

    var log = new Discord.MessageEmbed()
    .setTitle('User Muted')
    .addField('User:', user, true)
    .addField('By:', msg.author, true)
    .addField('Expires', rawTime, true)
    .addField('Reason:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('You were muted')
    .setColor('#ad4056')
    .addField('Expires:', rawTime, true);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }


    msg.channel.send(`<a:tik:741685150114644020> **${user}** has been muted by **${msg.author}**!`)
}

