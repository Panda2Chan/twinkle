import { NextRequest, NextResponse } from 'next/server'

async function proxy(req: NextRequest) {
  try {
    const targetUrl = req.headers.get('x-proxy-target')
    if (!targetUrl) {
      return NextResponse.json({ error: '缺少目标地址' }, { status: 400 })
    }

    const headers = new Headers(req.headers)
    headers.delete('x-proxy-target')
    headers.delete('host')

    const resp = await fetch(targetUrl, {
      method: req.method,
      headers,
      body:
        req.method === 'GET' || req.method === 'HEAD' ? undefined : req.body,
    })

    const respHeaders = new Headers(resp.headers)

    // 删除无效的 content-encoding
    const contentEncoding =
      respHeaders.get('content-encoding')?.toLowerCase() || ''
    if (!['gzip', 'deflate', 'br'].includes(contentEncoding)) {
      respHeaders.delete('content-encoding')
    }

    respHeaders.set('Access-Control-Allow-Origin', '*')
    respHeaders.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    respHeaders.set('Access-Control-Allow-Headers', '*')
    respHeaders.set('accept-encoding', 'identity')
    respHeaders.delete('content-length')
    respHeaders.delete('content-encoding')

    // 👇 解压后的纯净数据

    return new NextResponse(resp.body, {
      status: resp.status,
      statusText: resp.statusText,
      headers: respHeaders,
    })
  } catch (error) {
    console.error('代理请求失败:', error)
    return NextResponse.json({ error: '代理请求失败' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  return proxy(req)
}
export async function GET(req: NextRequest) {
  return proxy(req)
}
export async function PUT(req: NextRequest) {
  return proxy(req)
}
export async function DELETE(req: NextRequest) {
  return proxy(req)
}
export async function PATCH(req: NextRequest) {
  return proxy(req)
}
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  })
}
