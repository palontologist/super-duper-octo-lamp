"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Target, Users, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";

export default function ForOrganizationsPage() {
  return (
    <div className="w-full min-h-screen bg-white text-text-high pt-24">
      {/* Hero Section */}
      <section className="py-24 px-20 bg-gradient-to-br from-focus-purple/10 to-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="heading-1 mb-6 text-text-high">Enterprise Impact & ESG Measurement</h1>
          <p className="heading-3 text-text-medium mb-8">
            Turn your operations and finances into measurable impact infrastructure—so you can track, report, and optimize ESG outcomes across your organization.
          </p>
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="bg-focus-purple hover:bg-focus-purple/90 text-white rounded-xl button-text">
              <a href="https://cal.com/georgekarani/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl button-text border-border-color">
              <Link href="#use-cases">Explore Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">The ESG & Impact Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-warning-color/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-warning-color" />
                </div>
                <h3 className="heading-3 mb-3 text-text-high">Fragmented Data</h3>
                <p className="body-medium text-text-medium">
                  Impact metrics live in spreadsheets, program reports, and siloed systems. Getting a unified view takes weeks—if it&apos;s possible at all.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-text-low/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-text-high" />
                </div>
                <h3 className="heading-3 mb-3 text-text-high">Reporting Burden</h3>
                <p className="body-medium text-text-medium">
                  Board reports, donor requirements, regulatory compliance—you&apos;re spending resources on reporting instead of impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-focus-purple/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-focus-purple" />
                </div>
                <h3 className="heading-3 mb-3 text-text-high">Decision Blindness</h3>
                <p className="body-medium text-text-medium">
                  Without real-time impact insights, you can&apos;t optimize resource allocation. Which programs drive the strongest returns? You&apos;re guessing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-4 text-text-high">The FrontForumFocus Enterprise Solution</h2>
          <p className="body-large text-text-medium mb-12 max-w-2xl">
            A unified impact measurement platform that connects your operations, finances, and outcomes—giving you the real-time visibility you need to measure, report, and optimize.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="heading-3 text-text-high">Core Capabilities</h3>
              
              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-focus-purple flex-shrink-0 mt-1" />
                <div>
                  <p className="body-medium font-semibold text-text-high">Unified Impact Dashboard</p>
                  <p className="body-small text-text-medium">Combine financial, operational, and program data in one place. See the complete picture of your impact.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-focus-purple flex-shrink-0 mt-1" />
                <div>
                  <p className="body-medium font-semibold text-text-high">ESG & Impact Reporting</p>
                  <p className="body-small text-text-medium">Generate clear, audit-ready reports for investors, donors, boards, and regulators in minutes—not weeks.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-focus-purple flex-shrink-0 mt-1" />
                <div>
                  <p className="body-medium font-semibold text-text-high">Decision Support Analytics</p>
                  <p className="body-small text-text-medium">See which programs, regions, or portfolios drive the strongest financial and social returns. Optimize intelligently.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-focus-purple flex-shrink-0 mt-1" />
                <div>
                  <p className="body-medium font-semibold text-text-high">Real-Time Monitoring</p>
                  <p className="body-small text-text-medium">Track progress toward ESG targets, SDG commitments, and custom outcome metrics in real-time.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-focus-purple flex-shrink-0 mt-1" />
                <div>
                  <p className="body-medium font-semibold text-text-high">Integration Ready</p>
                  <p className="body-small text-text-medium">Connect to your existing systems—Salesforce, accounting software, program management tools—seamlessly.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border-color rounded-lg p-8">
              <h3 className="heading-3 mb-6 text-text-high">Sample Dashboard</h3>
              <div className="space-y-4">
                <div className="p-4 bg-focus-purple/5 rounded-lg border border-focus-purple/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="body-small font-semibold text-text-high">Financial Impact</p>
                    <p className="heading-3 text-focus-purple">$2.4M</p>
                  </div>
                  <div className="w-full bg-border-color rounded h-2">
                    <div className="bg-focus-purple rounded h-2" style={{width: "72%"}}></div>
                  </div>
                </div>
                <div className="p-4 bg-impact-green/5 rounded-lg border border-impact-green/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="body-small font-semibold text-text-high">Lives Impacted</p>
                    <p className="heading-3 text-impact-green">12,847</p>
                  </div>
                  <div className="w-full bg-border-color rounded h-2">
                    <div className="bg-impact-green rounded h-2" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div className="p-4 bg-text-low/5 rounded-lg border border-text-low/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="body-small font-semibold text-text-high">ESG Score</p>
                    <p className="heading-3 text-text-high">8.6/10</p>
                  </div>
                  <div className="w-full bg-border-color rounded h-2">
                    <div className="bg-text-high rounded h-2" style={{width: "86%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">Who Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-focus-purple mb-2" />
                <CardTitle className="heading-3">Impact Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium mb-4">
                  Track portfolio impact in real-time. Monitor ESG performance across your investments. Generate reports that demonstrate your thesis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-focus-purple font-bold">•</span>
                    <span className="body-small text-text-medium">Portfolio dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-focus-purple font-bold">•</span>
                    <span className="body-small text-text-medium">Fund performance reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-focus-purple font-bold">•</span>
                    <span className="body-small text-text-medium">LP communication tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <Users className="w-8 h-8 text-impact-green mb-2" />
                <CardTitle className="heading-3">Social Impact Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium mb-4">
                  Prove your impact to donors and stakeholders. Optimize programs based on real outcomes. Reduce reporting time by 80%.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-impact-green font-bold">•</span>
                    <span className="body-small text-text-medium">Donor reporting dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-impact-green font-bold">•</span>
                    <span className="body-small text-text-medium">Grant compliance tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-impact-green font-bold">•</span>
                    <span className="body-small text-text-medium">Program performance analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <Target className="w-8 h-8 text-focus-purple mb-2" />
                <CardTitle className="heading-3">Corporate ESG Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium mb-4">
                  Consolidate ESG data from across your organization. Report to regulators and boards with confidence. Identify optimization opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-focus-purple font-bold">•</span>
                    <span className="body-small text-text-medium">ESG reporting frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-focus-purple font-bold">•</span>
                    <span className="body-small text-text-medium">SDG progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-focus-purple font-bold">•</span>
                    <span className="body-small text-text-medium">Regulatory compliance automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-impact-green mb-2" />
                <CardTitle className="heading-3">Development Banks & Multilaterals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium mb-4">
                  Monitor impact across your entire portfolio. Track financial and non-financial outcomes at scale. Demonstrate development outcomes to stakeholders.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-impact-green font-bold">•</span>
                    <span className="body-small text-text-medium">Portfolio monitoring at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-impact-green font-bold">•</span>
                    <span className="body-small text-text-medium">Development outcomes tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-impact-green font-bold">•</span>
                    <span className="body-small text-text-medium">Multilateral compliance reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-20 bg-gradient-to-br from-focus-purple/10 to-background-alt">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="heading-2 mb-6 text-text-high">Ready to Turn Data into Impact?</h2>
          <p className="body-large text-text-medium mb-8">
            Let&apos;s talk about how FrontForumFocus can help your organization measure, report, and optimize impact.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-focus-purple hover:bg-focus-purple/90 text-white rounded-xl button-text">
              <a href="https://cal.com/georgekarani/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
          </div>
          <p className="body-small text-text-low mt-8">
            Questions? Email us at <a href="mailto:support@frontforumfocus.com" className="text-focus-purple hover:underline">support@frontforumfocus.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
