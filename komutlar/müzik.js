const Discord = require('discord.js');
const loglar = require('../loglar.json');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Blocker Music`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`BlockeR - Music`, `:white_small_square: | ***oynat <müzikisim-link> **: Müzik Açar?? !\n:white_small_square: | ***durdur**: Çalan Müziği KAPATIR??!\n:white_small_square: | ***duraklat**: Çalan Müziği Durdurur??\n:white_small_square: | ***duraklat**: Durdurulan Müziği Devam Ettirir🎵!\n:white_small_square: | ***çalan**: Çalan Müziği Gösterir🎵\n:white_small_square: | ***ses <miktar>**: Çalan Müziğin Sesini Ayarlar🔊🔉!\n:white_small_square: | ***kuyruk**: Müzik Sırasını Gösterir🎵.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım','y', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'müzik',
    description: 'müzik',
    usage: 'müzik'
  };
   