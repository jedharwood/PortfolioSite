"use server";

import { ContactFormData, contactFormSchema } from "../src/app/components/contact-form/schema";

type FormResponse = {
  status: boolean;
  message: string;
};

export async function contactFormSubmitHandler(
  data: ContactFormData,
): Promise<FormResponse> {
  try {
    const validation = contactFormSchema.safeParse(data);

    if (!validation.success) throw new Error("Invalid data");

    const { name, email, message, subject } = validation.data;

    console.log('serverside', { name, email, message, subject})
    //continue to use the data

    return {
      status: true,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("e", error);
    return {
      status: false,
      message: "Failed",
    };
  }
}