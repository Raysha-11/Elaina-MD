import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.xyz/api/anime/anna?apikey=5Cd8U3tG'
        let anna = '• Tap next\nuntuk menampilkan image selanjutnya'
	conn.sendButton(m.chat, '*Nih kak >//<*\n_*Join gc bot di atas link nya*_', anna, await(await fetch(url)).buffer(), [[' Next ', `.${command}`]],m, fakeig)
}
handler.command = /^(anna)$/i
handler.tags = ['anime']
handler.help = ['anna']
handler.premium = false
handler.private = true

export default handler
