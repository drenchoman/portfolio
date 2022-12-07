import Head from 'next/head';
import Image from 'next/image';
import Technologies from '../components/Technologies/Technologies';
import HomePage from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Three from '../components/Three/Three';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>Oscar Harron</title>
        <meta name="description" content="Its me" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className={'main'}>
        <Three />
        <Navbar />

        <HomePage />
        <Technologies />
        <Projects />
        <Blog />
        <Contact num="04" />
        <Footer />
      </main>
    </div>
  );
}
