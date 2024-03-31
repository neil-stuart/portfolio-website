export const metadata = {
  title: 'Neil Stuart',
  description: 'Portfolio website.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
