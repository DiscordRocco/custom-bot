var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('<a:RMX:747720808541061190> You do not have perms for this');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('<a:RMX:747720808541061190>You didn\'t mention anyone!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member= null;
    }

    if(!member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply(' <a:RMX:747720808541061190> You Do Not Have Perms For This')
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('<a:RMX:747720808541061190> You need to give a reason!')

    var channel = msg.guild.channels.cache.find(c => c.name === 'logs');

    var log = new Discord.MessageEmbed()
    .setTitle('User Banned')
    .addField('User:', user, true)
    .addField('By:', msg.author, true)
    .addField('Reason:', reason)
    
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('Sorry You Were Banned')
    .setColor('#ad4056')
    .addField('Feel Free To Apply For A Ban Appeal https://forms.gle/kdjvkBHdYLMBeBGk8')
    .setDescription(reason)

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    msg.guild.members.ban(user);
    msg.channel.send(`<a:tik:741685150114644020> **${user}** has been Banned by **${msg.author}**!`)
}