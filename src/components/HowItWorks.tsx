import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Select Your Sport",
    description: "Choose from 50+ sports and athletic disciplines. Tell us your current skill level and training goals.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our machine learning algorithm analyzes your profile, performance data, and training history.",
  },
  {
    icon: Sparkles,
    title: "Personalized Plan",
    description: "Receive customized training recommendations, technique tutorials, and progression paths.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your improvement with detailed analytics and adjust your training as you advance.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How Our AI Training Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge machine learning meets sports science to deliver personalized training at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              <div className="mt-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-hero border border-primary/20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-3xl font-bold">Advanced ML Technology</h3>
            <p className="text-lg text-muted-foreground">
              Our platform uses neural networks trained on thousands of hours of professional athlete data, 
              biomechanical analysis, and sports science research to provide recommendations that adapt to your unique physiology and learning style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
