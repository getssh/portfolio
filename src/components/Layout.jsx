import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navbar />
      <main className="pt-8 pb-16 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
} 