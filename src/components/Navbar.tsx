
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, TrendingUp } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IL</span>
          </div>
          <span className="text-xl font-bold text-gray-800">InterLink</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/startup-register" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <TrendingUp className="w-4 h-4 mr-2" />
            For Startups
          </Link>
          <Link to="/investor-register" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <Users className="w-4 h-4 mr-2" />
            For Investors
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
            Sign In
          </Button>
          <Link to="/dashboard">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
