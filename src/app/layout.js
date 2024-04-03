import { Inter, Lato, Grape_Nuts,Playfair} from "next/font/google";
import 'aos/dist/aos.css';
import "./globals.css";
import "./styles.css";
import "./booking.css";
import "./embala.css";
import "./responsive.css";
import "./IdealBankSectionStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.module.css';
import Footer from "./components/footer/Footer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
const Loto_init = Lato({
  subsets: ['latin'],
  weight: ['100','300','400','700','900'],
  variable:'--font-lato',
});
const GrapeNuts_init = Grape_Nuts({
  subsets: ['latin'],
  weight: '400',
  variable:'--font-GrapeNuts',
});
const Playfair_init = Playfair({
  subsets: ['cyrillic'],
  weight: ['300','400','500','600','700','800','900'],
  variable:'--font-Playfair',
});

export const metadata = {
  title: "Misi Nueropsy",
  description: "Misi Nueropsy is a therapy website with an appointment/booking system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Loto_init.variable} ${GrapeNuts_init.variable} ${Playfair_init.variable}`}>
        
        {children}
        <Footer/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
