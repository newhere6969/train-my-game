import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Target, CheckCircle2, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TutorialDetail = () => {
  const { sportId, tutorialId } = useParams();

  const tutorialSteps = [
    { title: "Warm-up & Preparation", duration: "3 min", description: "Proper warm-up exercises to prepare your body" },
    { title: "Understanding the Fundamentals", duration: "5 min", description: "Core principles and body mechanics" },
    { title: "Step-by-Step Technique", duration: "8 min", description: "Detailed breakdown of proper form" },
    { title: "Common Mistakes to Avoid", duration: "4 min", description: "Identifying and correcting errors" },
    { title: "Practice Drills", duration: "10 min", description: "Exercises to reinforce learning" },
    { title: "Cool Down & Recovery", duration: "3 min", description: "Post-training stretches and recovery" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <Link to={`/sport/${sportId}`}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {sportId}
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Beginner
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>33 min total</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                Tutorial Training Session
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                A comprehensive guide to mastering this skill with AI-powered insights and personalized recommendations.
              </p>

              <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center mb-8 border border-border">
                <PlayCircle className="w-20 h-20 text-primary" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Training Steps</h2>
              <div className="space-y-4">
                {tutorialSteps.map((step, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <span className="text-sm text-muted-foreground">{step.duration}</span>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border sticky top-24">
              <h3 className="text-xl font-bold mb-4">Tutorial Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Focus Area</div>
                    <div className="font-semibold">Technique</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Difficulty</div>
                    <div className="font-semibold">Beginner Friendly</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Total Duration</div>
                    <div className="font-semibold">33 minutes</div>
                  </div>
                </div>
              </div>
              <Button variant="hero" className="w-full mt-6">
                Start Training
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-hero border-primary/20">
              <h3 className="text-lg font-bold mb-2">AI Recommendation</h3>
              <p className="text-sm text-muted-foreground">
                Based on your skill level and training history, this tutorial is perfectly suited for your current progress.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TutorialDetail;
