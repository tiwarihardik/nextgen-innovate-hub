import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-12-04T23:59:59").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isExpired) {
    return (
      <Card className="bg-card/80 backdrop-blur-sm border-2 border-accent p-6 shadow-lg">
        <div className="text-center">
          <p className="text-lg font-bold text-accent">Registration Closed</p>
        </div>
      </Card>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-2 border-accent/30 p-6 shadow-lg hover:border-accent/50 transition-all">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-accent" />
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Registration Closes In
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <div className="bg-gradient-to-br from-accent to-primary rounded-lg p-3 mb-2 shadow-md">
              <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CountdownTimer;
