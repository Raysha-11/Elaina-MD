import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/kotori?apikey=ApiRevita'
        let kotori = '• Tap next\nuntuk menampilkan image selanjutnya'
	conn.sendButton(m.chat, '*Nih kak >//<*\n_*Join gc bot di atas link nya*_', kotori, await(await fetch(url)).buffer(), [[' Next ',`.${command}`]],m, fakeig)
}
handler.command = /^(kotori)$/i
handler.tags = ['anime']
handler.help = ['kotori']
handler.premium = false
handler.private = true 

export default handler
