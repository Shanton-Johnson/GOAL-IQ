import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Clerk Next.js App!</h1>
      <SignedIn>
        <p>You are signed in!</p>
      </SignedIn>
      <SignedOut>
        <p>Please sign in to access more features.</p>
      </SignedOut>
    </main>
  );
}