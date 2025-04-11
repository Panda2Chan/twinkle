'use client'

import { Calendar } from '@/components/ui/calendar'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Telescope } from 'lucide-react'
import { SelectSingleEventHandler } from 'react-day-picker'
interface PageProps {
  initDate?: string
}

function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export default function Page({ initDate }: PageProps) {
  const defaultDate = initDate ? new Date(initDate) : new Date()
  const handleSelectDate: SelectSingleEventHandler = (e) => {
    if (!e) return
    const date = formatDate(e)
    if (date) {
      const currentParams = new URLSearchParams(window.location.search)
      const params = new URLSearchParams({
        ...Object.fromEntries(currentParams),
        date,
      })

      window.location.href = `/star?${params.toString()}`
    }
  }
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-200">
          还没看够？
          <Telescope className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hi！ 选一个你想穿越的时间</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={defaultDate}
            onSelect={handleSelectDate}
            className="rounded-md border shadow"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
