import { useEffect, useMemo, useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import SearchBar from './components/SearchBar'
import Section from './components/Section'

function App() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [results, setResults] = useState([])
  const [total, setTotal] = useState(0)
  const [recs, setRecs] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/api/recommendations`).then(r=>r.json()).then((d)=>{
      setRecs(d.sections || [])
    }).catch(()=>{})
  }, [baseUrl])

  const search = async (q) => {
    setQuery(q)
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${baseUrl}/api/search?q=${encodeURIComponent(q)}`)
      const data = await res.json()
      setResults(data.items || [])
      setTotal(data.total || 0)
    } catch (e) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neo-light dark:bg-[#0f1420] transition-colors">
      {/* top bar */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-neo-light/70 dark:supports-[backdrop-filter]:bg-[#0f1420]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-neo-tint dark:bg-[#1f2430] shadow-neo dark:shadow-neo-dark grid place-items-center text-slate-700 dark:text-slate-200 font-bold">B</div>
            <div>
              <p className="text-slate-800 dark:text-slate-100 font-semibold leading-tight">Bookie</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">Find your next read</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* hero/search */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="p-4 sm:p-6 rounded-3xl bg-neo-light dark:bg-[#121827] shadow-neo dark:shadow-neo-dark">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 text-center">Search millions of books</h1>
            <p className="text-center text-slate-600 dark:text-slate-400 mt-2">Neomorphic, smooth, and fast. Try searching an author or topic.</p>
            <div className="mt-4">
              <SearchBar onSearch={search} />
            </div>

            {/* Quick chips */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {['fantasy', 'atomic habits', 'machine learning', 'harry potter', 'design'].map((c)=> (
                <button key={c} onClick={()=>search(c)} className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1b2130] shadow-neo-sm dark:shadow-neo-dark-sm text-sm text-slate-700 dark:text-slate-300">
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* results */}
        {query && (
          <div className="mt-8">
            <div className="flex items-end justify-between">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Results for "{query}"</h2>
              {!loading && <p className="text-sm text-slate-500 dark:text-slate-400">{total} found</p>}
            </div>
            {loading ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {Array.from({length:8}).map((_,i)=> (
                  <div key={i} className="h-32 rounded-2xl bg-neo-tint dark:bg-[#1f2430] shadow-neo-inset dark:shadow-neo-dark-inset animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <div className="mt-6 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 shadow-neo-sm dark:shadow-none">{error}</div>
            ) : (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {results.map((b)=> (
                  <div key={b.id}>
                    <Section title="" books={[b]} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* recommendations */}
        {!query && (
          <div className="mt-10">
            {recs.map((section)=> (
              <Section key={section.title} title={section.title} books={section.items} />
            ))}
          </div>
        )}
      </main>

      {/* footer */}
      <footer className="mt-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 dark:text-slate-400">
          Built with love for readers. Data from Google Books.
        </div>
      </footer>
    </div>
  )
}

export default App
