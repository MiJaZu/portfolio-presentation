import { BG_COLORS, TXT_COLORS } from '../../utils/constColors';
import CustomList from './CustomList';

interface SkillCardProps {
  skillNumber: number;
  title: string;
  years: {
    fromY: string;
    toY?: string;
  };
  tasks: string[];
  color: string;
}

export default function JobCard({
  skillNumber,
  title,
  years,
  tasks,
  color,
}: SkillCardProps) {
  return (
    <div class="flex flex-row gap-5 md:gap-10 my-10">
      <div class="flex flex-col items-center">
        <div
          class={`h-8 w-8 rounded-full ${BG_COLORS[color]} absolute text-center flex justify-center items-center`}
        >
          <span class="text-white font-bold">{skillNumber}</span>
        </div>
        <div class={`h-full w-1 ${BG_COLORS[color]}`}></div>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold">{title}</h2>
        <span class={`${TXT_COLORS[color]} text-lg`}>
          {years.fromY} - {years.toY ?? 'present'}
        </span>
        <CustomList list={tasks} />
      </div>
    </div>
  );
}
