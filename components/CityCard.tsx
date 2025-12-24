import Link from 'next/link';

export default function CityCard({ city, lang }: any) {
  return (
    <Link href={`/${lang}/villes/${city.slug}`}>
      <div className="card">
        <h3>{city.name}</h3>
        <p>{city.description}</p>
      </div>
    </Link>
  );
}
