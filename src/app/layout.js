import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Madaka Pavan Kalyan",
    default:
      "Madaka Pavan Kalyan",
  },
  description:
    "Im Madaka Pavan Kalyan, Graduated from Hindustan University in 2022 with a degree in Electrical and Electronics Engineering, located in Chennai. Throughout my academic journey, I gained a comprehensive understanding of renewable energy and engineering projects, particularly focusing on the integration of AI, ML, MATLAB, and Image Processing technologies. Prior to my university education, I attended Sri Chaitanya Junior College in 2016-18 and completed my 10th grade at Abhyudaya School in 2015-16.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
