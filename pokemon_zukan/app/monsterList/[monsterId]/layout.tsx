import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'モンスター詳細ページ',
  description: 'モンスターの詳細ページです。',
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
