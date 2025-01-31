import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-space-pink dark:text-space-gray" />
      <Switch
        checked={isDark}
        onCheckedChange={toggleDarkMode}
        className="data-[state=checked]:bg-space-purple data-[state=checked]:hover:bg-space-pink transition-colors"
      />
      <Moon className="h-4 w-4 text-space-gray dark:text-space-pink" />
    </div>
  );
};

export default DarkModeToggle;