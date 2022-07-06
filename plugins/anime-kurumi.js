import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/kurumi?apikey=ApiRevita'
        let kurumi = '• Tap next\nuntuk menampilkan image selanjutnya'
	conn.sendButton(m.chat, '*Nih kak >//<*\n_*Join gc bot di atas link nya*_', kurumi, await(await fetch(url)).buffer(), [[' Next ',`.${command}`]],m, fakeig)
}
handler.command = /^(kurumi)$/i
handler.tags = ['anime']
handler.help = ['kurumi']
handler.premium = false
handler.private = true

export default handler
