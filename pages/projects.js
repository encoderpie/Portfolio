import Layout from '../components/layout'
import Link from 'next/link'

const HasValue = ({children, data}) => {
  return data ? children : <div />
}

export default function Projects({repos}) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-3">
        {repos.map((repo, index) => (
          <div key={index} className="bg-gray-900 rounded-xl mb-1 p-5 md:p-6 h-auto">
            <div className="mb-3 pb-3 text-3xl border-b-2 border-gray-800">
              <Link href={repo.html_url}>
                <a className="flex">
                  {repo.name}
                  <HasValue data={repo.fork}>
                    <div className="text-sm mt-2.5 ml-2 text-gray-600">
                      (a fork repo)
                    </div>
                  </HasValue>
                </a>
              </Link>
            </div>
            <HasValue data={repo.description}>
              <div className="mt-1 text-md text-gray-200 mb-3 pb-4 border-b-2 border-gray-800">
                {repo.description}
              </div>
            </HasValue>
            <div className="grid grid-cols-2 gap-1">
              <div>Language: {repo.language || 'Other'}</div>
              <HasValue data={repo.homepage}>
                <div className="text-sm text-right mt-1">
                    <Link href={repo.homepage}>
                        <a className='border-2 border-cyan-600 rounded px-2 py-1 hover:bg-cyan-600 hover:text-black'>Preview</a>
                    </Link>
                </div>
              </HasValue>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://api.github.com/users/encoderpie/repos')
  const repos = await data.json()
  return {
    props: {
      repos
    }
  }
}
