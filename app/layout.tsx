import './globals.css';
import type { Metadata } from 'next';
import ThemeProvider from './components/ThemeProvider';


export const metadata: Metadata = {
  title: 'Docx - Maniac',
  description: 'AI-Agent@ by Aarushi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  


  return (
    <html lang="en">
      <head>
        {/* <link href="https://fonts.cdnfonts.com/css/minecraftia" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />

      </head>
      <body className="flex font-minecraft bg-[var(--background)] text-[var(--foreground)] transition-all duration-300">
        {/* <ThemeProvider> */}
          {/* <SidebarWrapper /> */}
          <main className="w-full  min-h-screen">{children}</main>

        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
