export function before(m) {
    let user = global.db.data.users[m.sender]
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
    if (user.afk > -1) {
        conn.sendButtonDoc(m.chat,`
  Kamu berhenti AFK${user.afkReason ? ' setelah \n' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `,`${pickRandom(global.kata2)}`,'Hai Bang','Ya',m,fakeig)
        user.afk = -1
        user.afkReason = ''
    }
    
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        conn.sendButtonDoc(m.chat,`
  Jangan tag dia!
  Dia sedang AFK ${reason ? 'dengan alasan \n' + reason : 'tanpa alasan'}
  Selama ${(new Date - afkTime).toTimeString()}
  `,`${pickRandom(global.kata2)}`,'Maaf Bang','Ya',m,fakeig)
    }
    return true
}