import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import basketballImg from "@/assets/basketball.jpg";
import footballImg from "@/assets/football.jpg";
import tennisImg from "@/assets/tennis.jpg";
import swimmingImg from "@/assets/swimming.jpg";
import runningImg from "@/assets/running.jpg";
import cyclingImg from "@/assets/cycling.jpg";

const sports = [
  {
    name: "Basketball",
    slug: "basketball",
    image: basketballImg,
    tutorials: 45,
    description: "Master dribbling, shooting, defense, and game strategy",
  },
  {
    name: "Football/Soccer",
    slug: "football",
    image: footballImg,
    tutorials: 52,
    description: "Perfect your ball control, passing, and tactical awareness",
  },
  {
    name: "Tennis",
    slug: "tennis",
    image: tennisImg,
    tutorials: 38,
    description: "Improve serves, volleys, footwork, and match tactics",
  },
  {
    name: "Swimming",
    slug: "swimming",
    image: swimmingImg,
    tutorials: 34,
    description: "Enhance technique for all strokes and build endurance",
  },
  {
    name: "Running",
    slug: "running",
    image: runningImg,
    tutorials: 41,
    description: "Optimize form, pacing, and distance training plans",
  },
  {
    name: "Cycling",
    slug: "cycling",
    image: cyclingImg,
    tutorials: 29,
    description: "Master bike handling, climbing, and endurance rides",
  },
];

const SportsGrid = () => {
  return (
    <section id="sports" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Sport
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training guides and AI-powered recommendations for every discipline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport) => (
            <Link key={sport.name} to={`/sport/${sport.slug}`}>
              <Card className="group relative overflow-hidden bg-gradient-card border-border hover:shadow-glow transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 rounded-full text-xs font-semibold">
                    {sport.tutorials} Tutorials
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{sport.name}</h3>
                  <p className="text-muted-foreground">{sport.description}</p>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:text-primary"
                  >
                    Explore Tutorials
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsGrid;
