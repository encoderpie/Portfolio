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

async function getData(id) {
  try {
    const response = await axios.get(`https://discord.com/api/v10/users/${id}`, {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
      }
    })
    return {data: response.data, guild: false, user: true}
  } catch (error) {
    try {
      const response_preview = await axios.get(`https://discord.com/api/v10/guilds/${id}/preview`, {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
      })
      const response_channels = await axios.get(`https://discord.com/api/v10/guilds/${id}/channels`, {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
      })
      return {data: {preview: response_preview.data, channels: response_channels.data}, guild: true, user: false}
    } catch (error) {
      return {data: null, guild: null, user: null}
    }
  }
}

export default async function LookUpApi(req, res) {
  const body = req.body
  const id = body.id
  const dataResponse = await getData(id)
  //console.log(dataResponse)
  if (dataResponse.user) {
    const userData = dataResponse.data// User general infos
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
      user: true,
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
  } else if (dataResponse.guild) {
    const guildData = dataResponse.data.preview
    const guildChannelsData = dataResponse.data.channels

    const id = guildData.id
    const icon_id = guildData.icon
    const splash_id = guildData.splash
    
    const responseGuildData = {
      id,
      name: guildData.name,
      icon_url: `https://cdn.discordapp.com/icons/${id}/${icon_id}.png?size=4096`,
      splash_url: `https://cdn.discordapp.com/splashes/${id}/${splash_id}.png?size=4096`,
      description: guildData.description,
      member_count: guildData.approximate_member_count,
      presence_count: guildData.approximate_presence_count,
      emojis: guildData.emojis,
      stickers: guildData.stickers,
    }

    //console.log('CHANNELS::::')
    console.log(guildData.stickers)

    //console.log(guildChannelsData)
    const responseGuildChannelsData = {
      channels: guildChannelsData,
      channels_length: guildChannelsData.length
    }
    res.status(200).json({guildData: responseGuildData, channelsData: responseGuildChannelsData})
  } else {
    res.status(200).json({error: true})
  }
}