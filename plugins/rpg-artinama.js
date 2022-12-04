import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `isi namanya\n\ncontoh:\n${usedPrefix + command} *irfan*`
  let got = await fetch('https://api.zacros.my.id/primbon/artinama?nama=' + text)
  let res = await got.json()
  let rep = res.replace("ARTI NAMA\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});\n\n\nNama " + text + ", memiliki arti: ", "")
  m.reply(`*Nama*: ` + text + `\n\n*Arti*:\n` + rep)
}
handler.help = ['artinama'].map(v => v + ' [nama]')
handler.tags = ['kerang']
handler.command = /^(artinama)$/i

export default handler