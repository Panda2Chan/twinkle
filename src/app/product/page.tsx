import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { works } from '@/data/work'
import { ArrowRight, ExternalLink, Github, Grape, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Product() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section
        id="works"
        className="py-20"
      >
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Featured Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="group overflow-hidden rounded-xl bg-gray-800/50 transition-all duration-300 hover:bg-gray-800/70"
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-64 w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    {work.githubUrl && (
                      <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                      >
                        <Github
                          className="text-white"
                          size={24}
                        />
                      </a>
                    )}
                    {work.liveUrl && (
                      <a
                        href={work.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                      >
                        <ExternalLink
                          className="text-white"
                          size={24}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {work.title}
                </h3>
                <p className="mb-4 text-gray-400">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-700/50 px-3 py-1 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-6 text-3xl font-bold text-white">
            想看更多？联系我
          </h2>
          <p className="mb-8 text-gray-400">
            我很乐意与您分享更多项目细节，或讨论潜在的合作机会
          </p>
          {/* 微信二维码 */}
          <div className="flex justify-center gap-5">
            <a
              href="mailto:812783357@qq.com"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-200"
            >
              <Mail className="h-5 w-5" />
              联系我
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Dialog>
              <DialogTrigger>
                <a className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-200">
                  <Grape className="h-5 w-5" />
                  或者微信？
                </a>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Hi !</DialogTitle>
                  <DialogDescription>
                    <Image
                      src="/wechat.webp"
                      width={100}
                      height={100}
                      alt="wechat"
                      className="mx-auto w-[300px]"
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  )
}
