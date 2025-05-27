import Image from 'next/image';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface NewsCardProps {
  date: string;
  content: string;
  image: string;
  hasTopBorder?: boolean;
}

export default function NewsCard({
  date,
  image,
  content,
  hasTopBorder = false,
}: NewsCardProps) {
  return (
    <ScrollAnimation
      className={`items-center justify-between gap-x-10 border-b border-[#343434] py-6 sm:flex ${
        hasTopBorder ? 'border-t' : ''
      }`}
    >
      <Image
        className="mx-auto"
        height={95}
        width={140}
        src={image}
        alt={content}
      />
      <div className="max-sm:mt-3">
        <p>{date}</p>
        <p className="mt-2">{content}</p>
      </div>
    </ScrollAnimation>
  );
}
