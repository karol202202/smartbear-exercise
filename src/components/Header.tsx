export function Header() {
  return (
    <div className='relative bg-slate-300'>
      <div className='mx-auto max-w-screen-2xl px-4'>
        <div className='flex items-center justify-between mb-8 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1 gap-8'>
            <a href='/'>
              <span>Grouped by paths</span>
            </a>
            <a href='/groupedByTag/'>
              <span>Grouped by tags</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
