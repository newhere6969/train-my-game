import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const tutorialCategories = [
  {
    sport: "Basketball",
    icon: "🏀",
    tutorials: [
      {
        title: "Perfect Your Shooting Form",
        level: "Beginner",
        duration: "15 min",
        focus: "Technique",
      },
      {
        title: "Advanced Dribbling Combos",
        level: "Advanced",
        duration: "25 min",
        focus: "Skills",
      },
      {
        title: "Defensive Positioning",
        level: "Intermediate",
        duration: "20 min",
        focus: "Strategy",
      },
    ],
  },
  {
    sport: "Football/Soccer",
    icon: "⚽",
    tutorials: [
      {
        title: "Ball Control Mastery",
        level: "Beginner",
        duration: "18 min",
        focus: "Technique",
      },
      {
        title: "Passing & Vision Training",
        level: "Intermediate",
        duration: "22 min",
        focus: "Skills",
      },
      {
        title: "Set Piece Tactics",
        level: "Advanced",
        duration: "30 min",
        focus: "Strategy",
      },
    ],
  },
  {
    sport: "Tennis",
    icon: "🎾",
    tutorials: [
      {
        title: "Serve Power & Accuracy",
        level: "Intermediate",
        duration: "20 min",
        focus: "Technique",
      },
      {
        title: "Baseline Consistency",
        level: "Beginner",
        duration: "25 min",
        focus: "Skills",
      },
      {
        title: "Match Psychology",
        level: "Advanced",
        duration: "35 min",
        focus: "Mental",
      },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    case "Advanced":
      return "bg-red-500/10 text-red-500 border-red-500/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

const TutorialSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Training Tutorials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step-by-step guides to improve every aspect of your game
          </p>
        </div>

        <div className="space-y-12">
          {tutorialCategories.map((category) => (
            <div key={category.sport}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-3xl font-bold">{category.sport}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.tutorials.map((tutorial, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <Badge className={getLevelColor(tutorial.level)}>
                          {tutorial.level}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {tutorial.duration}
                        </div>
                      </div>

                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {tutorial.title}
                      </h4>

                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          Focus: {tutorial.focus}
                        </span>
                      </div>

                      <Button variant="secondary" className="w-full mt-4">
                        Start Tutorial
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="hero" size="lg">
            View All Tutorials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
