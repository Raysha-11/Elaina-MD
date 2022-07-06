import axios from "axios"
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.wm, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'cecan') {
let haha = await conn.getFile(`https://sekha.me/api/wallpaper/cecan?apikey=apirey`)
await conn.sendButton(m.chat, `_*Nih, cantik ga?*_`.trim(), wm, haha.data, [[' Lagi bang ', `/${command}`]], m, fdoc)}
if (command == 'cecan2') {
let haha = await conn.getFile(`https://sekha.me/api/wallpaper/cecan2?apikey=apirey`)
await conn.sendButton(m.chat, `_*Nih, cantik ga?*_`.trim(), wm, haha.data, [[' Lagi bang ', `/${command}`]], m, fdoc)}
if (command == 'cecan3') {
let haha = await conn.getFile(`https://sekha.me/api/wallpaper/cecan3?apikey=apirey`)
await conn.sendButton(m.chat, `_*Nih, cantik ga?*_`.trim(), wm, haha.data, [[' Lagi bang ', `/${command}`]], m, fdoc)}
if (command == 'cecan4') {
let haha = await conn.getFile(`https://sekha.me/api/wallpaper/cecan4?apikey=apirey`)
await conn.sendButton(m.chat, `_*Nih, cantik ga?*_`.trim(), wm, haha.data, [[' Lagi bang ', `/${command}`]], m, fdoc)}
if (command == 'cecan5') {
let haha = await conn.getFile(`https://sekha.me/api/wallpaper/cecan5?apikey=apirey`)
await conn.sendButton(m.chat, `_*Nih, cantik ga?*_`.trim(), wm, haha.data, [[' Lagi bang ', `/${command}`]], m, fdoc)}
}

handler.command = handler.help = ['cecan', 'cecan2', 'cecan3', 'cecan4', 'cecan5']
handler.tags = ['image']
export default handler
