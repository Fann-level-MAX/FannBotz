import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//tim
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `Jam:${wibh} Menit:${wibm} Detik:${wibs}`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric'
    })
    let date1 = d.toLocaleDateString(locale, {
      month: 'long',
      year: 'numeric'
    })

    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./media/thumb.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //kata
let kata = `${pickRandom(global.kata2)}`
    
let nowaa = '0'
let nogww = '6285713110263'
let nogwww = `@${nomorown1.split`@`[0]}`
let nowa = `${nowaa.split`@`[0]}@s.whatsapp.net`
let nogw = `${nogww.split`@`[0]}@s.whatsapp.net`
let but1 = ('All Menu') 
let id1 = '.? all'
let but2 = ('List Menu') 
let id2 = '.tesm'
let knnt = `
*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』* 

⁛ BOT(BUILD-OPERATE-TRANSFER) adalah program komputer yang dijalankan di Whatsapp yang khusus dibuat untuk melakukan pekerjaan-pekerjaan otomatis, BOT Whatsapp dirancang sedemikian rupa sehingga dapat digunakan dengan nyaman, dan kemungkinan memiliki sedikit bug, Adanya fitur dari bot WhatsApp ini tentu akan membantu anda untuk bersenang senang, dll`
let tes = `⫹⫺ 𝗛𝗮𝗿𝗶 : ${week}\n⫹⫺ 𝗧𝗮𝗻𝗴𝗴𝗮𝗹 : ${date}, ${date1}\n⫹⫺ 𝗪𝗮𝗸𝘁𝘂 : ${wibh}:${wibm} _*WIB*_`

await conn.sendButton(m.chat, `*${ucapan()}*`, tes, giflogo, [[but1,id1],[but2,id2]], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: 'FannBotz',
                        body: `${pickRandom(global.kata2)}`,          previewType: 0,
                        thumbnail: fs.readFileSync("./media/thumb.jpg"),
                        sourceUrl: sig
                      }}
})

/*
await conn.send3ButtonImg(m.chat, await genProfile(conn, m), konten, tes, but1, id1, but2, id2, but3, id3, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: '',
    mediaType: 2, 
    description: sgc,
    title: "FannBotz",
    body: kata,
    thumbnail: fs.readFileSync('./media/thumb.jpg'),
    sourceUrl: sgc
     }}
  })*/
  
    let Men1 = /^(.menu|.help)$/i
    let isMen2 = Men1.exec(m.text)
    let Men3 = ['👋']
let Men4 = Men3[Math.floor(Math.random() * Men3.length)]
    if (isMen2 && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
            text: `${Men4}`,
            key: m.key,
        }})
    setTimeout(() => {}, 1000)}
  
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
handler.register = false

export default handler

//----------- FUNCTION -------

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari, Kok Belum Tidur Kak?"
  if (time >= 4) {
    res = "Pagi Kak"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak"
  }
  if (time >= 18) {
    res = "Malam Kak"
  }
  return res
}

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night Rider')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}

async function genProfile(conn, m) {
  let font = await jimp.loadFont('./media/names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}