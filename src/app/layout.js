export const metadata = {
  title: 'Neil Stuart',
  description: 'Portfolio website.',
}
import bg from "../pics/bg.png"

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
