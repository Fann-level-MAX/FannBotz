import moment from 'moment-timezone'

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
global.dk = [
'▱▱▱▱▱▱▱▱',
'▰▱▱▱▱▱▱▱',
'▰▰▱▱▱▱▱▱',
'▰▰▰▱▱▱▱▱',
'▰▰▰▰▱▱▱▱',
'▰▰▰▰▰▱▱▱',
'▰▰▰▰▰▰▱▱',
'▰▰▰▰▰▰▰▱',
'▰▰▰▰▰▰▰▰',
]

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {

    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let d = new Date(new Date + 3600000)
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 6]
    let locale = 'id'
    let week = d.toLocaleDateString(locale, {
    weekday: 'long'
    })
    let date1 = d.toLocaleDateString(locale, {
    day: 'numeric'
    })
    let date2 = d.toLocaleDateString(locale, {
      month: 'long',
      year: 'numeric'
    })

let tes = `
⫹⫺ 𝗛𝗮𝗿𝗶 : ${week} ${weton}
⫹⫺ 𝗧𝗮𝗻𝗴𝗴𝗮𝗹 : ${date1}, ${date2}
⫹⫺ 𝗪𝗮𝗸𝘁𝘂 : ${wibh}:${wibm} _𝙒𝙄𝘽_
`

conn.sendButton(m.chat, tes, `${pickRandom(global.dk)}`, ['menu', '.menu'], m)
}
handler.help = ['date']
handler.tags = ['tool']
handler.command = /^(tanggal|hari|waktu|jam|date)$/i

export default handler