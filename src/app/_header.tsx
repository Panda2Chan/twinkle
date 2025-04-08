import { Coffee, Heart, Sparkles, Star } from 'lucide-react'

export default function Page() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Background"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent">
          创造者 / 探索者 / 梦想家
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          在数字与艺术的交界处探索无限可能
        </p>
        <div className="flex justify-center gap-4">
          <Coffee className="h-6 w-6 animate-pulse" />
          <Heart className="h-6 w-6 animate-pulse" />
          <Star className="h-6 w-6 animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
        <Sparkles className="h-8 w-8" />
      </div>
    </div>
  )
}
