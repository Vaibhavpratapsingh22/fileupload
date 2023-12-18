import { EmailTemplate } from "@/app/_components/EmailTemplate/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const requestData = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["vaibhavpratapsingh22@gmail.com"],
      subject: "New file has been shared with you",
      react: EmailTemplate({requestData}),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
