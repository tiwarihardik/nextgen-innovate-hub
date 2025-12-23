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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ⛔ SharkTank removed from schema
const formSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/),
  schoolName: z.string().trim().min(2).max(200),
  grade: z.string().min(1),
  stream: z.string().min(1),
  otherStream: z.string().trim().max(100).optional(),
  city: z.string().trim().min(2).max(100),
  pincode: z.string().trim().regex(/^\d{6}$/),

  // ONLY STOCKATHON
  eventType: z.enum(["stockathon"], {
    required_error: "Please select an event",
  }),

  whyParticipate: z.string().trim().min(10).max(1000),
  termsAccepted: z.boolean().refine((v) => v === true, {
    message: "You must accept the terms and conditions",
  }),
  refBy: z.string().optional(),
  otherRefBy: z.string().trim().max(100).optional(),
  couponCode: z.string().trim().max(50).optional(),
});

const Register = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      schoolName: "",
      grade: "",
      stream: "",
      otherStream: "",
      city: "",
      pincode: "",
      eventType: "stockathon", // auto-selected
      whyParticipate: "",
      termsAccepted: false,
      refBy: "",
      otherRefBy: "",
      couponCode: "",
    },
  });

  async function onSubmit(values) {
    try {
      const nocodbData = {
        fields: {
          Name: values.fullName,
          "Email Address": values.email,
          "Phone Number": values.phone,
          "School Name": values.schoolName,
          "Grade/Class": `Grade ${values.grade}`,
          Stream:
            values.stream === "other" && values.otherStream
              ? values.otherStream
              : values.stream.charAt(0).toUpperCase() + values.stream.slice(1),
          City: values.city,
          Pincode: values.pincode,

          // Only Stockathon
          Event: ["Stockathon"],

          "Why Participate?": values.whyParticipate,
          Consent: values.termsAccepted,
          "Ref By":
            values.refBy === "other" && values.otherRefBy
              ? values.otherRefBy
              : values.refBy || "",
          "Coupon Code": values.couponCode || "",
        },
      };

      const response = await fetch(
        "https://app.nocodb.com/api/v3/data/plgoklu3xqf2kkn/md6djzreivx8f87/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xc-token": "PDJyOuaf-4PQXeK4UBMumQi4AW6EfrG_NauageBo",
          },
          body: JSON.stringify(nocodbData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit registration");
      }

      toast.success(
        "Registration successful! You'll receive a confirmation email within 24-48 hours."
      );
      form.reset();
    } catch (error) {
      toast.error("Failed to submit registration. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gradient-to-br from-accent/10 via-background to-primary/10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Free Banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🎉</span>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold">
                    REGISTRATIONS ARE NOW FREE!
                  </p>
                  <p className="text-sm opacity-90">
                    Starting 2nd December 2025 – Limited time offer!
                  </p>
                </div>
                <span className="text-3xl">🎉</span>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Register for GNU NextGen Summit 2026
              </h1>
              <p className="text-xl text-muted-foreground">
                Join India's brightest student minds
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm border-2 border-accent/20">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Personal Information</h2>

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
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                {...field}
                              />
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
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="9876543210"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* School Info */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">School Information</h2>

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
                            <FormLabel>Grade *</FormLabel>
                            <Select onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select grade" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
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
                        name="stream"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stream *</FormLabel>
                            <Select onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select stream" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="commerce">Commerce</SelectItem>
                                <SelectItem value="arts">Arts</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Other Stream */}
                    {form.watch("stream") === "other" && (
                      <FormField
                        control={form.control}
                        name="otherStream"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Specify Stream *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter stream" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="pincode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pincode *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter 6-digit pincode" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Event Selection – ONLY STOCKATHON */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Event Registration</h2>

                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Select Event *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue="stockathon"
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2 bg-muted/50 p-4 rounded-lg border">
                                <RadioGroupItem value="stockathon" id="stockathon" />
                                <Label htmlFor="stockathon" className="cursor-pointer">
                                  <div className="font-semibold">Stockathon</div>
                                  <div className="text-sm text-muted-foreground">
                                    Trade stocks in a simulated market environment
                                  </div>
                                </Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Why Participate */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Tell Us More</h2>

                    <FormField
                      control={form.control}
                      name="whyParticipate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Why do you want to participate? *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Share your motivation..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Minimum 10 characters
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Referral */}
                    <FormField
                      control={form.control}
                      name="refBy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Referred By (Optional)</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select referral source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="nisa">NISA</SelectItem>
                              <SelectItem value="fap">FAP</SelectItem>
                              <SelectItem value="triniti">TRINITi</SelectItem>
                              <SelectItem value="eduthon">Eduthon</SelectItem>
                              <SelectItem value="gnu">GNU</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {form.watch("refBy") === "other" && (
                      <FormField
                        control={form.control}
                        name="otherRefBy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Specify Referral *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter referral" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {/* Coupon Code */}
                    <FormField
                      control={form.control}
                      name="couponCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Coupon Code (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter coupon code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Terms */}
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 rounded-md border p-4 bg-muted/50">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel>I accept the terms and conditions *</FormLabel>
                          <FormDescription>
                            You agree to participate and follow all event rules.
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Submit */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 text-lg font-semibold"
                    >
                      Complete Free Registration
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      You'll receive a confirmation email within 24–48 hours.
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
