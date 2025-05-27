import React from 'react';

interface TableRowProps {
  label: string;
  value: string;
  isFirstRow?: boolean;
}

export default function TableRow({
  label,
  value,
  isFirstRow = false,
}: TableRowProps) {
  return (
    <tr
      className={`mt-6 block border-b border-[#343434] py-2 md:table-row md:h-[90px] ${isFirstRow ? 'md:border-t' : ''}`}
    >
      <th className="block w-full text-left text-[14px] font-normal md:table-cell md:w-[25%] md:px-4 md:py-6">
        {label}
      </th>
      <td className="mt-2 block w-full text-[16px] font-bold md:table-cell md:w-[75%] md:px-4 md:py-6">
        {value}
      </td>
    </tr>
  );
}
