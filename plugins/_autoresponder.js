import fs from 'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  -  - - - - - - */

let regj = /(GW SANGE SAMA ANIME|GW GAY)/i
    let isJadibot = regj.exec(m.text)
    let jadbot = ['🤨']
let jadibot = jadbot[Math.floor(Math.random() * jadbot.length)]
    if (isJadibot && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${jadibot}`,
          key: m.key,
        }})
   setTimeout(() => {
   m.reply('🤨📸')
    }, 1000)
    }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */

let lov1 = /^(I love you|love you|mwah|love|kiss|luv?y??)$/i
    let islov2 = lov1.exec(m.text)
    let lov3 = ['😘','🥰','😍','❤️']
let lov4 = lov3[Math.floor(Math.random() * lov3.length)]
    if (islov2 && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${lov4}`,
          key: m.key,
        }})
   setTimeout(() => {
   m.reply(`${lov4}`)
    }, 1000)
    }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */

let sal1 = /(Assalamualaikum|As?alamu?alaikum)/i
    let issal2 = sal1.exec(m.text)
    let sal3 = ['😇']
let sal4 = sal3[Math.floor(Math.random() * sal3.length)]
    if (issal2 && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${sal4}`,
          key: m.key,
        }})
   setTimeout(() => {
   m.reply(`${pickRandom([`Walaikumsalam`,`Wa'alaikum salam`])}`)
    }, 1000)
    }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */

let blok1 = "lu goblok anjing"
let blok2 = "yg goblok itu elu"
let blok3 = "goblok ngatain goblok"
let blok4 = "dasar goblok"
let blok5 = "ga gitu juga goblok"
let blok6 = "blok goblok"
let blok7 = "sadar diri goblok anjing tolol asu kimak"
let Sipaling = `${pickRandom([blok1,blok2,blok3,blok4,blok5,blok6,blok7])}`
let Gob1 = /(goblok|gblk|gblok|goblk|blok|blk|blog|goblog)/i
    let isGob2 = Gob1.exec(m.text)
    let Gob3 = ['🗿️']
let Gob4 = Gob3[Math.floor(Math.random() * Gob3.length)]
    if (isGob2 && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${Gob4}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `${Sipaling}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */

    let P1 = /^(p)$/i
    let isP2 = P1.exec(m.text)
    let P3 = ['🐦️']
let P4 = P3[Math.floor(Math.random() * P3.length)]
    if (isP2 && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${P4}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.sendButton(m.chat, ` P P P mulu, Salam kek `, pickRandom(global.kata2), null, [`Assalamualaikum`, 'Assalamualaikum'],m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */

let tullisans = "Menurut perspektif saya pribadi, ketika saya menjawab pertanyaan atau chat dengan *gpp* ada beberapa hal yang mungkin terjadi\n\n- Tidak sedang ingin / belum ingin membahas permasalahan yang saya hadapi. Jenuh\n- Bosan dengan pembicaraan, biasanya karena saya ingin segera mengakhiri obrolan\n- Ngambek. Sedang dalam posisi banyak maunya dan ingin dimengerti tanpa harus berkata kata. Iya ini memang alasan konyol, Karena teman ataupun pasangan kita bukan cenayang\n\n\nTerlepas dari semua itu, ketika Anda memiliki kedekatan dengan teman wanita\nEntah itu teman, pacar atau mungkin adik dan ibu, lalu mereka melontarkan kata *gpp* cobalah untuk menelaah sejenak kondisi emosi mereka\nJika Anda mengenalnya dengan baik Anda pasti bisa setidaknya memberikan ketenangan dan kenyamanan\nBiarkan wanita merasa nyaman dan tenang, lalu dia akan membuka sendiri apa yang menjadi keresahan hatinya"

    let Gp1 = /^(gpp)$/i
    let isGp2 = Gp1.exec(m.text)
    let Gp3 = ['🤷‍♂️']
    let Gp4 = Gp3[Math.floor(Math.random() * Gp3.lenght)]
    if (isGp2 && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
            text: `${Gp4}`,
            key: m.key,
            }})
    setTimeout(() => {
        conn.reply(m.chat, `${tullisans}`, m)
    }, 1000)
    }

}

handler.limit = false
export default handler
