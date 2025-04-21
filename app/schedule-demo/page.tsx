import type { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Schedule a Demo | SlateMate",
  description: "Book a personalized demonstration of SlateMate's AI-powered learning platform.",
}

export default function ScheduleDemoPage() {
  return (
    <div className="pt-16">
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/10 to-emerald/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Schedule a Demo</h1>
            <p className="text-xl mb-8 text-foreground/80">
              See SlateMate in action with a personalized demonstration tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                  <p className="mb-4 text-foreground/80">
                    Our personalized demos are designed to show you exactly how SlateMate can benefit your specific
                    situation. During the 30-minute session, we'll cover:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-electric/20 text-electric flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <span>Platform overview and key features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-electric/20 text-electric flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <span>Customized walkthrough based on your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-electric/20 text-electric flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <span>Q&A session with our product specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-electric/20 text-electric flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold">4</span>
                      </div>
                      <span>Discussion of implementation options</span>
                    </li>
                  </ul>
                  <p className="text-foreground/80">
                    After the demo, we'll follow up with additional resources and next steps tailored to your interests.
                  </p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
                  <DemoRequestForm />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-center mt-16 pt-8 border-t">
                <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
                <p className="mb-6 text-foreground/80">
                  If you'd prefer to speak with someone right away, our team is ready to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild variant="outline">
                    <a href="tel:+917388180231">Call Us: +91 73881 80231</a>
                  </Button>
                  <Button asChild variant="default" className="bg-electric hover:bg-electric/90 text-white">
                    <a href="mailto:demo@slatemate.in">Email: demo@slatemate.in</a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

function DemoRequestForm() {
  return (
    <form
      className="space-y-4"
      action="https://script.google.com/macros/s/AKfycbwVNgdUCAhysz4Goguu98jVx8GjgxxbvcnfOQH3MD3aFEl9YKWJ_l9X5oFLXYSNAUacqQ/exec"
      method="POST"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your@email.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="organization">Organization</Label>
        <Input id="organization" name="organization" placeholder="School or organization name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Your Role</Label>
        <Select name="role">
          <SelectTrigger id="role">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="parent">Parent</SelectItem>
            <SelectItem value="teacher">Teacher</SelectItem>
            <SelectItem value="school_admin">School Administrator</SelectItem>
            <SelectItem value="it_admin">IT Administrator</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">What are you most interested in learning about?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your specific needs and interests..."
          className="min-h-[100px]"
        />
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox id="marketing" name="marketing" defaultChecked />
        <Label htmlFor="marketing" className="text-sm">
          I'd like to receive updates about SlateMate products and services
        </Label>
      </div>

      <Button type="submit" className="w-full bg-electric hover:bg-electric/90 text-white">
        Request Demo
      </Button>
    </form>
  )
}
