import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";
import Nav from "@/components/Nav/Nav";
import { Loader } from "@/components/Loader";
import { MotionScope } from "@/components/MotionScope";

const fatFrank = localFont({
  src: "./fonts/FatFrank.otf",
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-nav",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fatFrank.variable} ${inter.variable} ${manrope.variable}`}
    >
      <body className="is-loading">
        <MotionScope nav={<Nav />} loader={<Loader />}>
          {children}
        </MotionScope>
      </body>
    </html>
  );
}
