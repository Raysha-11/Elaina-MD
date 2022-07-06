let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `${dmenub} List Options`,
	rows: [
	    {title: "Welcome", rowId: `${usedPrefix + command} welcome`},
	    {title: "Delete", rowId: `${usedPrefix + command} delete`},
	    {title: "Public", rowId: `${usedPrefix + command} public`},
	{title: "Simi", rowId: `${usedPrefix + command} simi`},
	{title: "Antilink", rowId: `${usedPrefix + command} antilink`},
	{title: "Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "Detect", rowId: `${usedPrefix + command} detect`},
	{title: "AntiVirtex", rowId: `${usedPrefix + command} antivirtex`},
	{title: "Autoread", rowId: `${usedPrefix + command} autoread`},
	{title: "PcOnly", rowId: `${usedPrefix + command} pconly`},
	{title: "GcOnly", rowId: `${usedPrefix + command} gconly`},
    	]
    },
]

const listMessage = {
  text: ' ',
  footer: wm,
  title: `_Pilih options nya di bawah ini_\n_*Elaina-MD*_`,
  buttonText: "Click Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isEnable
    //   break
    // case 'document':
    //   chat.useDocument = isEnable
    //   break
        case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'stiker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.sendButton(m.chat, `*Options*
_*• Type :*_ _${type}_
_*• Status :*_ _Sukses_
_*• Options :*_ _${isEnable ? 'Enable' : 'Disable'}_
_*• For :*_ _${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}_

_*Successfully*_ ✨`,wm, null, [[`${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['🎀 Menu', '.menu']],m, fakeig)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
