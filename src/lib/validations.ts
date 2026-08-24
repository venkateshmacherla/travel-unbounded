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

export interface DestinationInput {
  name: string;
  slug: string;
  country: string;
  city: string;
  description: string;
  image: string;
  bestTimeToVisit: string;
  averageBudget: number;
  tags?: string[];
}

export function validateDestinationInput(
  data: Partial<DestinationInput>
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name?.trim()) errors.name = "Name is required";
  if (!data.slug?.trim()) errors.slug = "Slug is required";
  else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(data.slug.trim())) {
    errors.slug = "Slug can only contain lowercase letters, numbers and hyphens";
  }

  if (!data.country?.trim()) errors.country = "Country is required";
  if (!data.city?.trim()) errors.city = "City is required";
  if (!data.description?.trim()) errors.description = "Description is required";
  if (!data.image?.trim()) errors.image = "Image is required";
  if (!data.bestTimeToVisit?.trim()) errors.bestTimeToVisit = "Best time to visit is required";

  if (data.averageBudget === undefined || data.averageBudget === null) {
    errors.averageBudget = "Average budget is required";
  } else if (typeof data.averageBudget !== "number" || data.averageBudget < 0) {
    errors.averageBudget = "Average budget must be a positive number";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateDestinationUpdate(
  data: Partial<DestinationInput>
): ValidationResult {
  const errors: Record<string, string> = {};

  if (
    data.slug !== undefined &&
    !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(data.slug.trim())
  ) {
    errors.slug = "Slug can only contain lowercase letters, numbers and hyphens";
  }

  if (
    data.averageBudget !== undefined &&
    (typeof data.averageBudget !== "number" || data.averageBudget < 0)
  ) {
    errors.averageBudget = "Average budget must be a positive number";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}