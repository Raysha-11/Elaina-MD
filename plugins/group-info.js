let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let text = `*「 Group Information 」*\n
*ID:* 
${groupMetadata.id}

*Name:* 
${groupMetadata.subject}

*Total Members:*
${participants.length} Members

*Group Owner:* 
@${owner.split('@')[0]}

*Group Admins:*
${listAdmin}

*Description:* 
${groupMetadata.desc?.toString() || 'unknown'}

*Group Settings:*
${isBanned ? '✅' : 'X'} _Banned_
${welcome ? '✅' : 'X'} _Welcome_
${detect ? '✅' : 'X'} _Detect_
${del ? 'X' : '✅'} _Anti Delete_
${antiLink ? '✅' : 'X'} _Anti Link_

_*Message Settings:*_
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
    conn.sendButton(m.chat, text, titlebot, pp, [['Menu', '.menu']], m, false, { mentions: [...groupAdmins.map(v => v.id), owner]}, fkon)
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler
