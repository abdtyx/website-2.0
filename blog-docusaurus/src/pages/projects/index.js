import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useEffect } from 'react';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    window.location.reload();
  });
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="">
      <main>
      </main>
    </Layout>
  );
}
