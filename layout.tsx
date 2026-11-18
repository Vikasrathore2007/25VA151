import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'TrustTrace AI | Message Risk Intelligence', description: 'Explainable AI scam and suspicious-message analysis.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
