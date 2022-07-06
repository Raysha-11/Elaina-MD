const xpperlimit = 1
import fs from 'fs'

let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^nabung/i, '')
  let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: sgh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('kamu belum mempuyai atm !')
  if (user.bank > user.fullatm) return m.reply('Uang dibankmu sudah penuh!')
  if (count > user.fullatm - user.bank) return m.reply('Uangnya ga muat dibank')
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `Sukses menabung sebesar ${count} Money 💹`, m, frep)
  } else conn.reply(m.chat, `[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`, m, frep)
}
handler.help = ['nabung <jumlah>']
handler.tags = ['rpg']
handler.command = /^nabung([0-9]+)|nabung|nabungall$/i

export default handler
