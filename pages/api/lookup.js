import axios from "axios"

const badgesList = {
  discord_employee: {
    id: 1 << 0,
    title: 'Discord Employee',
    format: 'svg'
  },
  partnered_server_owner: {
    id: 1 << 1,
    title: 'Partnered Server Owner',
    format: 'svg'
  },
  hypesquad_events: {
    id: 1 << 2,
    title: 'HypeSquad Events',
    format: 'svg'
  },
  bug_hunter_level_1: {
    id: 1 << 3,
    title: 'Bug Hunter Level 1',
    format: 'svg'
  },
  house_bravery: {
    id: 1 << 6,
    title: 'House Bravery',
    format: 'svg'
  },
  house_brilliance: {
    id: 1 << 7,
    title: 'House Brilliance',
    format: 'svg'
  },
  house_balance: {
    id: 1 << 8,
    title: 'House Balance',
    format: 'svg'
  },
  early_supporter: {
    id: 1 << 9,
    title: 'Early Supporter',
    format: 'svg'
  },
  bug_hunter_level_2: {
    id: 1 << 14,
    title: 'Bug Hunter Level 2',
    format: 'svg'
  },
  tick: {
    id: 1 << 16,
    title: 'Verified Bot',
    format: 'svg'
  },
  early_verified_bot_developer: {
    id: 1 << 17,
    title: 'Early Verified Bot Developer',
    format: 'svg'
  },
  discord_certified_moderator: {
    id: 1 << 18,
    title: 'Discord Certified Moderator',
    format: 'svg'
  },
}

async function getUser(id) {
  try {
    const response = await axios.get(`https://discord.com/api/v10/users/${id}`, {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
      }
    })
    return response.data
  } catch (error) {
    return null
  }
}

export default async function LookUpApi(req, res) {
  const body = req.body
  const id = body.id
  const userData = await getUser(id)
  if (userData == null) {
    return res.status(400).json({not_exist: 'error'})
  } else {  
    // User general infos
    const username      = userData.username
    const discriminator = userData.discriminator
    const avatar_url    = userData.avatar ? `https://cdn.discordapp.com/avatars/${id}/${userData.avatar}?size=4096` : null
    const banner_url    = userData.banner ? `https://cdn.discordapp.com/banners/${id}/${userData.banner}?size=4096` : null
    const banner_color  = userData.banner_color ? userData.banner_color : null
  
    // Badges
    let badges = {}
    for (const badge in badgesList) {
      if ((userData.public_flags & badgesList[badge]['id']) == badgesList[badge]['id']) {
        badges = {
          ...badges,
          badge: {
            src: badge + '.' + badgesList[badge]['format'],
            title: badgesList[badge]['title']
          }
        }
      }
    }
    
    // Creation date
    const timestamp         = ((id / 4194304) + 1420070400000)
    const creation_date      = new Date(timestamp).toUTCString()
    const timestamp_round   = Math.round(new Date(timestamp).getTime() / 1000)
    
    const responseUserData = {
      id,
      username,
      discriminator,
      avatar_url,
      banner_url,
      banner_color,
      badges: [badges],
      public_flags: userData.public_flags,
      bot: userData.bot ? true : false,
      timestamp: timestamp_round,
      creation_date
    }
    console.log(responseUserData)
    res.status(200).json(responseUserData)
  }
}