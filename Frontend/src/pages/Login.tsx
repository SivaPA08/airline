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

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

type FormValues = z.infer<typeof schema>;

const Login: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: FormValues) => {
    // Demo only – wire to Supabase auth later
    toast.loading("Signing you in...", { id: "login" });
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Welcome back!", { id: "login" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Sign in | Skyward Airline Management System"
        description="Access your Skyward AMS dashboard to manage operations, crews and revenue."
      />

      <header className="container mx-auto h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-cta-gradient shadow-elevated" />
          <span className="font-display text-base tracking-tight">Skyward AMS</span>
        </Link>
        <div className="text-sm text-muted-foreground">
          New here? <Link to="/signup" className="story-link">Create an account</Link>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <section className="container mx-auto grid lg:grid-cols-2 gap-8 items-center py-10">
          <Reveal className="order-2 lg:order-1">
            <div className="glass rounded-2xl p-6 md:p-8 shadow-elevated">
              <h1 className="font-display text-2xl md:text-3xl font-semibold">Sign in to Skyward AMS</h1>
              <p className="mt-2 text-sm text-muted-foreground">Welcome back. We’re keeping the runway clear for you.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
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
                          <Input placeholder="••••••••" type="password" autoComplete="current-password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between pt-2">
                    <Link to="#" className="text-sm story-link">Forgot password?</Link>
                  </div>

                  <Button type="submit" className="w-full hover-scale" variant="gradient" size="lg">
                    Sign in
                  </Button>
                </form>
              </Form>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="rounded-2xl border border-border/60 p-6 md:p-10">
              <h2 className="font-display text-xl md:text-2xl">Operate with confidence</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Skyward unifies flight ops, crew, maintenance and revenue so your teams can make faster, better decisions.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Real-time disruption recovery</li>
                <li>• Enterprise security and SSO</li>
                <li>• Designed with operations leaders</li>
              </ul>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
};

export default Login;
