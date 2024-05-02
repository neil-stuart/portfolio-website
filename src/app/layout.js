import "./index.css";
import "./output.css";

export const metadata = {
  title: 'Neil Stuart',
  description: 'Portfolio website.',
}

export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
        <div className={"flex max-w-screen w-screen min-h-screen select-none"}>

          {children}
      
        </div>
      </body>
    </html>
  )
}
