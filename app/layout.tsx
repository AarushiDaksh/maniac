import './globals.css';
import Sidebar from './components/sidebar';
import type { Metadata } from 'next';
import ThemeProvider from './components/ThemeProvider';
import SidebarWrapper from './components/SidebarWrapper';

export const metadata: Metadata = {
  title: 'Docx - Minecraft Theme',
  description: 'Learnings@ by Aarushi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  


  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/minecraftia" rel="stylesheet" />
      </head>
      <body className="flex font-minecraft bg-[var(--background)] text-[var(--foreground)] transition-all duration-300">
        <ThemeProvider>
          <SidebarWrapper />
          <main className="w-full lg:ml-[20%] px-4 min-h-screen">{children}</main>

        </ThemeProvider>
      </body>
    </html>
  );
}
