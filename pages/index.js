import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey I'm Tyler and I love building 🏗️ stuff! Checkout some of the stuff I have built in this blog. I even built this blog using next.js.</p>
        <p>
          If you'd also like to build a similar blog you can do so{' '}
          <a href="https://nextjs.org/learn">here</a>.
        </p>
      </section>
    </Layout>
  );
}