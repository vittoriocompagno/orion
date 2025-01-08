import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Users, 
  Mail, 
  Briefcase,
  Shield,
  FileCode2
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-4 py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Product */}
          <div>
            <h3 className="font-mono text-xl mb-6">PRODOTTO_</h3>
            <ul className="space-y-4 font-sans text-gray-700">
              <li>
                <a href="#features" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <BookOpen size={16} />
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <FileText size={16} />
                  Prezzi
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <HelpCircle size={16} />
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <Users size={16} />
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-mono text-xl mb-6">RISORSE_</h3>
            <ul className="space-y-4 font-sans text-gray-700">
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <FileText size={16} />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <BookOpen size={16} />
                  Documentazione
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <HelpCircle size={16} />
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <FileCode2 size={16} />
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-xl mb-6">AZIENDA_</h3>
            <ul className="space-y-4 font-sans text-gray-700">
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <Users size={16} />
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <Mail size={16} />
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <Briefcase size={16} />
                  Lavora con noi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <Users size={16} />
                  Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-xl mb-6">LEGALE_</h3>
            <ul className="space-y-4 font-sans text-gray-700">
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <Shield size={16} />
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <FileText size={16} />
                  Termini
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <Shield size={16} />
                  Cookie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent flex items-center gap-2 transition-colors duration-200">
                  <FileText size={16} />
                  Licenze
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t-2 border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-xl">ORION_</div>
            <div className="font-sans text-sm text-gray-700">
              © {currentYear} Orion. Tutti i diritti riservati.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 