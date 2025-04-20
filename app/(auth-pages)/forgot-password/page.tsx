import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <>
      <div className="flex flex-col flex-1 w-full">
        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div>
            <div className="mb-5 sm:mb-8 text-center">
              <h1 className="mb-2 font-semibold text-gray-800 text-title-xl dark:text-white/90 sm:text-title-2xl">
                Reset Password
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter your email address to receive a password reset link
              </p>
            </div>
            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="email">Email<span className="text-error-500">*</span></Label>
                  <Input name="email" placeholder="you@example.com" type="email" />
                </div>
                <div>
                  <SubmitButton 
                    formAction={forgotPasswordAction} 
                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-blue-500 shadow-sm hover:bg-blue-600"
                  >
                    Send Reset Link
                  </SubmitButton>
                  <FormMessage message={searchParams} />
                </div>
              </div>
            </form>
            <div className="mt-5 text-center">
              <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                Remember your password?{" "}
                <Link className="text-blue-500 hover:text-blue-600 dark:text-blue-400" href="/signin">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <SmtpMessage />
    </>
  );
}
