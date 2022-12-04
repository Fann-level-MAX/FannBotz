import fs from 'fs'

let tek = `*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』* \n\n⁛ BOT (BUILD-OPERATE-TRANSFER)\nadalah program komputer yang dijalankan di Whatsapp\nyang khusus dibuat untuk melakukan pekerjaan-pekerjaan otomatis,\nBOT Whatsapp dirancang sedemikian rupa sehingga dapat digunakan dengan nyaman,\nDan kemungkinan memiliki sedikit bug,\nAdanya fitur dari bot WhatsApp ini tentu akan membantu anda untuk bersenang senang, dll`

let handler = async (m, { conn, args, command }) => {
conn.sendButton(m.chat, `${tek}`, '[ FannBotz ]', '', [['MENU','.menu']], m)
}

handler.tags = ['info']
handler.command = ['about']
export default handler