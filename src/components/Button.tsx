interface ButtonProps {
  value: string
  isActive?: boolean
  onClick: () => void
}

export function Button({ value, isActive = false, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={[
        'font-bold py-2 px-4 rounded',
        isActive ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-800',
      ].join(' ')}
    >
      {value}
    </button>
  )
}
