import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Rocket, Calendar, Users } from "lucide-react";

const SpaceTicketBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    passengers: '1'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ticket Booked!",
      description: `Your journey to Mars is scheduled for ${formData.date}. Get ready for the adventure!`,
    });
  };

  return (
    <Card className="p-6 bg-space-black/90 text-white">
      <h2 className="text-2xl font-bold mb-4">Book Your Mars Trip</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
            className="bg-white/10 text-white placeholder:text-white/50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Travel Date</label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="bg-white/10 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Number of Passengers</label>
          <Input
            type="number"
            min="1"
            max="5"
            value={formData.passengers}
            onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
            className="bg-white/10 text-white"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          <Rocket className="w-4 h-4 mr-2" />
          Book Your Trip
        </Button>
      </form>
    </Card>
  );
};

export default SpaceTicketBooking;