let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
*List daftar cmd*
\`\`\`
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(Terkunci) ${key}` : key} : ${value.text}`).join('\n')}
\`\`\`
`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    }, fcon)
}


handler.help = ['listcmd']
handler.tags = ['database', 'premium']
handler.command = ['listcmd']

export default handler
