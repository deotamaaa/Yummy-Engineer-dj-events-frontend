import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';
export default function NotFoundPage() {
  return (
    <Layout title="404 | Page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle></FaExclamationTriangle> 404
        </h1>
        <h4>Nothing is here</h4>
        <Link href="/">Back to Home</Link>
      </div>
    </Layout>
  );
}
