import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/elaina?apikey=ApiRevita'
        let elaina = '• Tap next\nuntuk menampilkan image selanjutnya'
	conn.sendButton(m.chat, '*Nih kak >//<*\n_*Join gc bot di atas link nya*_', elaina, await(await fetch(url)).buffer(), [[' Next ',`.${command}`]],m, fakeig)
}
handler.command = /^(elaina)$/i
handler.tags = ['anime']
handler.help = ['elaina']
handler.premium = false
handler.private = true 

export default handler
