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

/* =========================
   CORPORATE REGISTRATION
   (ALL FIELDS OPTIONAL)
   ========================= */

const corporateSchema = z.object({
  name: z.string().optional(),
  designation: z.string().optional(),
  companyName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  refBy: z.string().optional(),
});

const CorporateRegister = () => {
  const form = useForm({
    resolver: zodResolver(corporateSchema),
    defaultValues: {
      name: "",
      designation: "",
      companyName: "",
      email: "",
      phone: "",
      refBy: "",
    },
  });

  async function onSubmit(values) {
    try {
      const payload = {
        fields: {
          Name: values.name || "",
          Designation: values.designation || "",
          "Company Name": values.companyName || "",
          Email: values.email || "",
          Phone: values.phone || "",
          "Referred By": values.refBy || "",
        },
      };

      const res = await fetch(
        "https://db.megamindco.com/api/v2/tables/m46c9xavtctgenb/records?viewId=vw13akszrw06xac5",
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

      toast.success("Corporate registration submitted successfully!");
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
              Corporate Registration
            </h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation</FormLabel>
                      <FormControl>
                        <Input placeholder="HR / Manager / Director" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} />
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
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="refBy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Referred By</FormLabel>
                      <FormControl>
                        <select
                          className="border rounded-md p-3 w-full"
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

                <Button
                  className="w-full py-6 bg-orange-600 text-white text-lg"
                  type="submit"
                >
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

export default CorporateRegister;
