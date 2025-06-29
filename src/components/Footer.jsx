import { Github, Twitter, Linkedin, Mail, Mic } from "lucide-react"

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 transition-colors">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <Mic className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Interviewer
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Revolutionizing technical interview preparation with AI-powered personalized practice sessions and intelligent feedback.
            </p>
            <div className="flex items-center gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Product</h3>
            <div className="space-y-2">
              {["Features", "Domains", "API", "Integrations"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Company</h3>
            <div className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Legal</h3>
            <div className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 AI Interviewer. All rights reserved.</p>
          <div className="text-sm text-slate-500 dark:text-slate-400">Made with ❤️ for developers worldwide</div>
        </div>
      </div>
    </footer>
  )
}
export default Footer