export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <h1>Hello from Next.js on VO - PaaS</h1>
      <p>Auto-detected by Nixpacks · built on Node 20 · served by next start</p>
      <p>Time: {new Date().toISOString()}</p>
    </main>
  );
}
