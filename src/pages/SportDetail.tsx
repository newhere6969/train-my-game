import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import basketballImg from "@/assets/basketball.jpg";
import footballImg from "@/assets/football.jpg";
import tennisImg from "@/assets/tennis.jpg";
import swimmingImg from "@/assets/swimming.jpg";
import runningImg from "@/assets/running.jpg";
import cyclingImg from "@/assets/cycling.jpg";

const sportsData: Record<string, any> = {
  basketball: {
    name: "Basketball",
    image: basketballImg,
    description: "Master all aspects of basketball from fundamentals to advanced techniques",
    tutorials: [
      { id: 1, title: "Perfect Your Shooting Form", level: "Beginner", duration: "15 min", focus: "Technique" },
      { id: 2, title: "Advanced Dribbling Combos", level: "Advanced", duration: "25 min", focus: "Skills" },
      { id: 3, title: "Defensive Positioning", level: "Intermediate", duration: "20 min", focus: "Strategy" },
      { id: 4, title: "Pick and Roll Mastery", level: "Advanced", duration: "30 min", focus: "Team Play" },
      { id: 5, title: "Free Throw Consistency", level: "Beginner", duration: "12 min", focus: "Technique" },
    ],
  },
  football: {
    name: "Football/Soccer",
    image: footballImg,
    description: "Develop your football skills from ball control to tactical awareness",
    tutorials: [
      { id: 1, title: "Ball Control Mastery", level: "Beginner", duration: "18 min", focus: "Technique" },
      { id: 2, title: "Passing & Vision Training", level: "Intermediate", duration: "22 min", focus: "Skills" },
      { id: 3, title: "Set Piece Tactics", level: "Advanced", duration: "30 min", focus: "Strategy" },
      { id: 4, title: "1v1 Dribbling Skills", level: "Intermediate", duration: "20 min", focus: "Skills" },
      { id: 5, title: "Finishing in the Box", level: "Advanced", duration: "25 min", focus: "Scoring" },
    ],
  },
  tennis: {
    name: "Tennis",
    image: tennisImg,
    description: "Improve your tennis game with comprehensive stroke and strategy training",
    tutorials: [
      { id: 1, title: "Serve Power & Accuracy", level: "Intermediate", duration: "20 min", focus: "Technique" },
      { id: 2, title: "Baseline Consistency", level: "Beginner", duration: "25 min", focus: "Skills" },
      { id: 3, title: "Match Psychology", level: "Advanced", duration: "35 min", focus: "Mental" },
      { id: 4, title: "Volley Technique", level: "Intermediate", duration: "18 min", focus: "Net Play" },
      { id: 5, title: "Spin Control", level: "Advanced", duration: "28 min", focus: "Technique" },
    ],
  },
  swimming: {
    name: "Swimming",
    image: swimmingImg,
    description: "Enhance your swimming technique across all strokes and distances",
    tutorials: [
      { id: 1, title: "Freestyle Technique", level: "Beginner", duration: "20 min", focus: "Stroke" },
      { id: 2, title: "Butterfly Mastery", level: "Advanced", duration: "30 min", focus: "Stroke" },
      { id: 3, title: "Breathing Efficiency", level: "Intermediate", duration: "15 min", focus: "Technique" },
      { id: 4, title: "Flip Turn Perfection", level: "Intermediate", duration: "18 min", focus: "Technique" },
      { id: 5, title: "Endurance Building", level: "Advanced", duration: "35 min", focus: "Stamina" },
    ],
  },
  running: {
    name: "Running",
    image: runningImg,
    description: "Optimize your running form and build endurance for all distances",
    tutorials: [
      { id: 1, title: "Proper Running Form", level: "Beginner", duration: "15 min", focus: "Technique" },
      { id: 2, title: "Sprint Training", level: "Advanced", duration: "25 min", focus: "Speed" },
      { id: 3, title: "Marathon Pacing", level: "Advanced", duration: "30 min", focus: "Strategy" },
      { id: 4, title: "Hill Running Technique", level: "Intermediate", duration: "20 min", focus: "Strength" },
      { id: 5, title: "Injury Prevention", level: "Beginner", duration: "18 min", focus: "Health" },
    ],
  },
  cycling: {
    name: "Cycling",
    image: cyclingImg,
    description: "Master cycling techniques for speed, endurance, and technical terrain",
    tutorials: [
      { id: 1, title: "Pedaling Efficiency", level: "Beginner", duration: "15 min", focus: "Technique" },
      { id: 2, title: "Climbing Hills", level: "Intermediate", duration: "22 min", focus: "Strength" },
      { id: 3, title: "Descending Safely", level: "Intermediate", duration: "18 min", focus: "Safety" },
      { id: 4, title: "Time Trial Position", level: "Advanced", duration: "25 min", focus: "Aerodynamics" },
      { id: 5, title: "Group Riding Skills", level: "Intermediate", duration: "20 min", focus: "Strategy" },
    ],
  },
};

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

const SportDetail = () => {
  const { sportId } = useParams();
  const sport = sportId ? sportsData[sportId] : null;

  if (!sport) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Sport Not Found</h1>
          <Link to="/">
            <Button variant="hero">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-96 overflow-hidden">
        <img
          src={sport.image}
          alt={sport.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sports
            </Button>
          </Link>
          <h1 className="text-5xl font-bold mb-4">{sport.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {sport.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Training Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sport.tutorials.map((tutorial: any) => (
            <Link key={tutorial.id} to={`/tutorial/${sportId}/${tutorial.id}`}>
              <Card className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
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
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SportDetail;
