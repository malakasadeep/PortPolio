import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Malaka Sadeep | SLIIT Software Engineering Undergraduate",
  description:
    "Portfolio of Malaka Sadeep, a software engineering undergraduate from SLIIT in Sri Lanka. Explore projects, skills, and more.",
  keywords: [
    "Malaka Sadeep",
    "Sadeep P G M",
    "SLIIT",
    "software engineer",
    "Sri Lanka",
    "portfolio",
    "undergraduate",
    "software development",
  ],
  openGraph: {
    title: "Malaka Sadeep | Software Engineering Portfolio",
    description:
      "Discover the projects and skills of Malaka Sadeep, a software engineering undergraduate from SLIIT.",
    url: "https://http://sadeeppgm.live/",
    type: "website",
  },
  twitter: {
    title: "Malaka Sadeep | Software Engineering Portfolio",
    description:
      "Portfolio of Malaka Sadeep, an undergraduate software engineer at SLIIT.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Malaka Sadeep" />
        <meta property="og:image" content="../assets/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Malaka Sadeep",
            jobTitle: "Software Engineering Undergraduate",
            affiliation: "SLIIT",
            url: "https://http://sadeeppgm.live/",
            address: {
              "@type": "PostalAddress",
              addressCountry: "Sri Lanka",
            },
          })}
        </script>
        <title>Malaka Sadeep</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
