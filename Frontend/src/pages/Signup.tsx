import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const schema = z
  .object({
    name: z.string().min(2, "Please enter your full name"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirm: z.string().min(6, "Minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords must match",
  });

type FormValues = z.infer<typeof schema>;

const Signup: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", confirm: "" },
  });

  const onSubmit = async (values: FormValues) => {
    // Demo only – wire to Supabase auth later
    toast.loading("Creating your account...", { id: "signup" });
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Account created!", { id: "signup" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Create account | Skyward Airline Management System"
        description="Create your Skyward AMS account to start streamlining airline operations."
      />

      <header className="container mx-auto h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-cta-gradient shadow-elevated" />
          <span className="font-display text-base tracking-tight">Skyward AMS</span>
        </Link>
        <div className="text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="story-link">Sign in</Link>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <section className="container mx-auto grid lg:grid-cols-2 gap-8 items-center py-10">
          <Reveal className="order-2 lg:order-1">
            <div className="glass rounded-2xl p-6 md:p-8 shadow-elevated">
              <h1 className="font-display text-2xl md:text-3xl font-semibold">Create your account</h1>
              <p className="mt-2 text-sm text-muted-foreground">A few details and you’re cleared for takeoff.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="Captain Jane Doe" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@airline.com" type="email" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="••••••••" type="password" autoComplete="new-password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirm"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                          <Input placeholder="••••••••" type="password" autoComplete="new-password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full hover-scale" variant="gradient" size="lg">
                    Create account
                  </Button>
                </form>
              </Form>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="rounded-2xl border border-border/60 p-6 md:p-10">
              <h2 className="font-display text-xl md:text-2xl">Built for modern airlines</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                From day one, Skyward gives you a unified platform for operations, safety, and commercial performance.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Intelligent crew and roster tools</li>
                <li>• Real-time ops control</li>
                <li>• Enterprise security and audits</li>
              </ul>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
};

export default Signup;
