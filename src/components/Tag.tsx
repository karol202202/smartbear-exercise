interface TagProps {
  name: string
}

export function Tag({ name }: TagProps) {
  return (
    <span className='inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'>
      {name}
    </span>
  )
}
