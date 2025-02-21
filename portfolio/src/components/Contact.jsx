import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from "@headlessui/react";

function Contact() {
  const [state, handleSubmit] = useForm("xdkkrqnq");

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-800">
        <div className="bg-gray-400/40 shadow-lg p-10 rounded-lg text-center w-3/5">
          <h2 className="text-3xl font-bold text-white mb-4">
            Message Sent! 🎉
          </h2>
          <p className="text-lg text-white">
            Thanks for reaching out! I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-black/35 text-white rounded-lg font-bold shadow hover:bg-black/50 transition"
          >
            Back to Contact Page
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="pt-10 h-screen flex items-center justify-center bg-gray-800"
    >
      <div className="bg-gray-400/40 shadow p-10 rounded-lg w-1/2 space-y-6">
        <form onSubmit={handleSubmit} className="">
          <Fieldset className="">
            <Legend className="text-lg font-bold text-white">Contact Me</Legend>
            <Field>
              <Label className="block pt-5 text-white">Name</Label>
              <Input
                className="mt-1 mb-1 h-12 text-lg block w-full rounded-lg shadow"
                name="name-field"
              />
            </Field>
            <Field>
              <Label className="block text-white">Email</Label>
              <Input
                className="mt-1 mb-1 h-12 text-lg block w-full rounded-lg shadow"
                name="email"
              ></Input>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </Field>
            <Field>
              <Label className="block text-white">Message</Label>
              <Textarea
                className="mt-1 mb-1 h-32 text-lg block w-full rounded-lg shadow"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </Field>
          </Fieldset>
          <button
            type="submit"
            className="mt-1 w-full bg-black/35 text-white py-2 rounded-lg font-bold shadow"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
