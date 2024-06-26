import "./index.css";
import "./output.css";
import RootLayoutComponent from "./components/RootLayoutComponent";
import NextTopLoader from "nextjs-toploader";

import { DataProvider } from "./components/DataContext";
export const metadata = {
  title: 'Neil Stuart',
  description: 'Portfolio website.',
}
export default function RootLayout({ children }) {


 return (
    <html lang="en">
      <body>
          <NextTopLoader 
            color="#a8a29e"
            initialPosition={0.2}
            crawlSpeed={180}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={240}
          />
          <RootLayoutComponent>
            <DataProvider>
            {children}
            </DataProvider>
          </RootLayoutComponent>
      </body>
    </html>
  )
}
