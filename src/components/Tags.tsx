import { Tag } from './Tag'

interface TagsProps {
  tags: string[]
}

export function Tags({ tags }: TagsProps) {
  return (
    <>
      {tags.map((tag) => (
        <Tag
          key={tag}
          name={tag}
        />
      ))}
    </>
  )
}
