import Link from 'next/link';
import Header from '../components/Header';
export default function Home() {
  return (
    <div>
    <Header />
    <Link href="/my-projects" className="btn">Code with me</Link>
    </div>
  )
}
