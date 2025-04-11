import ClientImage from './_clientImage'
import CustomDialog from './_dialog'
import NotFound from './notFound'

const NASA_API_CONFIG = {
  KEY: 'apxHeVakQmuRwhlXbjBa3C3L7vFLxA15TfoXZGsZ',
}
const NASA_API_MAP = {
  APOD: 'https://api.nasa.gov/planetary/apod',
}

/**
 * https://api.nasa.gov/
 */
export default async function Star({ searchParams }: Common.IPageProps) {
  const { date } = await searchParams

  // 如果date在当前日期之后，返回错误信息
  if (date && new Date(date) > new Date()) {
    return (
      <NotFound>
        <div className="text-center">你穿越到了未来？你是怎么做到的？</div>
      </NotFound>
    )
  }

  // 如果date是不规范的日期，返回错误信息
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return (
      <NotFound>
        <div className="text-center">
          不是地球人的时间格式🧐，试试像2025-04-10这样
        </div>
      </NotFound>
    )
  }

  // 添加查询参数以进行 GET 请求
  const params = new URLSearchParams({
    api_key: NASA_API_CONFIG.KEY,
  })
  if (date) params.set('date', date as string)

  const apiUrl = `${NASA_API_MAP.APOD}?${params.toString()}`
  const res = await fetch(apiUrl)
  const data = await res.json()
  console.log(data)

  if (!data?.url) {
    return (
      <NotFound>
        <div className="text-center">没有收到来自母星的信号</div>
      </NotFound>
    )
  }
  const explanation = data?.explanation || ''
  const firstWordEndIndex = explanation.indexOf(' ')
  const firstWord =
    firstWordEndIndex !== -1
      ? explanation.slice(0, firstWordEndIndex)
      : explanation
  const remainingText =
    firstWordEndIndex !== -1 ? explanation.slice(firstWordEndIndex) : ''
  const firstLetter = firstWord.slice(0, 1)
  const restOfFirstWord = firstWord.slice(1)

  return (
    <div className="mx-auto max-w-5xl px-4 py-20">
      <div>
        <div className="flex flex-wrap justify-center gap-5">
          <ClientImage
            src={data.url}
            alt={data.title}
          />
          {data?.copyright && (
            <p className="text-sm text-gray-50">
              Copyright by {data?.copyright}
            </p>
          )}
        </div>

        <div className="mt-10">
          <p className="mb-5 w-full text-2xl font-bold">{data?.title}</p>
          <p className="mb-5 text-sm text-gray-50">{data?.date}</p>
          <p className="mb-5 indent-2">
            <span className="text-2xl">{firstLetter}</span>
            {restOfFirstWord + remainingText}
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-center">
        <CustomDialog initDate={date} />
      </div>
    </div>
  )
}
