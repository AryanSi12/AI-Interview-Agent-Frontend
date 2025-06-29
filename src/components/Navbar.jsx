import React, { useEffect, useState } from "react";
import { Mic, Menu, X, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "@/store/useUserStore";
import { toast } from "sonner";

// ...imports remain unchanged

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useUserStore((state) => state.user);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    toast.success("Logged out successfully");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur transition-colors">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
            <Mic className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            AI Interviewer
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/domains" className="nav-link">Domains</Link>
          <Link to="/how-to-interview" className="nav-link">How It Works</Link>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          {!isAuthenticated ? (
            <>
              <Link to="/login">
                <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="flex items-center gap-2">
                <img
                  src={user?.image || "https://www.gravatar.com/avatar?d=mp"}
                  alt="User"
                  className="w-8 h-8 rounded-full border"
                />
              </Link>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 absolute top-16 right-4 bg-background border p-4 rounded-xl shadow-lg w-[85%] max-w-sm z-40 animate-in fade-in slide-in-from-top-2">
          {/* Authenticated View */}
          {isAuthenticated && (
            <div className="flex items-center gap-3 mb-4">
              <Link to="/profile" className="flex items-center gap-2">
                <img
                  src={user?.image || "https://www.gravatar.com/avatar?d=mp"}
                  alt="User"
                  className="w-10 h-10 rounded-full border"
                />
              </Link>
              <div className="flex flex-col">
                <p className="text-sm font-medium">{user?.name || "User"}</p>
                <p className="text-xs text-muted-foreground">{user?.email || "email@example.com"}</p>
              </div>
            </div>
          )}

          {/* Nav Links */}
          <div className="flex flex-col gap-3 mb-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="nav-link">Home</Link>
            <Link to="/features" onClick={() => setMenuOpen(false)} className="nav-link">Features</Link>
            <Link to="/domains" onClick={() => setMenuOpen(false)} className="nav-link">Domains</Link>
            <Link to="/how-to-interview" onClick={() => setMenuOpen(false)} className="nav-link">How It Works</Link>
          </div>

          {/* Auth Buttons or Logout */}
          {!isAuthenticated ? (
            <div className="flex flex-col gap-3">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Sign In</Button>
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          ) : (
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-red-600 mt-2"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
