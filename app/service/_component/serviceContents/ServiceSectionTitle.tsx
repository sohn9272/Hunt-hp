interface ServiceSectionTitleProps {
  enTitle: string;
}

export default function ServiceSectionTitle({
  enTitle,
}: ServiceSectionTitleProps) {
  return (
    <div className="font-ryo-gothic mb-2 text-[14px] font-bold text-[#0C4050] md:text-[18px]">
      <h4 className="w-full border-b border-[#0C4050]">{enTitle}</h4>
    </div>
  );
}
