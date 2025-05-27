import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          ページが見つかりません
        </h2>
        <Link
          href="/"
          className="inline-block rounded-lg bg-[#0C4050] px-6 py-3 text-white transition-colors hover:cursor-pointer"
        >
          トップに戻る
        </Link>
      </div>
    </div>
  );
}
