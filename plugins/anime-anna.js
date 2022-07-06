import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.xyz/api/anime/anna?apikey=5Cd8U3tG'
        let anna = '• Tap Animek\nuntuk menampilkan menu animek'
	conn.sendButton(m.chat, '\n*Nih wibukk*\n_*Join gc bot di atas link nya*_\n', anna, await(await fetch(url)).buffer(), [['✨ Animek','.animek'], ['✧ Next', `.${command}`]],m, fakeig)
}
handler.command = /^(anna)$/i
handler.tags = ['anime']
handler.help = ['anna']
handler.premium = false

export default handler
