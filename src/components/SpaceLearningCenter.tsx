import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const SpaceLearningCenter = () => {
  const { toast } = useToast();

  const handleStartLesson = () => {
    toast({
      title: "Starting AR Lesson",
      description: "Preparing your space learning experience...",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-themes-galactic-text dark:text-themes-nebula-text">
        Space Learning Center
      </h2>
      
      <Tabs defaultValue="lessons" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-themes-galactic-background dark:bg-themes-nebula-background">
          <TabsTrigger value="lessons">AR Lessons</TabsTrigger>
          <TabsTrigger value="simulation">Zero-G Training</TabsTrigger>
          <TabsTrigger value="games">Space Games</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">AR Space Lessons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Solar System Explorer</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Experience an interactive journey through our solar system
                </p>
                <Button onClick={handleStartLesson}>Start Lesson</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="simulation">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Astronaut Training</h3>
            <div className="space-y-4">
              <div className="bg-themes-galactic-background dark:bg-themes-nebula-background p-4 rounded-lg">
                <h4 className="font-medium">Zero Gravity Simulation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Learn how to move in zero gravity conditions
                </p>
                <Button variant="outline">Launch Simulation</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="games">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Space Games</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-themes-galactic-background dark:bg-themes-nebula-background p-4 rounded-lg">
                <h4 className="font-medium">Mars Landing Challenge</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Pilot your spacecraft to a safe landing
                </p>
                <Button variant="secondary">Play Now</Button>
              </div>
              <div className="bg-themes-galactic-background dark:bg-themes-nebula-background p-4 rounded-lg">
                <h4 className="font-medium">Space Trivia</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Test your space knowledge
                </p>
                <Button variant="secondary">Start Quiz</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpaceLearningCenter;