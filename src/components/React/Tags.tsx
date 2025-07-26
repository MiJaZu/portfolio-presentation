interface TagsProps {
  tags: string[];
}

interface TagProps {
  tag: string;
  color: string;
}

function Tag({ tag, color }: TagProps) {
  return (
    <div class={`px-3 py-1 rounded-full bg-${color}-500/50`}>
      <span class={`text-${color}-300`}>{tag}</span>
    </div>
  );
}

export default function Tags({ tags }: TagsProps) {
  const colors = ['blue', 'green', 'purple', 'yellow', 'red', 'pink'];

  return (
    <div class="flex gap-2">
      {tags.map((tag, index) => (
        <Tag
          key={`tag-${index}`}
          tag={tag}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
}
