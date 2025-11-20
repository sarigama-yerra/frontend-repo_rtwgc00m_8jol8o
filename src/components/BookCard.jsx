export default function BookCard({ book }) {
  const { title, authors = [], thumbnail, publishedDate, categories = [], infoLink } = book
  return (
    <a href={infoLink} target="_blank" rel="noreferrer" className="group block rounded-2xl p-3 bg-neo-tint dark:bg-[#1f2430] shadow-neo dark:shadow-neo-dark transition-transform hover:-translate-y-0.5">
      <div className="flex gap-4">
        <div className="w-20 h-28 flex-shrink-0 rounded-xl bg-white/50 dark:bg-white/5 overflow-hidden shadow-neo-inset dark:shadow-neo-dark-inset">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full grid place-items-center text-xs text-slate-500 dark:text-slate-400">No Image</div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-800 dark:text-slate-100 leading-tight line-clamp-2">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{authors.join(', ')}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            {publishedDate && <span className="px-2 py-1 rounded-lg bg-white dark:bg-white/5 shadow-neo-sm dark:shadow-neo-dark-sm">{publishedDate}</span>}
            {categories.slice(0,2).map((c) => (
              <span key={c} className="px-2 py-1 rounded-lg bg-white dark:bg-white/5 shadow-neo-sm dark:shadow-neo-dark-sm">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}
