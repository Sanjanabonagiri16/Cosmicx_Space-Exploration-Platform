import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Volume2, Mic } from "lucide-react";

const AIChatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.warn('Speech recognition is not supported in this browser.');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
      handleVoiceCommand(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      recognition.abort();
    };
  }, []);

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    if (lowerCommand.includes('show me mars')) {
      // Handle Mars command
      setResponse("Navigating to Mars visualization...");
    } else {
      handleSubmit(new Event('submit') as any);
    }
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive",
      });
      return;
    }

    setIsListening(true);
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.start();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate AI response for now
      setTimeout(() => {
        setResponse("Here's some interesting information about space: The International Space Station orbits Earth at approximately 17,500 miles per hour!");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from AI",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card className="p-6 bg-space-black/90 text-white">
      <h2 className="text-2xl font-bold mb-4">Ask CosmicX</h2>
      <div className="space-y-4">
        {response && (
          <div className="bg-space-purple/20 p-4 rounded-lg">
            <p>{response}</p>
            <Button variant="outline" size="sm" className="mt-2" onClick={() => speak(response)}>
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
          <Button
            type="button"
            variant="outline"
            onClick={startListening}
            disabled={isListening}
          >
            <Mic className={`w-4 h-4 ${isListening ? 'text-red-500' : ''}`} />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default AIChatbot;