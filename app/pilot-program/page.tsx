import type { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { PilotForm } from "@/components/forms/pilot-form"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Pilot Program | SlateMate",
  description:
    "Join SlateMate's exclusive pilot program and be among the first to experience our AI-powered learning platform.",
}

export default function PilotProgramPage() {
  return (
    <div className="pt-16">
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/10 to-emerald/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Join Our Pilot Program</h1>
            <p className="text-xl mb-8 text-foreground/80">
              Be among the first to experience SlateMate's revolutionary AI-powered learning platform.
            </p>
            <PilotForm
              triggerButton={
                <Button variant="glow" size="lg">
                  Apply Now
                </Button>
              }
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Join Our Pilot?</h2>
              <p className="text-lg text-foreground/80">
                As a pilot participant, you'll get exclusive benefits and help shape the future of educational
                technology.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <ScrollReveal>
              <div className="bg-card border rounded-xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Early Access</h3>
                    <p className="text-foreground/80">
                      Be the first to experience our cutting-edge AI learning technology before it's available to the
                      general public.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-card border rounded-xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Free Premium Access</h3>
                    <p className="text-foreground/80">
                      Enjoy all premium features at no cost during the pilot period, with special pricing options when
                      we launch.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-card border rounded-xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Shape the Product</h3>
                    <p className="text-foreground/80">
                      Provide direct feedback to our development team and influence the features and functionality of
                      SlateMate.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-card border rounded-xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-foreground/80">
                      Receive personalized onboarding and priority support from our team throughout the pilot program.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-electric text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Apply</h3>
                    <p className="text-foreground/80">
                      Fill out our simple application form to express your interest in joining the pilot program. Tell
                      us about your role (parent, teacher, or administrator) and what you hope to gain from SlateMate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-electric text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Onboarding</h3>
                    <p className="text-foreground/80">
                      If selected, our team will reach out to schedule a personalized onboarding session. We'll help you
                      set up your account and walk you through the platform's features.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-electric text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
                    <p className="text-foreground/80">
                      Dive into SlateMate! Explore personalized learning paths, engage with AI-powered tools, and track
                      your progress. We'll gather your feedback to continuously improve the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
