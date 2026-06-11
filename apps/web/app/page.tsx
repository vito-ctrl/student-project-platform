import React from 'react';
import { Terminal, Users, Layers, ShieldCheck, Share2, ArrowRight, Code, CheckCircle2 } from 'lucide-react';
import Link from "next/link";
import { ClerkProvider , Show, SignInButton, SignUpButton, UserButton} from '@clerk/nextjs';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-layout-base text-content-primary font-sans selection:bg-brand-tint selection:text-brand-primary">
      
      {/* Navigation */}
      <header className="border-b border-surface-hover/50 bg-layout-base/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-dim flex items-center justify-center shadow-md">
              <Terminal className="w-4 h-4 text-layout-base font-bold" />
            </div>
            <span className="text-lg font-bold tracking-tight text-content-primary">
              Dev<span className="text-brand-primary">Collab</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-content-secondary">
            <a href="#problem" className="hover:text-content-primary transition-colors">The Problem</a>
            <a href="#features" className="hover:text-content-primary transition-colors">Platform</a>
            <a href="#architecture" className="hover:text-content-primary transition-colors">Architecture</a>
          </nav>
          <div className="flex items-center gap-4">
            <Show when="signed-out">
              <button className="text-sm font-medium text-content-secondary hover:text-content-primary transition-colors">
                <Link href='/sign-in'>Sign In</Link> 
              </button>
              <button className="flex items-center gap-2 bg-brand-primary hover:bg-brand-dim text-layout-base text-sm font-medium px-4 py-2 rounded-lg transition-all active:scale-95 shadow-lg shadow-brand-primary/10">
                <GithubIcon className="w-4 h-4" />
                <Link href='/sign-up'>Start Building</Link> 
              </button>
            </Show>
          </div>
           <Show when="signed-in">
              <UserButton />
            </Show>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28 border-b border-surface-hover/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3a1e0a,transparent_45%)] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-tint/60 border border-brand-border/40 text-brand-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            <Code className="w-3.5 h-3.5" /> Stop building solo todo apps
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary max-w-4xl mx-auto leading-[1.15]">
            Ship Real Software. <br />
            <span className="bg-gradient-to-r from-brand-primary to-brand-dim bg-clip-text text-transparent">
              Prove Your Contribution.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-content-secondary max-w-2xl mx-auto font-normal leading-relaxed">
            The Student Project Execution Platform. Connect with skilled peers, track verified GitHub commits, and automatically generate bulletproof portfolios that recruiters trust.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-dim text-layout-base text-base font-semibold px-6 py-3 rounded-xl transition-all shadow-xl shadow-brand-primary/10 hover:shadow-brand-primary/20">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface hover:bg-raised border border-surface-hover text-content-primary text-base font-semibold px-6 py-3 rounded-xl transition-all">
              Explore Live Projects
            </button>
          </div>
        </div>
      </section>

      {/* The Pain Point & Solution */}
      <section id="problem" className="py-20 bg-surface/50 border-b border-surface-hover/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-content-primary tracking-tight">
              The Reality of Junior Dev Portfolios
            </h2>
            <p className="mt-3 text-content-secondary">
              Recruiters are tired of identical tutorial clones. They want to see how you execute in a team environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Box: The Problem */}
            <div className="bg-surface border border-surface-hover/60 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-semantic-danger/5 rounded-full blur-2xl" />
              <h3 className="text-lg font-bold text-content-primary flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-semantic-danger" /> The Struggle
              </h3>
              <ul className="space-y-4 text-sm text-content-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-semantic-danger font-bold mt-0.5">✕</span>
                  <span>Wasting weeks scrolling social feeds trying to find reliable teammates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-danger font-bold mt-0.5">✕</span>
                  <span>Projects fizzle out halfway because tasks and timelines aren't organized.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-danger font-bold mt-0.5">✕</span>
                  <span>No verifiable proof of what code you actually authored during a team sprint.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-danger font-bold mt-0.5">✕</span>
                  <span>Assembling case studies manually instead of writing production features.</span>
                </li>
              </ul>
            </div>

            {/* Right Box: The Insight */}
            <div className="bg-raised border border-brand-border/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl" />
              <h3 className="text-lg font-bold text-brand-primary flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-primary" /> The DevCollab Strategy
              </h3>
              <blockquote className="text-base text-content-primary font-medium italic border-l-2 border-brand-primary pl-4 mb-6 leading-relaxed">
                "Help student and junior engineering teams complete production-grade software from start to finish within structured environments."
              </blockquote>
              <p className="text-sm text-content-secondary leading-relaxed">
                By constraining your work inside dedicated Project Rooms, we combine strict task management with continuous, tamper-evident GitHub logging. You focus on code; we handle the tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section id="features" className="py-20 border-b border-surface-hover/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-content-primary tracking-tight">
              Engineered to Drive Execution
            </h2>
            <p className="mt-3 text-content-secondary">
              Everything you need to launch applications and demonstrate raw technical competence to employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Feature 1 */}
            <div className="bg-surface hover:bg-surface-hover/40 border border-surface-hover/60 rounded-xl p-6 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-brand-tint border border-brand-border/40 text-brand-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-content-primary mb-2">Isolated Project Rooms</h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Zero distracting social noise. Just centralized workspaces storing goals, role data, tech-stacks, and unified timelines.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface hover:bg-surface-hover/40 border border-surface-hover/60 rounded-xl p-6 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-brand-tint border border-brand-border/40 text-brand-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-content-primary mb-2">Trello-Style Task Pipelines</h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Assign structured items, specify critical hard blockages, and advance statuses using reactive Kanban boards built for modern engineering speeds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface hover:bg-surface-hover/40 border border-surface-hover/60 rounded-xl p-6 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-brand-tint border border-brand-border/40 text-brand-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-content-primary mb-2">Tag-Based Team Assembly</h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Need a Next.js frontend or a Java backend engineer? Filter candidates instantly by their verified tech profiles and accept the perfect matches.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-surface hover:bg-surface-hover/40 border border-surface-hover/60 rounded-xl p-6 transition-all group md:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-brand-tint border border-brand-border/40 text-brand-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-content-primary mb-2">Verified Contribution Logs</h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Append-only internal logs pull exact commit distributions via the Octokit GitHub API. Your work metrics can never be falsely inflated or altered.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-surface hover:bg-surface-hover/40 border border-surface-hover/60 rounded-xl p-6 transition-all group md:col-span-2 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl" />
              <div className="w-10 h-10 rounded-lg bg-brand-tint border border-brand-border/40 text-brand-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-content-primary mb-2">Static Snapshot Portfolio Engine</h3>
              <p className="text-sm text-content-secondary leading-relaxed max-w-xl">
                Generate lightning-fast static public URLs and downloadable, structured PDFs with React-PDF. Showcase architecture stack maps, screenshot carousels, and tamper-proof commit tables cleanly directly to technical recruiters.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Architecture Banner */}
      <section id="architecture" className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface to-raised border border-brand-border/30 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl" />
            
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Enterprise-Grade Integrity</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-content-primary tracking-tight">
                Built on Type-Safe, High-Performance Infrastructure
              </h2>
              <p className="mt-4 text-sm sm:text-base text-content-secondary leading-relaxed">
                We synchronize changes instantly using Next.js 14, Fastify, and tRPC coupled with a relational PostgreSQL schema running on Prisma. Background tasks like PDF generation are decoupled cleanly using dedicated Upstash Redis queues running BullMQ to eliminate pipeline stall points.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-content-secondary font-mono">
                <span className="flex items-center gap-1.5 bg-layout-base px-2.5 py-1 rounded-md border border-surface-hover/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-semantic-success" /> Next.js 14 App Router
                </span>
                <span className="flex items-center gap-1.5 bg-layout-base px-2.5 py-1 rounded-md border border-surface-hover/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-semantic-success" /> tRPC End-to-End Safety
                </span>
                <span className="flex items-center gap-1.5 bg-layout-base px-2.5 py-1 rounded-md border border-surface-hover/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-semantic-success" /> BullMQ Micro-Workers
                </span>
              </div>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0 relative z-10">
              <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-dim text-layout-base text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-xl shadow-brand-primary/10">
                <GithubIcon className="w-4 h-4" /> Sign In via GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-hover/40 bg-layout-base py-8 text-center text-xs text-content-tertiary">
        <p>© {new Date().getFullYear()} DevCollab. Built for team software execution.</p>
      </footer>

    </div>
  );
}