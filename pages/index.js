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
        <p>I chose Data Analytics as my IT specialization because I like working with data and finding useful information. Today, many businesses collect a lot of data every day. I became interested in Data Analytics because data can help businesses make better decisions. I want to learn how to study data and find patterns or problems. I also want to use data to help people and businesses solve real problems. For me, Data Analytics is a good choice because it combines technology, numbers, and problem-solving.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}