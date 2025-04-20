import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AuthButton from "@/components/header-auth";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo.svg"
                alt="StartupMVP Logo"
                width={40}
                height={40}
                className="dark:hidden"
              />
              <Image
                src="/images/logo/logo-dark.svg"
                alt="StartupMVP Logo"
                width={40}
                height={40}
                className="hidden dark:block"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">StartupMVP</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <AuthButton />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
              <Badge variant="default" className="mb-4">AI-Powered Innovation</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                Generate & Validate <span className="text-blue-600 dark:text-blue-400">Startup Ideas</span> in Minutes
              </h1>
              <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
                Use AI agents to create, analyze, and refine your startup concepts with expert-level insights across market, technical, and business domains.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button size="lg" asChild>
                  <Link href="/signup">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">Trusted by innovative founders and teams</h2>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-center h-12 grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <div className="w-full h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
              <div className="mt-10 space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-lg italic text-gray-600 dark:text-gray-300">
                    "StartupMVP helped us validate our concept in hours instead of weeks. The AI insights were surprisingly accurate and saved us from pursuing a dead-end idea."
                  </p>
                  <div className="mt-4">
                    <p className="font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Founder, TechStart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Why Most Startups Fail
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  90% of startups fail, often due to these critical issues that could be identified early
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-900">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-red-100 dark:bg-red-900">
                    <svg className="w-6 h-6 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">No Market Need</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    42% of startups fail because they build something nobody wants or needs
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-900">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Ran Out of Cash</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    29% of startups fail because they miscalculate their runway or business model
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-900">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 dark:bg-blue-900">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Wrong Team</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    23% of startups fail because they don't have the right expertise or team dynamics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  How StartupMVP Works
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Our AI agents work together to generate and validate your startup ideas
                </p>
              </div>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Idea Generation</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our AI Idea Generator agent creates innovative startup concepts based on your interests, industry trends, and emerging technologies.
                    </p>
                    <ul className="space-y-2">
                      {['Multiple ideas in seconds', 'Based on latest market trends', 'Customized to your interests'].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 order-1 md:order-2">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-24 h-24 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-24 h-24 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Market Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our Market Researcher agent evaluates your idea's potential, analyzing target audience, competition, and market size.
                    </p>
                    <ul className="space-y-2">
                      {['Comprehensive market research', 'Competitive landscape analysis', 'Target audience identification'].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Strategy</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our Business Strategist agent develops a viable business model, revenue streams, and go-to-market strategy for your idea.
                    </p>
                    <ul className="space-y-2">
                      {['Revenue model recommendations', 'Go-to-market strategy', 'Resource requirements analysis'].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 order-1 md:order-2">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-24 h-24 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 dark:bg-blue-800">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to validate your startup idea?
              </h2>
              <p className="mb-8 text-xl text-blue-100">
                Join thousands of founders who use StartupMVP to save time, money, and avoid costly mistakes.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link href="/signup">Create Free Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700" asChild>
                  <Link href="/signin">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/logo.svg"
                  alt="StartupMVP Logo"
                  width={30}
                  height={30}
                  className="dark:hidden"
                />
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="StartupMVP Logo"
                  width={30}
                  height={30}
                  className="hidden dark:block"
                />
                <span className="ml-2 text-sm font-bold text-gray-900 dark:text-white">StartupMVP</span>
              </Link>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} StartupMVP. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
