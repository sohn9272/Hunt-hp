import Image from 'next/image';

interface CardProps {
  stepNumber: number;
  title: string;
  text: string;
  image: string;
}

const formatText = (text: string) => {
  return text.split('（').map((part, index) => {
    if (index === 0) return part;
    return (
      <span key={index}>
        <br className="lg:hidden" />（{part}
      </span>
    );
  });
};

export default function FlowCard({
  stepNumber,
  title,
  text,
  image,
}: CardProps) {
  return (
    <div className="mx-auto mt-8 flex flex-col rounded-sm border-2 border-[#0C4050] p-4 sm:mt-16 sm:flex-row sm:items-center sm:justify-center sm:py-8 sm:pr-20">
      <div className="flex flex-col items-center border-r-0 border-b-2 border-[#0C4050] p-4 font-bold sm:border-r-2 sm:border-b-0 sm:p-[30px] sm:text-center">
        <p className="text-sm text-[#0C4050] sm:text-base">STEP</p>
        <p className="text-lg font-bold text-[#0C4050] sm:text-xl">
          0{stepNumber}
        </p>
      </div>
      <div className="mt-4 flex flex-col sm:mx-8 sm:mt-0 sm:w-[70%]">
        <h4 className="text-lg leading-relaxed font-bold break-words max-sm:text-center sm:text-2xl">
          {formatText(title)}
        </h4>
        <p className="mt-2 text-sm leading-relaxed break-words sm:mt-3 sm:text-base sm:leading-7">
          {text}
        </p>
      </div>
      <div className="mt-4 flex justify-center sm:mt-0">
        <Image
          height={70}
          width={70}
          src={image}
          alt={title}
          className="sm:h-[70px] sm:w-[70px]"
        />
      </div>
    </div>
  );
}
