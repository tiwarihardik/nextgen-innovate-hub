import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const schema = z.object({
  principalName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  schoolName: z.string().min(2).max(200),
  city: z.string().min(2).max(100),
  pincode: z.string().regex(/^\d{6}$/),
  message: z.string().min(5).max(1000),
  termsAccepted: z.boolean().refine((v) => v === true, {
    message: "You must accept the terms",
  }),
});

const PrincipalRegister = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      principalName: "",
      email: "",
      phone: "",
      schoolName: "",
      city: "",
      pincode: "",
      message: "",
      termsAccepted: false,
    },
  });

  async function onSubmit(values) {
    try {
      const nocodbPayload = {
        fields: {
          "Principal Name": values.principalName,
          Email: values.email,
          Phone: values.phone,
          "School / College Name": values.schoolName,
          City: values.city,
          Pincode: values.pincode,
          Message: values.message,
          Consent: values.termsAccepted,
        },
      };

      const res = await fetch(
        "https://db.megamindco.com/api/v3/data/pmptxup2eg28i91/<YOUR_TABLE_ID>/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xc-token": "QqpcG3p4yhTWyDaLOVD1tE17lVZCSi8pw4Dvr7O_",
          },
          body: JSON.stringify(nocodbPayload),
        }
      );

      if (!res.ok) throw new Error("Failed");

      toast.success("Principal data submitted successfully!");
      form.reset();
    } catch (err) {
      toast.error("Submission failed!");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="p-8 border-2 border-accent/20">
            <h1 className="text-4xl font-bold text-center mb-8">
              Principal Registration
            </h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Principal Name */}
                <FormField
                  control={form.control}
                  name="principalName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Principal Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* School */}
                <FormField
                  control={form.control}
                  name="schoolName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School / College Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter school name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="principal@school.com" {...field} />
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
                          <Input placeholder="9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* City + Pincode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
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
                          <Input placeholder="6-digit pincode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Write your message..." {...field} />
                      </FormControl>
                      <FormDescription>Min 5 characters</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Terms */}
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 border p-4 rounded-md">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div>
                        <FormLabel>I agree to be contacted *</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full py-6 bg-orange-600 text-white" type="submit">
                  Submit Principal Registration
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrincipalRegister;
