import { h } from 'preact';
import ColoredText from '../Astro/ColoredText.astro';

interface CustomListProps {
    list: string[];
}

const COLORS = ['bg-green-500', 'bg-blue-500', 'bg-purple-500'];

export default function CustomList({ list }: CustomListProps) {

    const customList = list.map((listItem, i) => (
        <div class='flex items-center gap-3'>
            <div class={`${COLORS[i%COLORS.length]} w-3 h-3 rounded-full animate-pulse`}></div>
            <span>{listItem}</span>
        </div>
    ));

    return <div>{customList}</div>;
}