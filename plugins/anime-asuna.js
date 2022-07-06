import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/asuna?apikey=ApiRevita'
        let asuna = '• Tap Animek\nuntuk menampilkan menu animek'
	conn.sendButton(m.chat, '*Nih wibukk*\n_*Join gc bot di atas link nya*_', asuna, await(await fetch(url)).buffer(), [[' Next ', `.${command}`]],m, fakeig)
}
handler.command = /^(asuna)$/i
handler.tags = ['anime']
handler.help = ['asuna']
handler.premium = false

export default handler
