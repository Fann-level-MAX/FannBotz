import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
before: ` `.trimStart(),
header: '\n┲═━┈━┈༓ *%category* ',
body: `┠➨ %cmd %isPremium %islimit`,
footer: `┺═┈༓`,
after: ` `,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let emot = `${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database","quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': 'Main',
'game': 'Game',
'rpg': 'RPG Games',
'xp': 'Exp & Limit',
'sticker': 'Sticker',
'kerang': 'Kerang Ajaib',
'quotes': 'Quotes',
'fun': 'Fun',
'anime': 'Anime',
'admin': 'Admin',
'group': 'Group',
'vote': 'Voting',
'absen': 'Absen',
'premium': 'Premium',
'anonymous': 'Anonymous Chat',
'internet': 'Internet',
'downloader': 'Downloader',
'tools': 'Tools',
'nulis': 'MagerNulis & Logo',
'audio': 'Audio',
'maker': 'Maker',
'berita': 'Berita',
'database': 'Database',
'quran': 'Al Qur\'an',
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced',
'info': 'Info',
'': 'No Category',
}
if (teks == 'game') tags = {
'game': 'Game'
}
if (teks == 'anime') tags = {
'anime': 'Anime'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'rpg') tags = {
'rpg': 'Rpg'
}
if (teks == 'edukasi') tags = {
'edukasi': 'Edukasi'
}
if (teks == 'news') tags = {
'news': 'News'
}
if (teks == 'random') tags = {
'random': 'Random'
}
if (teks == 'xp') tags = {
'xp': 'Exp & Limit'
}
if (teks == 'stiker') tags = {
'sticker': 'Stiker'
}
if (teks == 'kerangajaib') tags = {
'kerang': 'Kerang Ajaib'
}
if (teks == 'quotes') tags = {
'quotes': 'Quotes'
}
if (teks == 'berita') tags = {
'berita': 'Berita'
}
if (teks == 'admin') tags = {
'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
'group': 'Grup'
}
if (teks == 'group') tags = {
'group': 'Group'
}
if (teks == 'premium') tags = {
'premium': 'Premium'
}
if (teks == 'internet') tags = {
'internet': 'Internet'
}
if (teks == 'anonymous') tags = {
'anonymous': 'Anonymous Chat'
}
if (teks == 'nulis') tags = {
'nulis': 'Nulis',
'maker': 'Maker'
}
if (teks == 'downloader') tags = {
'downloader': 'Downloader'
}
if (teks == 'tools') tags = {
'tools': 'Tools'
}
if (teks == 'fun') tags = {
'fun': 'Fun'
}
if (teks == 'database') tags = {
'database': 'Database'
}
if (teks == 'vote') tags = {
'vote': 'Voting',
}
if (teks == 'absen') tags = {
'absen': 'Absen'
}
if (teks == 'quran') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'audio') tags = {
'audio': 'Audio'
}
if (teks == 'jadibot') tags = {
'jadibot': 'Jadi Bot'
}
if (teks == 'info') tags = {
'info': 'Info'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced'
}
 if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'nocategory') tags = {
'': 'No Category'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [{
title: `${htki} MAIN ${htka}`,
rows: [
{title: `${emot} SPEED BOT`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
{title: `${emot} OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
/*{title: `📔 ${emot} SCRIPT BOT`, rowId: ".sc", description: `Source Code ${namebot}`},*/
]
},
{
title: `${htki} MENU ${htka}`,
rows: [
{title: `${emot} All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
{title: `${emot} Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
{title: `${emot} Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
{title: `${emot} Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
{title: `${emot} Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
{title: `${emot} Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
{title: `${emot} Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},
{title: `${emot} Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
{title: `${emot} Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
{title: `${emot} Premium`, rowId: ".? premium", description: "Only premium Users"},
{title: `${emot} Anonymous Chats`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
{title: `${emot} Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
{title: `${emot} Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
{title: `${emot} Berita`, rowId: ".? berita", description: "Cari berita terupdate"},
{title: `${emot} Downloaders`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
{title: `${emot} Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
{title: `${emot} Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
{title: `${emot} Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
{title: `${emot} Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
{title: `${emot} Group`, rowId: ".? group", description: "Only Groups"},
{title: `${emot} Admin`, rowId: ".? admin", description: "Only Admin Group"},
{title: `${emot} Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
{title: `${emot} Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
{title: `${emot} Info`, rowId: ".? info", description: "Info info BOT"},
{title: `${emot} Owner`, rowId: ".? owner", description: "Owner Only!"},
{title: `\n${emot} No Category`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
] },
]
let psan = global.kata2[Math.floor(global.kata2.length * Math.random())]
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpg'), thumbnail: fs.readFileSync('./media/thumb.jpg'),sendEphemeral: true}}}

let dd1 = moment.tz('Asia/Jakarta').format('HH')
let dd2 = moment.tz('Asia/Jakarta').format('mm')
let dd = new Date(new Date + 3600000)
let llocale = 'id'
let wweek1 = dd.toLocaleDateString(llocale, { weekday: 'long' })
let ddate1 = dd.toLocaleDateString(llocale, {
day: 'numeric'
})
let ddate2 = dd.toLocaleDateString(llocale, {
month: 'long',
year: 'numeric'
})
let tek = `─┲═━━┈┈━━ [ LIST MENU ]
┲┛ *${ucapan()}*
┣──────────────┈
┣──━「 *USER INFO* 」
┣┈• *ɴᴀᴍᴇ:* @${m.sender.split`@`[0]}
┣┈• *ʀᴇɢɪsᴛᴇʀᴇᴅ:* ${usrs.registered = 1 ? 'Yes': 'No'}
┣┈• *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
┣┈• *ʜᴀʀɪ:* ${wweek1}
┣┈• *ᴛᴀɴɢɢᴀʟ:* ${ddate1}, ${ddate2}
┣┈• *ᴡᴀᴋᴛᴜ:* ${dd1}:${dd2} _*WIB*_
┺───┈✥`
const listMessage = {
text: tek,
footer: '',
mentions: await conn.parseMention(tek),
title: ``,
buttonText: `CLICK HERE ⎙`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
 /**************************** TIME *********************/
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh}:${wibm} _*WIB*_`
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week1 = d.toLocaleDateString(locale, { weekday: 'long' })
let week = `${week1}\n⫹⫺ 𝗧𝗮𝗻𝗴𝗴𝗮𝗹 : `
let date1 = d.toLocaleDateString(locale, {
day: 'numeric'
})
let date2 = d.toLocaleDateString(locale, {
month: 'long',
year: 'numeric'
})
let date = `${date1}, ` + `${date2}`
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

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
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

//------------------ DOCUMENT
const _0xcdd4a4=_0x4f24;(function(_0x2bcefa,_0x4d88ce){const _0x5c4dba=_0x4f24,_0x205702=_0x2bcefa();while(!![]){try{const _0x33e7d8=-parseInt(_0x5c4dba(0x19c))/0x1+parseInt(_0x5c4dba(0x1a4))/0x2+-parseInt(_0x5c4dba(0x196))/0x3*(parseInt(_0x5c4dba(0x190))/0x4)+parseInt(_0x5c4dba(0x19e))/0x5+parseInt(_0x5c4dba(0x1a1))/0x6+-parseInt(_0x5c4dba(0x18f))/0x7+-parseInt(_0x5c4dba(0x18e))/0x8*(-parseInt(_0x5c4dba(0x19a))/0x9);if(_0x33e7d8===_0x4d88ce)break;else _0x205702['push'](_0x205702['shift']());}catch(_0xf8bf85){_0x205702['push'](_0x205702['shift']());}}}(_0x428b,0x217e1));function _0x4f24(_0xa43523,_0x129aaa){const _0x428b53=_0x428b();return _0x4f24=function(_0x4f24c5,_0x1efd25){_0x4f24c5=_0x4f24c5-0x188;let _0x40aa2e=_0x428b53[_0x4f24c5];return _0x40aa2e;},_0x4f24(_0xa43523,_0x129aaa);}let almenu=_0xcdd4a4(0x1a9)+global['namebot']+_0xcdd4a4(0x1ab)+mode+_0xcdd4a4(0x1aa)+platform+'\x0a┇┃\x20➯\x20*Tʏᴘᴇ:*\x20Node.Js\x0a┃║\x20➯\x20*Dᴀᴛᴀʙᴀsᴇ:*\x20'+rtotalreg+_0xcdd4a4(0x1ad)+totalreg+_0xcdd4a4(0x18b)+name+_0xcdd4a4(0x19d)+tag+_0xcdd4a4(0x1a6)+prems+_0xcdd4a4(0x18c)+money+_0xcdd4a4(0x193)+limit+_0xcdd4a4(0x188)+level+_0xcdd4a4(0x1ae)+exp+_0xcdd4a4(0x1a5)+role+_0xcdd4a4(0x192)+readMore,nomorwa='0',nomorowm1=_0xcdd4a4(0x18d),d1=_0xcdd4a4(0x197),d2='application/vnd.openxmlformats-officedocument.wordprocessingml.document',d3='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',d4=_0xcdd4a4(0x199),d5=_0xcdd4a4(0x1a7),td=''+pickRandom([d1,d2,d3,d4,d5]),ᴛᴇs=''[_0xcdd4a4(0x1a8)]`@`[0x0]+_0xcdd4a4(0x189)[_0xcdd4a4(0x1a8)]`@`[0x0]+_0xcdd4a4(0x1a2)+week+'\x20'+date+_0xcdd4a4(0x1a3)+wktuwib,thummb=fs[_0xcdd4a4(0x18a)](_0xcdd4a4(0x195)),menuunya=_0xcdd4a4(0x194);function _0x428b(){const _0xbcaee4=['Oᴡɴᴇʀ','\x0a└──┈┈⟢\x0a','\x0a┆𝙻𝚒𝚖𝚒𝚝\x20:\x20','halo','./media/dash.jpg','90183FRcCVL','application/vnd.openxmlformats-officedocument.presentationml.presentation','\x0aGW\x20SANGE\x20SAMA ANIME','application/pdf','315lplKwu','.owner','213337iqdLzF','\x0a┆Tᴀɢ\x20:\x20','700670GwRSVE','*\x20]\x0a┃║\x20➯\x20*Uᴘᴛɪᴍᴇ:*\x20','huuu','1041330sEhSga','\x0a⫹⫺\x20𝗛𝗮𝗿𝗶 :\x20','\x0a⫹⫺\x20𝗪𝗮𝗸𝘁𝘂 :\x20','33032nQbsHg','\x0a┆𝚁𝚘𝚕𝚎\x20\x20\x20:\x20','\x0a┆Sᴛᴀᴛᴜs\x20:\x20','text/rtf','split','                \x20❲\x20*Iɴғᴏ\x20Bᴏᴛ*\x20❳\x0a┃╔━─⟢⟨\x20','\x0a┃║\x20➯\x20*Pʟᴀᴛғᴏʀᴍ:*\x20','\x20⟩⟣\x0a┇┃\x20➯\x20*Mᴏᴅᴇ:*\x20','send3ButtonLoc','\x20dari\x20','\x0a┆𝙴𝚡𝚙\x20:\x20','\x0a┆𝙻𝚎𝚟𝚎𝚕\x20:\x20','\x0a','readFileSync','\x0a┇❏\x0a┗━━━◩\x0a┍━─┈❏➢\x20*Pʀᴏғɪʟᴇ*\x0a┆𝙽𝚊𝚖𝚎\x20:\x20','\x0a┆Mᴏɴᴇʏ\x20:\x20','','12272ASXMpa','23184uOucBR','4hHdPhr'];_0x428b=function(){return _0xbcaee4;};return _0x428b();}conn[_0xcdd4a4(0x1ac)](m['chat'],thummb,almenu,readMore+text+(''+ᴛᴇs)+readMore,'SᴇᴡᴀBᴏᴛ','.sewa',_0xcdd4a4(0x191),_0xcdd4a4(0x19b),_0xcdd4a4(0x198),_0xcdd4a4(0x1a0),m);

} catch (e) {
conn.reply(m.chat, 'Maaf, menu sedang error', m)
throw e
}
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(tesm|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' : ', m, ' : ', s, ' 🕐 '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari, Kok Belum Tidur Kak?"
if (time >= 4) {
res = "Pagi Lord"
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
