import { SignInForm } from '@/components/auth';

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="w-full">
        <SignInForm />
      </div>
    </main>
  );
} 