'use client'

import { useState, useEffect } from 'react';
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import { useTheme, type ThemeConfig, type ThemeColors } from '@/app/contexts/ThemeContext';

export default function ThemeConfigPage() {
  const { theme: currentTheme, updateTheme } = useTheme();
  const [localTheme, setLocalTheme] = useState<ThemeConfig>(currentTheme);

  useEffect(() => {
    setLocalTheme(currentTheme);
  }, [currentTheme]);

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    setLocalTheme(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [key]: value
      }
    }));
  };

  const handleFontChange = (key: 'heading' | 'body', value: string) => {
    setLocalTheme(prev => ({
      ...prev,
      fonts: {
        ...prev.fonts,
        [key]: value
      }
    }));
  };

  const fontOptions = [
    'Geist',
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Georgia',
    'Verdana',
    'Inter',
    'Roboto',
    'Open Sans',
  ];

  const saveTheme = () => {
    updateTheme(localTheme);
    alert('Theme settings saved!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Theme Configuration</h1>
            <p className="mt-2 text-gray-600">Customize your website&apos;s appearance</p>
          </div>

          {/* Color Configuration */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(localTheme.colors).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {key} Color
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => handleColorChange(key as keyof ThemeColors, e.target.value)}
                      className="h-10 w-20 rounded border border-gray-300"
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleColorChange(key as keyof ThemeColors, e.target.value)}
                      className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="#000000"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Font Configuration */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Fonts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(localTheme.fonts).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {key} Font
                  </label>
                  <select
                    value={value}
                    onChange={(e) => handleFontChange(key as 'heading' | 'body', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  >
                    {fontOptions.map((font) => (
                      <option key={font} value={font}>
                        {font}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </section>

          {/* Preview Section */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Preview</h2>
            <div 
              className="p-6 rounded-lg"
              style={{ backgroundColor: localTheme.colors.background }}
            >
              <h3 
                className="text-2xl mb-4"
                style={{ 
                  color: localTheme.colors.primary,
                  fontFamily: localTheme.fonts.heading
                }}
              >
                Heading Preview
              </h3>
              <p
                className="mb-4"
                style={{ 
                  color: localTheme.colors.text,
                  fontFamily: localTheme.fonts.body
                }}
              >
                This is how your content will look with the selected theme.
              </p>
              <button
                className="px-4 py-2 rounded"
                style={{ 
                  backgroundColor: localTheme.colors.accent,
                  color: localTheme.colors.background
                }}
              >
                Sample Button
              </button>
            </div>
          </section>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={saveTheme}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Theme Settings
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 