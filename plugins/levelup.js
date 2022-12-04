import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
  
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* lagi! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    
    let pp = 'https://telegra.ph/file/712e80d59373d2dfe5cbe.jpg'
    const vv = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
              
    let hh = API('males', '/levelup', {
                                pp: vv,
                                })
    if (before !== user.level) {
        let teks = `.             ${user.role}`
        let str = `
*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]`.trim()
        try {
        const img = await levelup(teks, user.level)
            conn.send2ButtonImg(m.chat, await(await fetch(hh)).buffer(), `Cᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴ, Aɴᴅᴀ Tᴇʟᴀʜ Nᴀɪᴋ Lᴇᴠᴇʟ!!\n⚙ Lᴇᴠᴇʟ : ${user.level}\n⚙ Rᴏʟᴇ : ${user.role}`, botdate, 'Menu', '.menu', 'Owner', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: '',
    mediaType: 1, 
    description: sgc,
    title: ".",
    body: global.kata2[Math.floor(global.kata2.length * Math.random())],
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
   }}})
        } catch (e) {
       /*     conn.sendButton(m.chat, str, botdate, [['INVENTORY', '.inv']], m)*/
            conn.send2ButtonImg(m.chat, await(await fetch(hh)).buffer(), `Cᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴ, Aɴᴅᴀ Tᴇʟᴀʜ Nᴀɪᴋ Lᴇᴠᴇʟ!!`, botdate, 'Menu', '.menu', 'Owner', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: '',
    mediaType: 2, 
    description: sgc,
    title: ".",
    body: global.kata2[Math.floor(global.kata2.length * Math.random())],
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
   }}})
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler
