import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api-reysekha.herokuapp.com/api/wallpaper/asuna?apikey=apirey'
        let asuna = '• Tap next\nuntuk menampilkan image selanjutnya'
	conn.sendButton(m.chat, '*Nih kak >//<*\n_*Join gc bot di atas link nya*_', asuna, await(await fetch(url)).buffer(), [[' Next ', `.${command}`]],m, fakeig)
}
handler.command = /^(asuna)$/i
handler.tags = ['anime']
handler.help = ['asuna']
handler.premium = false

export default handler
