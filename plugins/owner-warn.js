const { MessageType } = await import('@adiwajshing/baileys')
//let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  let war = global.db.data.users[m.sender].warn
  if (!text) throw 'Err..'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag someone'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Err..'
  let wat = parseInt(txt)
  let ewat = wat
  if (wat >= 5) throw `Too many amount `
  else if (wat < 9999999999) {
  let users = global.db.data.users
  users[who].warn += wat
  
  conn.reply(m.chat, `@${who.split`@`[0]} Has Been warned\n@${who.split`@`[0]} Now Have ${war} Warning`, m, { mentions: [who] }, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }
}
handler.help = ['addxp @user <amount>']
handler.tags = ['owner']
handler.command = /^warn|warning$/
handler.owner = true

export default handler