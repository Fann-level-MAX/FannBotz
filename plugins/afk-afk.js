import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let wibu = `${global.hwaifu}`

let thumb = await(await fetch(wibu)).buffer()
user.afk = + new Date
user.afkReason = text
 conn.sendButtonDoc(m.chat, `${conn.getName(m.sender)} Sᴇᴅᴀɴɢ Aғᴋ Dᴇɴɢᴀɴ Aʟᴀsᴀɴ\n${text ? '_*' + text + '*_' : '_*AFK*_'}`, wm, 'Jangan Ganggu Ya', 'huuuuu', m,  { contextInfo: { externalAdReply: { showAdAttribution: true,
        mediaUrl: "",
        mediaType: "VIDEO",
        description: "",
        title: 'AFK',
        body: global.kata2[Math.floor(global.kata2.length * Math.random())],
        thumbnail: thumb,
        sourceUrl: sgc
    }
    } })
            }
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^(afk)$/i
handler.register = true

export default handler