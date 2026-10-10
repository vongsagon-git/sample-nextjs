export const metadata = { title: 'VO - PaaS · Next.js sample' };

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body style={{ fontFamily: 'system-ui', padding: 40, maxWidth: 720, margin: '0 auto' }}>
        {children}
      </body>
    </html>
  );
}
