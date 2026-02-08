// components/Header.tsx
'use client';

export default function Header({ title }: { title: string }) {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}