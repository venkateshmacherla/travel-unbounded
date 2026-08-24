export interface EnquiryInput {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  travelDate?: string;
  travelers?: number;
  message?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,20}$/;

export function validateEnquiryInput(
  data: Partial<EnquiryInput>
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || !data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email || !data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!data.phone || !data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!PHONE_RE.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number";
  }

  if (
    data.travelers !== undefined &&
    (typeof data.travelers !== "number" || data.travelers < 1)
  ) {
    errors.travelers = "Travelers must be at least 1";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
