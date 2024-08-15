import React, { ReactNode } from "react";
import "@/styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
export default RootLayout;