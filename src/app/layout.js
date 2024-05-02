import "./index.css";
import "./output.css";
import RootLayoutComponent from "./components/RootLayoutComponent";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: 'Neil Stuart',
  description: 'Portfolio website.',
}
import { DataProvider } from "./components/DataContext";
export default function RootLayout({ children }) {


 return (
    <html lang="en">
      <body>
          <NextTopLoader 
            color="#a8a29e"
            initialPosition={0.2}
            crawlSpeed={300}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={300}
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
