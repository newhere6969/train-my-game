import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(22, 32, 46, 0.95) 0%, rgba(32, 61, 97, 0.85) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">AI-Powered Training Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Personalized Sports Training
            <span className="block text-primary mt-2">Powered by Machine Learning</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your athletic performance with AI-driven training recommendations. 
            Get customized workouts, technique guides, and performance insights across multiple sports.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div>
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Sports Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">Training Tutorials</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
