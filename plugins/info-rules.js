let handler = async m => {

let krtu = `RULES`
m.reply(`
[ Rᴜʟᴇs ]
➯ *Tɪᴅᴀᴋ Sᴘᴀᴍ Bᴏᴛ*
➯ *Tɪᴅᴀᴋ Mᴇɴᴊᴜᴀʟ Nᴏᴍᴏʀ Bᴏᴛ!*
➯ *Cᴀʟʟ = AᴜᴛᴏBʟᴏᴄᴋ*
`.trim())
}

handler.tags = ['info']
handler.help = ['rules']
handler.command = /^(rules(bot)?|rule)$/i

export default handler