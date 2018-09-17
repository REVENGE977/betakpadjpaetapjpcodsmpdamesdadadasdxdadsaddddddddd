const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = 'A!'

console.log('hello')


  client.on('message', async rokz => {
    if(rokz.content.startsWith(prefix + "تقديم")) {
      let lang = '';
      let time = '';
      let expe = '';
      let fillter = m => m.author.id === rokz.author.id
      await rokz.channel.send("ما لغتك ؟").then(e => {
     rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
     .then(co => {
       lang = co.first().content;
        co.first().delete();

       e.edit(`مدة في اللغه
[${lang}]`)
       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
       .then(col => {
         time = col.first().content;
          col.first().delete();

            e.edit(`خبرتك ؟
[${time}]
[${lang}]`)
            rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
            .then(coll => {
              expe = coll.first().content;
               coll.first().delete();

               e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)
              let rokzz = rokz.guild.channels.find("name", "التقديمات")
              setTimeout(() => {
                e.edit("تم التقديم")
              }, 3000)
              rokzz.send(`
                تقديم من ${rokz.author}

  اللغه:
  \`${lang}\`
  المده:
  \`${time}\`
  الخبره:
  \`${expe}\`
                `).then(rokzzz => {
                  rokzzz.react("✅")
                  rokzzz.react("❌")
                })
            })
       })
     })
   })
    }
  })
  
  

  client.on('message',async message => {
  let mention = message.mentions.members.first();
let mySupport = message.guild.roles.find('name', 'Supporter');

  let acRoom = client.channels.get('491271901105094656');
  if(message.content.startsWith(prefix + "قبول")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**${mention} 
Thanks For Your Apply.
You Get The Support**`);
    });
  }
});
  


client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRroom = client.channels.get('491271901105094656');
  if(message.content.startsWith(prefix + "رفض")) {
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  acRroom.send(`**${mention} 
Sorry. You Got Rejected.**`)
  }
});


console.log(`CodyCodes edit`)
//code by Codes
//edit by OrochiX#5426 With ID <429972030092476437>

client.on('message', async message => {  
    if(message.content.startsWith(prefix + "sharejs")) {      
      await message.channel.send("**:writing_hand: ارسل الكود الان **").then(e => {
      let filter = m => m.author.id === message.author.id
      let lan = '';
      let md = '';  
      let br = '';  
      let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
      .then(collected => {
        lan = collected.first().content
        collected.first().delete()
  e.edit(`**:writing_hand: اكتب وصف الكود الان**`)
  let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
  .then(co => {  
    md = co.first().content
          co.first().delete()  
          e.edit(`**:writing_hand: ارسل المصدر او صانع الكود**`)
  let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })    
  .then(col => {
    br = col.first().content
          col.first().delete()
  e.edit("**جاري النشر ...**").then(b => {    
          setTimeout(() => {
    b.edit(`**تم النشر بنجاح**`)
          },2000);
  let gg = message.guild.channels.find('name', 'codes-js')
  if(!gg) return message.reply('لا يوجد روم باسم codes-js')
  if(gg) {
  gg.send(`
  @everyone | @here 
  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  Beta Codes© :arrow_down:
  ${lan}

  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  
  **وصف الكود:** ${md}
  **تم النشر بواسطة:** ${message.author.tag} With ID ${message.author.id}
  **المصدر / الشخص يلي صنع الكود:** ${br}
  
  
  
  
  
  `)
  }
}
)}
  )}
)}
      )}
    )}
})

  
  client.login(process.env.BOT_TOKEN)
