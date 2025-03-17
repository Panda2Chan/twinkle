import React from 'react';
import { Code2, Palette, Music, Camera, Coffee, Heart, Star, Sparkles } from 'lucide-react';

function App() {

  const interests = [
    {
      id: 'coding',
      icon: Code2,
      title: '编程创造',
      description: '用代码构建有趣的数字世界',
      color: 'from-purple-500 to-blue-500',
      projects: [
        { name: '音乐可视化', desc: '将音乐转换为动态视觉效果' },
        { name: '像素艺术生成器', desc: '基于AI的像素风格转换工具' },
        { name: '互动故事引擎', desc: '创建分支剧情的文字冒险' },
      ]
    },
    {
      id: 'art',
      icon: Palette,
      title: '数字艺术',
      description: '探索科技与艺术的边界',
      color: 'from-pink-500 to-orange-500',
      projects: [
        { name: '生成艺术作品集', desc: '算法驱动的视觉艺术' },
        { name: '交互装置设计', desc: '结合传感器的艺术体验' },
        { name: '数字绘画作品', desc: '融合传统与数字的创作' },
      ]
    },
    {
      id: 'music',
      icon: Music,
      title: '音乐创作',
      description: '用音符编织情感故事',
      color: 'from-green-500 to-teal-500',
      projects: [
        { name: '电子音乐专辑', desc: '环境音与电子声音的融合' },
        { name: '声音装置', desc: '探索空间与声音的关系' },
        { name: '音乐可视化', desc: '声音与图像的跨媒体实验' },
      ]
    },
    {
      id: 'photo',
      icon: Camera,
      title: '摄影日记',
      description: '捕捉生活中的美好瞬间',
      color: 'from-yellow-500 to-red-500',
      projects: [
        { name: '城市掠影', desc: '都市生活的斑斓剪影' },
        { name: '自然印象', desc: '大自然的诗意瞬间' },
        { name: '人像故事', desc: '定格每个独特的面孔' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            创造者 / 探索者 / 梦想家
          </h1>
          <p className="text-xl text-gray-300 mb-8">在数字与艺术的交界处探索无限可能</p>
          <div className="flex justify-center gap-4">
            <Coffee className="w-6 h-6 animate-pulse" />
            <Heart className="w-6 h-6 animate-pulse" />
            <Star className="w-6 h-6 animate-pulse" />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Sparkles className="w-8 h-8" />
        </div>
      </div>

      {/* Interests Grid */}
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.id}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-102`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-75`} />
                <div className="relative p-8">
                  <Icon className="w-12 h-12 mb-4" />
                  <h2 className="text-2xl font-bold mb-4">{interest.title}</h2>
                  <p className="text-gray-200 mb-6">{interest.description}</p>
                  <div className="space-y-4">
                    {interest.projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-black bg-opacity-30 p-4 rounded-lg transform transition-all duration-300 hover:translate-x-2"
                      >
                        <h3 className="font-semibold mb-2">{project.name}</h3>
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
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">让我们一起创造些有趣的东西</h2>
          <p className="text-xl text-gray-300 mb-8">
            无论是技术合作、艺术创作，还是纯粹的思维碰撞，都随时欢迎与我联系
          </p>
          <div className="inline-flex items-center space-x-4 text-lg">
            <a
              href="mailto:a13281260713@gmail.com"
              className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              发送邮件
            </a>
            <span className="text-gray-500">或</span>
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-all duration-300"
            >
              查看作品集
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>用创意点亮数字世界 © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;