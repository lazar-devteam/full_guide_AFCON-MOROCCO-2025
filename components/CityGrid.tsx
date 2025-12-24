import { cities } from '../data/cities';
import CityCard from './CityCard';

export default function CityGrid({ lang }: { lang: string }) {
  return (
    <div className="container grid">
      {cities.map(city => (
        <CityCard key={city.slug} city={city} lang={lang} />
      ))}
    </div>
  );
}
