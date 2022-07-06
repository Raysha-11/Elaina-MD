import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/chitoge?apikey=ApiRevita'
        let chitoge = '• Tap next\nuntuk menampilkan image selanjutnya'
	conn.sendButton(m.chat, '*Nih kak >//<*\n_*Join gc bot di atas link nya*_', chitoge, await(await fetch(url)).buffer(), [[' Next ',`.${command}`]],m, fakeig)
}
handler.command = /^(chitoge)$/i
handler.tags = ['anime']
handler.help = ['chitoge']
handler.premium = false

export default handler
