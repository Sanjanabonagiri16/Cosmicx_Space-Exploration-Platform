import React from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-black text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">Contact Us</h1>
        
        <Card className="bg-gray-900/50 p-6 backdrop-blur-lg border-blue-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                className="bg-gray-800/50 border-blue-500/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-gray-800/50 border-blue-500/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                className="bg-gray-800/50 border-blue-500/20 min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </Card>

        <Card className="mt-8 bg-gray-900/50 p-6 backdrop-blur-lg border-blue-500/20">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">Other Ways to Reach Us</h2>
          <div className="space-y-2 text-gray-300">
            <p>Email: contact@cosmicx.space</p>
            <p>Twitter: @CosmicX_Space</p>
            <p>Discord: Join our community</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;