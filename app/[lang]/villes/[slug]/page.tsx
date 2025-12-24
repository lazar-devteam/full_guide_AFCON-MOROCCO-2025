import { cities } from '../../../../data/cities';

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = cities.find(c => c.slug === params.slug);
  if (!city) return <div>City not found</div>;

  return (
    <main className="container">
      <h1>{city.name}</h1>
      <p>{city.description}</p>
    </main>
  );
}
