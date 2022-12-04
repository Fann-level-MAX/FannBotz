import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let jsn = await fetch(`https://api.sekha.me/api/wallpaper/ppcouple?apikey=apirey`)
let json = await jsn.json()
await conn.sendButton(m.chat, '𝙶𝚒𝚛𝚕𝚜', wm, json.female, [['Next', `${command}`]], m)
await conn.sendButton(m.chat, '𝙱𝚘𝚢𝚜', wm, json.male, [['Next', `.${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler