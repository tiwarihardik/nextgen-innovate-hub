import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock, Zap } from "lucide-react";

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
      const targetDate = new Date("2025-12-13T23:59:59").getTime();
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
      <Card className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm border-2 border-accent p-8 shadow-xl">
        <div className="text-center">
          <p className="text-2xl font-bold text-accent">Registration Closed</p>
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
    <Card className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-primary/5 to-accent/10 backdrop-blur-sm border-2 border-accent/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Registration Closing Soon!
          </h3>
        </div>
        
        <div className="grid grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-20 rounded-xl blur-sm group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-accent to-primary rounded-xl p-4 md:p-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl md:text-5xl font-bold text-white tabular-nums drop-shadow-lg">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Deadline: <span className="font-semibold text-accent">13th December 2025, 11:59 PM</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CountdownTimer;
