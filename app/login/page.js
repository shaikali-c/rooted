import { AuthLayout } from "@/components/_ext/catalyst/auth-layout";
import LoginForm from "@/components/login/form";

export default function PageLogin() {
  return (
    <main className="h-dvh w-screen flex items-center justify-center flex-col bg-neutral-100 text-gray-900 font-main">
      <div className="w-full md:w-auto">
        <AuthLayout>
          <LoginForm />
        </AuthLayout>
      </div>
    </main>
  );
}
