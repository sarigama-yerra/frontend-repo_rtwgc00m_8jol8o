import BookCard from './BookCard'

export default function Section({ title, books = [] }) {
  if (!books.length) return null
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3 ml-1">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((b)=> (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  )
}
