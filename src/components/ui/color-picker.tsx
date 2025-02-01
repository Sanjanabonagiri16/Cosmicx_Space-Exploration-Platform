import React from "react";
import { Label } from "./label";
import { Input } from "./input";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-12 h-12 p-1 bg-transparent border rounded cursor-pointer"
      />
      <Label className="text-sm text-gray-500">{value}</Label>
    </div>
  );
};