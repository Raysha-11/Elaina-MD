import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/mikasa?apikey=ApiRevita'
        let mikasa = '• Tap Animek\nuntuk menampilkan menu anime'
	conn.sendButton(m.chat, '\n*Nih wibukk*\n_*Join gc bot di atas link nya*_\n', mikasa, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m, fakeig)
}
handler.command = /^(mikasa)$/i
handler.tags = ['anime']
handler.help = ['mikasa']
handler.premium = false

export default handler
