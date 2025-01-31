import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Volume2 } from "lucide-react";

const AIChatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate AI response for now - will integrate with actual API later
    setTimeout(() => {
      setResponse("Here's some interesting information about space: The International Space Station orbits Earth at approximately 17,500 miles per hour!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="p-6 bg-space-black/90 text-white">
      <h2 className="text-2xl font-bold mb-4">Space AI Assistant</h2>
      <div className="space-y-4">
        {response && (
          <div className="bg-space-purple/20 p-4 rounded-lg">
            <p>{response}</p>
            <Button variant="outline" size="sm" className="mt-2">
              <Volume2 className="w-4 h-4 mr-2" />
              Listen
            </Button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about space..."
            className="bg-white/10 text-white placeholder:text-white/50"
          />
          <Button type="submit" disabled={isLoading}>
            <MessageSquare className="w-4 h-4 mr-2" />
            Ask
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default AIChatbot;