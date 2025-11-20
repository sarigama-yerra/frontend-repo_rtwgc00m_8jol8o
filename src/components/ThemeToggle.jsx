import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = saved ? saved === 'dark' : prefersDark
    setDark(shouldDark)
    document.documentElement.classList.toggle('dark', shouldDark)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} className="p-2 rounded-xl shadow-neo dark:shadow-neo-dark-sm bg-neo-tint dark:bg-[#1b2130] text-slate-700 dark:text-slate-200 transition-all active:scale-[0.98]">
      {dark ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  )
}
