import { BG_OPACITY, TXT_COLORS } from '../../utils/constColors';

interface TagsProps {
  tags: string[];
}

interface TagProps {
  tag: string;
  color: string;
}

function Tag({ tag, color }: TagProps) {
  return (
    <div class={`px-3 py-1 rounded-full ${BG_OPACITY[color]}`}>
      <span class={`${TXT_COLORS[color]}`}>{tag}</span>
    </div>
  );
}

export default function Tags({ tags }: TagsProps) {
  const colors = ['blue', 'green', 'purple', 'yellow', 'red', 'pink'];

  return (
    <div class="flex gap-2 flex-wrap">
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
