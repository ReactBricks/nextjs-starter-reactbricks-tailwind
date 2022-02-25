import config from '../react-bricks/config'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={config.icon}
            alt={config.title}
            className="w-8"
          />
          <div className="uppercase text-sm tracking-wider">Next.js website starter</div>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <a href={config.domain} className="hover:text-pink-600">
            {config.title}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
