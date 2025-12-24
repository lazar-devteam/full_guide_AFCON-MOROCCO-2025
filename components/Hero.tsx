export default function Hero({ lang }: { lang: string }) {
  const title =
    lang === 'ar' ? 'كأس إفريقيا 2025 المغرب' :
    lang === 'en' ? 'AFCON Morocco 2025' :
    'CAN Maroc 2025';

  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>Official Tourism & Football Guide</p>
    </section>
  );
}
