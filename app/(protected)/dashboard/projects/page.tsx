"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface IdeaResult {
  tagline: string;
  problem: string;
  solution: string;
  target_market: string;
  unique_value_proposition: string;
  business_model: string;
  [key: string]: any;
}

export default function ProjectsPage() {
  const [industry, setIndustry] = useState("");
  const [technologyFocus, setTechnologyFocus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<IdeaResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Handle progress bar animation during loading
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timer: NodeJS.Timeout;
    
    if (isLoading) {
      setProgress(0);
      setElapsedTime(0);
      
      // Animate progress bar
      interval = setInterval(() => {
        setProgress(prev => {
          // Slow down progress as it approaches 90%
          if (prev < 30) return prev + 1;
          if (prev < 60) return prev + 0.7;
          if (prev < 85) return prev + 0.3;
          if (prev < 90) return prev + 0.1;
          return prev;
        });
      }, 300);
      
      // Track elapsed time
      timer = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      clearInterval(interval);
      clearInterval(timer);
      if (!isLoading) {
        setProgress(100);
      }
    };
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch("https://agents-api-ucmd.onrender.com/generate-ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          industry,
          technology_focus: technologyFocus,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      // Extract ideas array from the response
      // If data.ideas exists, use it; otherwise check if data itself is an array
      const ideasArray = data.ideas || (Array.isArray(data) ? data : []);
      
      setResults(ideasArray);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const formatElapsedTime = () => {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    return `${minutes > 0 ? `${minutes}m ` : ''}${seconds}s`;
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Startup Idea Generator</h1>
        <Badge variant="outline" className="px-3 py-1">
          CrewAI Powered
        </Badge>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Generate New Ideas</CardTitle>
          <CardDescription>
            Use AI to generate startup ideas based on industry and technology focus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  placeholder="e.g. Healthcare, Finance, Education"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="technology">Technology Focus</Label>
                <Input
                  id="technology"
                  placeholder="e.g. AI, Blockchain, IoT"
                  value={technologyFocus}
                  onChange={(e) => setTechnologyFocus(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                "Generate Ideas"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {isLoading && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Processing Request
            </CardTitle>
            <CardDescription>
              Our AI agents are collaborating to generate startup ideas for you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Elapsed time: {formatElapsedTime()}</span>
              <span>This may take up to 60 seconds</span>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-md">
              <h3 className="font-medium mb-2">What's happening?</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Multiple AI agents are working together to:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                <li>Generate innovative startup ideas</li>
                <li>Research market potential</li>
                <li>Evaluate technical feasibility</li>
                <li>Assess business viability</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={() => setError(null)}
            >
              Dismiss
            </Button>
          </AlertDescription>
        </Alert>
      )}
      
      {results && results.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Generated Ideas</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setIndustry("");
                setTechnologyFocus("");
                setResults(null);
              }}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              New Request
            </Button>
          </div>
          
          {Array.isArray(results) && results.map((idea, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{idea.name || `Startup Idea ${index + 1}`}</CardTitle>
                    <CardDescription className="mt-1">
                      {industry} × {technologyFocus}
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    AI Generated
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <p className="mb-6 text-lg italic">{idea.tagline || 'No tagline available'}</p>
                
                <div className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-md border-l-4 border-blue-500">
                    <h3 className="font-medium mb-2 text-blue-700 dark:text-blue-400">Problem</h3>
                    <p>{idea.problem || 'No problem description available'}</p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-md border-l-4 border-green-500">
                    <h3 className="font-medium mb-2 text-green-700 dark:text-green-400">Solution</h3>
                    <p>{idea.solution || 'No solution description available'}</p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-md border-l-4 border-teal-500">
                    <h3 className="font-medium mb-2 text-teal-700 dark:text-teal-400">Unique Value Proposition</h3>
                    <p>{idea.unique_value_proposition || 'No unique value proposition available'}</p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-md border-l-4 border-purple-500">
                    <h3 className="font-medium mb-2 text-purple-700 dark:text-purple-400">Target Market</h3>
                    <p>{idea.target_market || 'No target market information available'}</p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-md border-l-4 border-amber-500">
                    <h3 className="font-medium mb-2 text-amber-700 dark:text-amber-400">Business Model</h3>
                    <p>{idea.business_model || 'No business model information available'}</p>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="bg-muted/20 flex justify-between">
                <Button variant="outline" size="sm">Save Idea</Button>
                <Button variant="outline" size="sm">Export</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
