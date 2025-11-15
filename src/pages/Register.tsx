import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, MapPin, Trophy, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Invalid Indian phone number" }),
  schoolName: z
    .string()
    .trim()
    .min(2, { message: "School name is required" })
    .max(200, { message: "School name must be less than 200 characters" }),
  grade: z.string().min(1, { message: "Please select your grade" }),
  city: z
    .string()
    .trim()
    .min(2, { message: "City is required" })
    .max(100, { message: "City must be less than 100 characters" }),
  eventType: z.enum(["stockathon", "shark-tank", "both"], {
    required_error: "Please select an event",
  }),
  teamName: z
    .string()
    .trim()
    .max(100, { message: "Team name must be less than 100 characters" })
    .optional(),
  teamMembers: z
    .string()
    .trim()
    .max(500, { message: "Team members must be less than 500 characters" })
    .optional(),
  whyParticipate: z
    .string()
    .trim()
    .min(10, { message: "Please tell us why you want to participate (at least 10 characters)" })
    .max(1000, { message: "Response must be less than 1000 characters" }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      schoolName: "",
      grade: "",
      city: "",
      eventType: undefined,
      teamName: "",
      teamMembers: "",
      whyParticipate: "",
      termsAccepted: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Registration submitted successfully! We'll contact you soon.");
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Register for GNU NextGen Summit 2026
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Join India's brightest student minds
              </p>

              {/* Event Details */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-card rounded-lg p-4 text-center border border-border">
                  <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Register By</div>
                  <div className="font-bold text-foreground">4th Dec 2025</div>
                </div>
                
                <div className="bg-card rounded-lg p-4 text-center border border-border">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Grand Finale</div>
                  <div className="font-bold text-foreground">Vivanta, Hyderabad</div>
                </div>
                
                <div className="bg-card rounded-lg p-4 text-center border border-border">
                  <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Prize Pool</div>
                  <div className="font-bold text-foreground">₹50,000</div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm border-2 border-accent/20">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Personal Information</h2>
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* School Information */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground mb-4">School Information</h2>
                    
                    <FormField
                      control={form.control}
                      name="schoolName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>School Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your school name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="grade"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Grade/Class *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your grade" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="9">Grade 9</SelectItem>
                                <SelectItem value="10">Grade 10</SelectItem>
                                <SelectItem value="11">Grade 11</SelectItem>
                                <SelectItem value="12">Grade 12</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Event Selection */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Event Registration</h2>
                    
                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Which event(s) would you like to participate in? *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2 bg-muted/50 p-4 rounded-lg border border-border">
                                <RadioGroupItem value="stockathon" id="stockathon" />
                                <Label htmlFor="stockathon" className="flex-grow cursor-pointer">
                                  <div className="font-semibold">Stockathon</div>
                                  <div className="text-sm text-muted-foreground">
                                    Trade stocks in a simulated market environment
                                  </div>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 bg-muted/50 p-4 rounded-lg border border-border">
                                <RadioGroupItem value="shark-tank" id="shark-tank" />
                                <Label htmlFor="shark-tank" className="flex-grow cursor-pointer">
                                  <div className="font-semibold">Mini SharkTank</div>
                                  <div className="text-sm text-muted-foreground">
                                    Pitch your business idea to investors
                                  </div>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 bg-muted/50 p-4 rounded-lg border border-border">
                                <RadioGroupItem value="both" id="both" />
                                <Label htmlFor="both" className="flex-grow cursor-pointer">
                                  <div className="font-semibold">Both Events</div>
                                  <div className="text-sm text-muted-foreground">
                                    Participate in Stockathon and Mini SharkTank
                                  </div>
                                </Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teamName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your team name if applicable" {...field} />
                          </FormControl>
                          <FormDescription>
                            Leave blank if participating individually or team not yet formed
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teamMembers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Members (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="List your team members' names (one per line)"
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Enter names of other team members if you have already formed a team
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Tell Us More</h2>
                    
                    <FormField
                      control={form.control}
                      name="whyParticipate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Why do you want to participate in GNU NextGen Summit 2026? *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your motivation, goals, or what you hope to learn..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Tell us what excites you about this summit (minimum 10 characters)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-muted/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="cursor-pointer">
                            I accept the terms and conditions *
                          </FormLabel>
                          <FormDescription>
                            I agree to participate in the GNU NextGen Summit 2026 and follow all event guidelines and rules.
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(12,88%,55%)] hover:opacity-90 transition-opacity text-lg py-6 text-white font-semibold"
                    >
                      Submit Registration
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      You'll receive a confirmation email within 24-48 hours
                    </p>
                  </div>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
