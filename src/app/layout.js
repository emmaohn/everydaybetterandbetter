// import { Inter } from "next/font/google";
import "./globals.scss";
import "../scripts/index.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Every Day Better and Better",
  description: "Ready to transform your life into something better?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"  rel="stylesheet"></link>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
