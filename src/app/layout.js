import "./index.css";
import "./output.css";
import RootLayoutComponent from "./RootLayoutComponent";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: 'Neil Stuart',
  description: 'Portfolio website.',
}

export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
          <NextTopLoader 
            color="#2299DD"
            initialPosition={0.2}
            crawlSpeed={300}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={300}
          />
          <RootLayoutComponent>

            {children}
          </RootLayoutComponent>
      </body>
    </html>
  )
}
