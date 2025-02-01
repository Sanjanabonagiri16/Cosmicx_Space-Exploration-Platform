import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = 'galactic' | 'nebula' | 'martian';

const ThemeSelector = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    return savedTheme || 'galactic';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
    
    // Update body background and text colors
    const root = document.documentElement;
    root.style.setProperty('--theme-background', `var(--${theme}-background)`);
    root.style.setProperty('--theme-text', `var(--${theme}-text)`);
  }, [theme]);

  const themes = {
    galactic: { name: 'Galactic Blue', color: 'bg-themes-galactic-primary' },
    nebula: { name: 'Nebula Purple', color: 'bg-themes-nebula-primary' },
    martian: { name: 'Martian Red', color: 'bg-themes-martian-primary' },
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10">
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(themes).map(([key, value]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => setTheme(key as Theme)}
            className="flex items-center gap-2"
          >
            <div className={`w-4 h-4 rounded-full ${value.color}`} />
            {value.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;