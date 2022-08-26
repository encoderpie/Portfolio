import React, {useState} from 'react'
import Head from 'next/head'
import axios from 'axios'
import Layout from '../../components/layout'
import Link from 'next/link'
export default function LookUp() {
  const [id, setID] = useState('')

  const [data, setData] = useState(null)

  const submitForm = async (e) => {
    e.preventDefault()
    
    if (id != data.id) {
      const res = await axios.post('../api/lookup', {id})
      if (res.data) setData(res.data)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Encoderpie - Discord Lookup</title>
      </Head>
      <div className="w-full justify-center flex">
        <div className="bg-gray-900 rounded-xl mt-3 p-5 md:p-6 h-auto shadow-2xl w-96">
          <div className="mb-4 pb-3 text-3xl border-b-2 border-gray-800 flex">
            <div className="text-red-500">Dis</div>
            <div className="text-cyan-400 mr-1">cord</div>
            <div className="text-red-500">Look</div>
            <div className="text-gray-700">up</div>
          </div>
          <div className="mt-1 text-xl text-gray-200">
            <form onSubmit={submitForm}>
              <span className="block text-base font-medium mb-1">User ID:</span>
              <input
                required
                placeholder="583353336519065601"
                type="text"
                onChange={(e) => setID(e.target.value)}
                value={id}
                minLength={15}
                maxLength={20}
                className="peer w-full rounded-md bg-slate-800 focus:outline-none focus:border-cyan-600 px-3 py-1.5 text-base border border-slate-800 invalid:border-pink-600"
              />
              <p className="mt-1 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid discord user id.
              </p>
              <button
                type="submit"
                className="mt-2 float-right peer-invalid:disabled peer-invalid:opacity-50 peer-invalid:cursor-default rounded-md bg-blue-700 text-base hover:bg-blue-800 px-3 py-1.5"
              >
                Lookup
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex">
        {data?.id && ( // if a user is brought
          <div className="bg-gray-900 w-96 rounded-xl mt-3 pb-1 h-auto shadow-2xl">
            <div className="w-full">
              {data.banner_url ? (
                <img
                  src={data.banner_url}
                  className="object-cover rounded-t-xl"
                  width="100%"
                />
              ) : (
                <div className="banner_color object-cover rounded-t-xl w-full h-16"></div>
              )}
              <div className="mx-4 my-2 pb-3 border-b border-gray-800 text-2xl">
                <div className="flex">
                  <div className="w-full">
                    <img
                      src={data.avatar_url ? data.avatar_url : '/tools/default_avatar.png'}
                      className="avatar border-4 border-gray-900 bg-gray-900 rounded-full"
                      width="95"
                    />
                  </div>
                  <div className="w-full">
                    <div className="float-right flex">
                      {data.banner_url && (
                        <img
                          src="/tools/discord_nitro.svg"
                          className="w-8 h-8 cursor-pointer hover:bg-gray-800 p-0.5 rounded"
                          title="Nitro"
                        />
                      )}
                      {data.badges.map(
                        (x) =>
                          !data.bot &&
                          x.badge && (
                            <img
                              src={`/tools/${x.badge.src}`}
                              className="w-8 h-8 cursor-pointer hover:bg-gray-800 rounded"
                              title={`${x.badge.title}`}
                            />
                          )
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex font-bold mt-2 w-50">
                  {data.username}
                  <div className="opacity-75">#{data.discriminator}</div>
                  {data.badges.map(
                    (x) =>
                      data.bot &&
                      x.badge && (
                        <div className="w-50 pt-1 pl-2">
                          <div className="bg-blue-500 rounded pr-2 pl-1.5 py-0.5 w-max text-sm flex">
                            {x.badge?.title == 'Verified Bot' && (
                              <img src="tick.svg" className="w-4 h-5" />
                            )}
                            <div className="pl-0.5">BOT</div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className="mx-4 my-2 font-bold opacity-75">ABOUT ME</div>
              <div className="mx-4 my-2 mt-1 text-base">
                <div className="flex">
                  <div className="opacity-75 mr-1">ID:</div>
                  {data.id}
                </div>
                <div className="flex">
                  <div className="opacity-75 mr-1">Username:</div>
                  {data.username}
                </div>
                <div className="flex">
                  <div className="opacity-75 mr-1">Discriminator:</div>
                  {data.discriminator}
                </div>
                {data.avatar_url && (
                  <div className="flex">
                    <div className="opacity-75 mr-1">Avatar URL:</div>
                    <Link href={data.avatar_url}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 mx-1"
                      >
                        Avatar
                      </a>
                    </Link>
                  </div>
                )}
                {data.banner_url && (
                  <div className="flex">
                    <div className="opacity-75 mr-1">Banner URL:</div>
                    <Link href={data.banner_url}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 mx-1"
                      >
                        Banner
                      </a>
                    </Link>
                  </div>
                )}
                <div className="flex">
                  <div className="opacity-75 mr-1">Banner color:</div>
                  {data.banner_color || 'None'}
                  <div>
                    <div className="banner_color p-2 m-1 ml-2 rounded absolute px-2"></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="opacity-75 mr-1">Bot?:</div>
                  {data.bot ? 'It is a bot' : "It isn't a bot"}
                </div>
                <div className="flex">
                  <div className="opacity-75 mr-1">Creation date:</div>
                  {data.creation_date}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .banner_color {
            background-color: ${data?.banner_color || '#fff'};
          }
          .avatar {
            margin-top: -50px;
          }
        `}
      </style>
    </Layout>
  )
}
