import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar({ onSearch, initial = '' }) {
  const [q, setQ] = useState(initial)

  const submit = (e) => {
    e.preventDefault()
    if (!q.trim()) return
    onSearch(q.trim())
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-2 p-2 rounded-2xl shadow-neo dark:shadow-neo-dark bg-neo-tint dark:bg-[#1f2430]">
      <Search className="text-slate-500 dark:text-slate-300" size={20} />
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Search books, authors, topics..."
        className="flex-1 bg-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-800 dark:text-slate-100 py-2"
      />
      <button className="px-4 py-2 rounded-xl bg-white dark:bg-[#232a39] shadow-neo dark:shadow-neo-dark-sm text-slate-700 dark:text-slate-200 font-medium">
        Search
      </button>
    </form>
  )
}
