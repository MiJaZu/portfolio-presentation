interface SkillCardProps {
  skillNumber: number;
  title: string;
  years: {
    fromY: string;
    toY?: string;
  };
  description: string;
  color: string;
}

export default function SkillCard({
  skillNumber,
  title,
  years,
  description,
  color,
}: SkillCardProps) {
  return (
    <div class="flex flex-row gap-10 my-10">
      <div class="flex flex-col items-center">
        <div
          class={`h-8 w-8 rounded-full bg-${color}-500 absolute text-center flex justify-center items-center`}
        >
          <span class="text-white font-bold">{skillNumber}</span>
        </div>
        <div class={`h-full w-1 bg-${color}-500`}></div>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold">{title}</h2>
        <span class={`text-${color}-400 text-lg leading-relaxed`}>
          {years.fromY} - {years.toY ?? 'present'}
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
}
