import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/mikasa?apikey=ApiRevita'
        let mikasa = '• Tap next\nuntuk menampilkan image selanjutnya'
	conn.sendButton(m.chat, '*Nih kak >//<*\n_*Join gc bot di atas link nya*_', mikasa, await(await fetch(url)).buffer(), [[' Nex t', `.${command}`]],m, fakeig)
}
handler.command = /^(mikasa)$/i
handler.tags = ['anime']
handler.help = ['mikasa']
handler.premium = false

export default handler
