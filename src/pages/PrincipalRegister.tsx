import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const schema = z.object({
  principalName: z.string().min(2, "Name is required"),
  designation: z.string().min(2, "Designation is required"),
  schoolName: z.string().min(2, "School/College name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid phone number"),

  // NEW FIELD (Only 1 field, no 'otherRef')
  refBy: z.string().min(1, "Required"),
});

const PrincipalRegister = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      principalName: "",
      designation: "",
      schoolName: "",
      email: "",
      phone: "",
      refBy: "",
    },
  });

  async function onSubmit(values) {
    try {
      const payload = {
        fields: {
          "Principal Name": values.principalName,
          Designation: values.designation,
          "School / College Name": values.schoolName,
          Email: values.email,
          Phone: values.phone,
          "Referred By": values.refBy, // directly save value
        },
      };

      const res = await fetch(
        "https://db.megamindco.com/api/v3/data/pmptxup2eg28i91/m2bra90hvfdy4gc/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xc-token": "QqpcG3p4yhTWyDaLOVD1tE17lVZCSi8pw4Dvr7O_",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Request failed");

      toast.success("Principal details submitted successfully!");
      form.reset();
    } catch (error) {
      toast.error("Submission failed. Please try again.");
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

                {/* Designation */}
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation *</FormLabel>
                      <FormControl>
                        <Input placeholder="Principal / Vice Principal / Director" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* School Name */}
                <FormField
                  control={form.control}
                  name="schoolName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School / College Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter institution name" {...field} />
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
                          <Input type="email" placeholder="principal@example.com" {...field} />
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

                {/* REFERRED BY */}
                <FormField
                  control={form.control}
                  name="refBy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Referred By *</FormLabel>
                      <FormControl>
                        <select
                          className="border rounded-md p-3"
                          value={field.value}
                          onChange={field.onChange}
                        >
                          <option value="">Select</option>
                          <option value="triniti">TRINITi</option>
                          <option value="fap">FAP</option>
                          <option value="nisa">NISA</option>
                          <option value="aip">AIP</option>
                          <option value="gnu">GNU</option>
                          <option value="others">Others</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full py-6 bg-orange-600 text-white text-lg" type="submit">
                  Submit Details
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
