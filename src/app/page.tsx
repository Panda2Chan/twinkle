import { interests } from '@/data/interest'
import { Activity } from 'lucide-react'
import Link from 'next/link'
function App() {
  return (
    <>
      {/* Interests Grid */}
      <div className="mx-auto max-w-3xl px-4 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
          {interests.map((interest) => {
            const Icon = interest.icon
            return (
              <div
                key={interest.id}
                className={`group relative transform cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-102`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-75`}
                />
                <div className="relative p-8">
                  <Icon className="mb-4 h-12 w-12" />
                  <h2 className="mb-4 text-2xl font-bold">{interest.title}</h2>
                  <p className="mb-6 text-gray-200">{interest.description}</p>
                  <div className="space-y-4">
                    {interest.projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-opacity-30 transform rounded-lg bg-black p-4 transition-all duration-300 hover:translate-x-2"
                      >
                        <h3 className="mb-2 font-semibold">{project.name}</h3>
                        <p className="text-sm text-gray-300">{project.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-t from-purple-900 to-transparent py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-4xl font-bold">
            让我们一起创造些有趣的东西
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            无论是技术合作、艺术创作，还是纯粹的思维碰撞，都随时欢迎与我联系
          </p>
          <div className="inline-flex items-center space-x-4 text-lg">
            <a
              href="mailto:812783357@qq.com"
              className="rounded-full bg-white/10 px-6 py-3 transition-all duration-300 hover:bg-white/20"
            >
              发送邮件
            </a>
            <span className="text-gray-500">或</span>
            <Link
              href="product"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 transition-all duration-300 hover:opacity-90"
            >
              查看作品集
            </Link>
          </div>

          <a
            href="/star"
            className="group mt-20 flex cursor-pointer justify-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <Activity className="transition-transform duration-300 group-hover:rotate-12" />
            <span className="transition-opacity duration-300 group-hover:opacity-80">
              来自母星的信号
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
