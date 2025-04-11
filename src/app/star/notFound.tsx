'use client'
import { Button } from '@/components/ui/button'

export default function NotFound({ children }: { children: React.ReactNode }) {
  const handleBack = () => {
    window.history.back()
  }
  const handleHome = () => {
    window.location.href = '/'
  }
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-3xl font-bold">404 Not Found</h1>
      {children ? (
        children
      ) : (
        <p className="text-center">抱歉，你访问的页面不存在</p>
      )}
      <div className="mt-5 flex gap-5">
        <Button
          className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          onClick={handleHome}
        >
          首页
        </Button>
        <Button
          className="cursor-pointer"
          onClick={handleBack}
        >
          返回
        </Button>
      </div>
    </div>
  )
}
