/*
let handler = async (m, { conn }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (!(id in conn.tebakkimia)) throw false
    let json = conn.tebakkimia[id][1]
   conn.reply(m.chat, '```' + json.unsur + '```\nBalas soalnya, bukan pesan ini!', conn.tebakkimia[id][0])
}
handler.command = /^teki$/i

handler.limit = 1

export default handler
*/
//

let handler = async (m, { conn }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (!(id in conn.tebakkimia)) throw false
    let json = conn.tebakkimia[id][1]
    m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```')
}
handler.command = /^teki$/i
handler.limit = 0
export default handler