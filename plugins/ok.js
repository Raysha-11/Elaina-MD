let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "sticker by", author: "Agungx" })
}

handler.customPrefix = /^(ok)$/i
handler.command = /^(ok)$/i

module.exports = handler
