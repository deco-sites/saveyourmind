import { invoke } from "site/runtime.ts";

export default function RegistrationButton() {
  const submit = () => {
    invoke.emailjs.actions.send({
      template_id: "template_t05y1qm",
      template_params: [
        { key: "name", value: "Yuri" },
        { key: "email", value: "killerkoll2012@gmail.com" },
        { key: "message", value: "Assunto" },
      ]
    });

    alert("Email enviado com sucesso");
  };

  return (
    <button
      id="submitButton"
      onClick={submit}
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
  );
}
