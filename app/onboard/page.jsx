'use client';

import OnboardForm from "./_component/OnboardForm";

export default function OnboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <main className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Join as an Artist</h1>
          <p className="text-lg text-muted-foreground">
            Share your talent with thousands of event planners
          </p>
        </div>
        <OnboardForm />
      </main>
    </div>
  );
}