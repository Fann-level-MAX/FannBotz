
let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix }) => {

let ppown = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `┆⫹⫺ 💌 Nama : IRFAN
┆⫹⫺ ♂️ Gender : PRIA
┆⫹⫺ 📱 Nomor : @${nomorown1.split`@`[0]}
┆⫹⫺ ⏰ Tanggal lahir : 27 - June - 2006
┆⫹⫺ 🗺️ Tinggal : Indonesia, Jawa Tengah
└––––––––––––·•
`

conn.sendButton(m.chat, '━────┈', teksbio, ppown, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
            }
            

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)/i
export default handler