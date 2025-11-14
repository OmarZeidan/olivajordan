"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

// ---- Simple per-instance rate limit ----
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 min
const RATE_LIMIT_MAX = 5;
const ipToTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string | null): boolean {
  if (!ip) return false;
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recent = (ipToTimestamps.get(ip) || []).filter((t) => t > windowStart);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  ipToTimestamps.set(ip, recent);
  return false;
}

function sanitize(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim();
}

export async function sendEmail(prevState: unknown, formData: FormData) {
  try {
    // Honeypot (bots fill hidden fields)
    const honey = sanitize(formData.get("company"));
    if (honey) {
      return { success: false, error: "Bot detected." };
    }

    // Get IP from request headers (Vercel/Proxies)
    const h = await headers();
    const ip =
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      h.get("x-real-ip") ||
      null;

    if (isRateLimited(ip)) {
      return { success: false, error: "Too many requests. Try again soon." };
    }

    // Fields (match your form: name, email, phone, message)
    const name = sanitize(formData.get("name"));
    const email = sanitize(formData.get("email"));
    const tel = sanitize(formData.get("tel"));
    const message = sanitize(formData.get("message"));

    if (!name || !email || !message) {
      return {
        success: false,
        error: "Name, email, and message are required.",
      };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return { success: false, error: "Please provide a valid email address." };
    }

    // Transport (Gmail: use App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g. no-reply@yourdomain or gmail user
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Branding palette for Oliva (warm clay/olive)
    const accent = "#737c4c"; // Oliva olive (500)
    const clayBg = "#ebeddf"; // warm light background
    const submittedAt = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Amman",
      hour12: false,
    });

    const subject = `Oliva Website • New message from ${name}`;
    const fromDisplay = `Oliva Website <${
      process.env.EMAIL_FROM || process.env.EMAIL_USER
    }>`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
          <div style="width:10px;height:10px;border-radius:999px;background:${accent};"></div>
          <span style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#666;">Oliva — Contact Form</span>
        </div>

        <h2 style="color:#222; border-bottom: 2px solid ${accent}; padding-bottom: 10px; margin:0 0 16px;">
          New Inquiry from ${name}
        </h2>

        <div style="background:${clayBg}; padding: 16px 18px; border-radius: 10px; margin: 16px 0; border: 1px solid #c2c89e;">
          <h3 style="color:${accent}; margin: 0 0 10px;">Contact Details</h3>
          <p style="margin:6px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin:6px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin:6px 0;"><strong>Phone:</strong> ${
            tel || "Not provided"
          }</p>
        </div>

        <div style="background:#fff; padding: 18px; border-left: 4px solid ${accent}; border-radius: 6px;">
          <h3 style="color:${accent}; margin: 0 0 8px;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; margin:0;">${message}</p>
        </div>

        <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p style="margin:4px 0;">This message was sent from the <strong>Oliva</strong> website contact form.</p>
          <p style="margin:4px 0;">Reply directly to this email to respond to <strong>${name}</strong>.</p>
          <p style="margin:4px 0;"><strong>Submitted:</strong> ${submittedAt} (Asia/Amman)</p>
        </div>
      </div>
    `;

    const text = [
      `Oliva — Contact Form`,
      `New Inquiry from ${name}`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${tel || "Not provided"}`,
      ``,
      `Message:`,
      `${message}`,
      ``,
      `Submitted: ${submittedAt} (Asia/Amman)`,
    ].join("\n");

    await transporter.sendMail({
      from: fromDisplay, // your domain or gmail user (avoid spoofing)
      to: process.env.EMAIL_RECIPIENTS, // comma-separated list
      replyTo: email, // lets you reply straight to the sender
      subject,
      html,
      text,
    });

    return { success: true, error: null };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: "Something went wrong." };
  }
}
