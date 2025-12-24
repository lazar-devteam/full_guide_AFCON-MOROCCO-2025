import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import CityGrid from '../../components/CityGrid';
import Footer from '../../components/Footer';


export default function Page({ params }: { params: { lang: string } }) {
  return (
    <>
      <Navbar lang={params.lang} />
      <Hero lang={params.lang} />
      <CityGrid lang={params.lang} />
      <Footer />
    </>
  );
}
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/fr')
}

