import { Code2, Gamepad, Palette } from 'lucide-react'
export const interests = [
  {
    id: 'coding',
    icon: Code2,
    title: '编程创造',
    description: '用代码构建有趣的数字世界',
    color: 'from-purple-500 to-blue-500',
    projects: [
      { name: '音乐可视化', desc: '将音乐转换为动态视觉效果' },
      {
        name: '组件库',
        desc: '基于AntDesign的业务二次封装，深化理解抽象思维',
      },
      { name: '最佳实践', desc: '探索更优雅的代码风格与思维方式' },
    ],
  },
  {
    id: 'art',
    icon: Palette,
    title: '生活乐趣',
    description: '热爱用技术点缀生活，在艺术与智能中寻找灵感与平衡。',
    color: 'from-pink-500 to-orange-500',
    projects: [
      {
        name: 'Eason Fans',
        desc: '在旋律与节奏中感受情绪表达的艺术。',
      },
      {
        name: '智能家居',
        desc: '关注人与空间的交互，追求舒适、效率与自动化共存的生活体验。',
      },
      {
        name: 'AI Agent',
        desc: '打造贴合自己需求的 AI 助理，用技术简化日常、扩展思维边界。',
      },
    ],
  },
  {
    id: 'game',
    icon: Gamepad,
    title: '游戏',
    description:
      '热爱游戏，也热衷于拆解游戏的底层逻辑与交互设计。从玩家到开发者，用代码重现那些令人上瘾的机制。',
    color: 'from-yellow-500 to-red-500',
    projects: [
      {
        name: 'FPS',
        desc: '体验击中反馈的爽感与定局前的无限可能',
      },
      {
        name: 'MOBA',
        desc: '理解团队合作的魅力与能量',
      },
      {
        name: 'RTS',
        desc: 'War3、StarCraft,探索极致的操作之美',
      },
    ],
  },
]
