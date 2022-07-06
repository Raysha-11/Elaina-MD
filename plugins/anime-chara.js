import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan Nama Characternya!\nContoh: #chara Rimuru`
  try {
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, mal_id, type } = json.results[0]
let charaingfo = `🔑 Id Character: ${mal_id}
💬 Name: ${name}
💭 Nickname: ${alternative_names}
👤 Character Type: ${type === undefined ? 'Default' : type}`

  conn.sendHydrated(m.chat, `*ᴄʜᴀʀᴀ ɪɴꜰᴏ*`, charaingfo, image_url, url, '🌎 ʟ ɪ ɴ ᴋ', null, null, [['Menu','.menu'],['Sewa','.sewabot'],[null,null]], m,)
 } catch {
  m.reply('Tidak Ditemukan... :(\nMungkin Coba kata kunci lain?')
 }
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.limit = false
handler.command = /^(character|chara)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
export default handler 
