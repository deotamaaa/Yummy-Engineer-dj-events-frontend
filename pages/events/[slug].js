import { useRouter } from 'next/router';
import React from 'react';
import Layout from '@/components/Layout';

export default function EventPage() {
  const router = useRouter();

  return (
    <Layout>
      <h1>EventPage</h1>
      <h3>{router.query.slug}</h3>
    </Layout>
  );
}
