import Link from 'next/link';

export default function Navbar({ lang }: { lang: string }) {
  return (
    <nav className="container">
      <Link href={`/${lang}`}>Home</Link>
    </nav>
  );
}
