import { stadiums } from '../../../../data/stadiums';

export default function StadiumPage({ params }: { params: { slug: string } }) {
  const stadium = stadiums.find(s => s.slug === params.slug);
  if (!stadium) return <div>Stadium not found</div>;

  return (
    <main className="container">
      <h1>{stadium.name}</h1>
      <p>{stadium.city}</p>
    </main>
  );
}
