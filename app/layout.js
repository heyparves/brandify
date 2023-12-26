import "../styles/globals.css";

export const metadata = {
  title: "Build & Grow Branding  - BigBrandify",
  description:
    "From Branding on online to sale, We provide best solutions to success and grow online",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
