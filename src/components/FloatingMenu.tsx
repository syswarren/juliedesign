export default function FloatingMenu() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-sm rounded-full border border-white/10 px-6 py-3">
        <ul className="flex items-center space-x-8">
          <li>
            <a 
              href="/" 
              className="text-true-gray-300 page-text hover:text-white transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/updates" 
              className="text-true-gray-300 page-text hover:text-white transition-colors"
            >
              Updates
            </a>
          </li>
          <li>
            <a 
              href="/about" 
              className="text-true-gray-300 page-text hover:text-white transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/contact" 
              className="text-true-gray-300 page-text hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
} 