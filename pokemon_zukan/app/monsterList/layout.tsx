import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'モンスターリスト',
  description: 'モンスターの一覧です。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
