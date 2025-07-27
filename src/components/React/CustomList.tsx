import { BG_COLORS } from '../../utils/constColors';

interface CustomListProps {
  list: string[];
}

const colors = Object.values(BG_COLORS);

export default function CustomList({ list }: CustomListProps) {
  const customList = list.map((listItem, i) => (
    <div key={i} class="flex items-center gap-3">
      <div
        class={`${colors[i % colors.length]} min-w-3 h-3 rounded-full animate-pulse justify-start`}
      />
      <span>{listItem}</span>
    </div>
  ));

  return <div>{customList}</div>;
}
