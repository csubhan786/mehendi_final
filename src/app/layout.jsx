import './styles/globals.css';
import Navbar from './components/Navbar'; // ✅ check this path
import Footer from './components/Footer'; // ✅ check this path
import FloatingContact from './components/FloatingContact';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mehendi World</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingContact /> {/* Always shown at bottom right */}
      </body>
    </html>
  );
}
