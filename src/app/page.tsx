// app/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RedirectHome() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/home') // 这里你也可以改成 '/home' 或其他目标页
  }, [router])

  return null // 什么都不显示，纯跳转
}
