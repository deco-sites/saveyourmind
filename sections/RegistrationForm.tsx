import { useSection } from "deco/hooks/useSection.ts";
import { AppContext } from "site/apps/site.ts";
import { User } from "site/actions/user/subscribe.ts";
import { redirect } from "deco/mod.ts";
import { useUser } from "site/hooks/useUser.ts";

export interface Props {
  signUpText: string;
  submissionResponse?: { error?: string };
}

export default function RegistrationForm(
  { signUpText = "Sign Up", submissionResponse }: Props,
) {
  return (
    <div class="min-h-screen bg-base-200 text-gray-900 flex justify-center">
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div class="flex items-center justify-center w-full">
            <a href="/" class="text-2xl font-bold text-secondary text-center">
              SaveYourMind
            </a>
          </div>
          <div class="mt-12 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-extrabold">
              {signUpText}
            </h1>
            <div class="w-full flex-1 mt-8">
              <div class="flex flex-col items-center">
                <button
                  disabled
                  class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div class="bg-white p-2 rounded-full">
                    <svg class="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span class="ml-4">
                    Sign Up with Google
                  </span>
                </button>
              </div>

              <div class="my-12 border-b text-center">
                <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

              <form
                hx-post={useSection()}
                hx-swap="outerHTML"
                hx-target="closest section"
                hx-indicator="#submitButton"
                class="mx-auto max-w-xs"
              >
                <div class="flex items-center justify-center gap-2">
                  <input
                    class="w-1/2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <input
                    class="w-1/2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    name="surname"
                    type="text"
                    placeholder="Surname"
                    required
                  />
                </div>

                <div class="flex flex-col gap-2 mt-5">
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  {submissionResponse?.error && (
                    <div role="alert" class="alert alert-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <span>{submissionResponse?.error}</span>
                    </div>
                  )}
                </div>
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />

                <div class="flex flex-col gap-1 mt-5">
                  <label for="birthdate" class="text-xs text-gray-600">
                    Your birthdate:
                  </label>

                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    name="birthdate"
                    type="date"
                    placeholder="birthdate"
                    required
                  />
                </div>
                <button
                  id="submitButton"
                  type="submit"
                  class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    class="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span class="ml-3">
                    Sign Up
                  </span>
                </button>
                <div class="my-4 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or{" "}
                    <a
                      href="/login"
                      class="border-b border-gray-500 border-dotted"
                    >
                      login
                    </a>
                  </div>
                </div>
                <p class="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by SaveYourMind's{" "}
                  <a href="#" class="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a href="#" class="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');"
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export const loader = async (
  props: Props,
  req: Request,
  { invoke }: AppContext,
) => {
  const user = useUser(null, req);

  if (user) redirect("/dashboard");

  const contentType = req.headers.get("Content-Type");

  if (contentType === "application/x-www-form-urlencoded") {
    const form = await req.formData();

    const user: User = {
      birthDate: form.get("birthdate")?.toString() || "",
      email: form.get("email")?.toString() || "",
      name: form.get("name")?.toString() || "",
      surname: form.get("surname")?.toString() || "",
      password: form.get("password")?.toString() || "",
      slug: crypto.randomUUID(),
    };

    const { status } = await invoke.site.actions.user.subscribe({ user });

    if (status == "400") {
      return {
        ...props,
        submissionResponse: { error: "Email already exists." },
      };
    }

    if (status == "200") {
      return {
        ...props,
        submissionResponse: { error: "Please, verify your email." },
      };
    }
  }

  return {
    ...props,
    submissionResponse: null,
  };
};
