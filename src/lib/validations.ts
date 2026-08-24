export interface EnquiryInput {
  fullName: string;
  countryCode: string;
  contactNumber: string;
  email: string;
  travelDate: string;
  people: number;
  hotelCategory: string;
  children?: number;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{7,15}$/;

export function validateEnquiryInput(
  data: Partial<EnquiryInput>
): ValidationResult {
  const errors: Record<string, string> = {};

  // Full name
  if (!data.fullName || !data.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  // Country code
  if (!data.countryCode || !data.countryCode.trim()) {
    errors.countryCode = "Country code is required";
  }

  // Contact number
  if (!data.contactNumber || !data.contactNumber.trim()) {
    errors.contactNumber = "Contact number is required";
  } else if (!PHONE_RE.test(data.contactNumber.trim())) {
    errors.contactNumber = "Enter a valid contact number";
  }

  // Email
  if (!data.email || !data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  // Travel date
  if (!data.travelDate || !data.travelDate.trim()) {
    errors.travelDate = "Travel date is required";
  } else {
    const travelDate = new Date(`${data.travelDate}T00:00:00`);

    if (Number.isNaN(travelDate.getTime())) {
      errors.travelDate = "Enter a valid travel date";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (travelDate <= today) {
        errors.travelDate = "Travel date must be in the future";
      }
    }
  }

  // Number of people
  if (
    data.people === undefined ||
    typeof data.people !== "number" ||
    data.people < 1
  ) {
    errors.people = "Number of people must be at least 1";
  }

  // Hotel category
  if (!data.hotelCategory || !data.hotelCategory.trim()) {
    errors.hotelCategory = "Hotel category is required";
  } else if (
    !["Standard", "Deluxe", "Luxury"].includes(data.hotelCategory)
  ) {
    errors.hotelCategory = "Invalid hotel category";
  }

  // Children
  if (
    data.children !== undefined &&
    (typeof data.children !== "number" || data.children < 0)
  ) {
    errors.children = "Number of children cannot be negative";
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

  if (!data.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!data.slug?.trim()) {
    errors.slug = "Slug is required";
  } else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(data.slug.trim())) {
    errors.slug =
      "Slug can only contain lowercase letters, numbers and hyphens";
  }

  if (!data.country?.trim()) {
    errors.country = "Country is required";
  }

  if (!data.city?.trim()) {
    errors.city = "City is required";
  }

  if (!data.description?.trim()) {
    errors.description = "Description is required";
  }

  if (!data.image?.trim()) {
    errors.image = "Image is required";
  }

  if (!data.bestTimeToVisit?.trim()) {
    errors.bestTimeToVisit = "Best time to visit is required";
  }

  if (data.averageBudget === undefined || data.averageBudget === null) {
    errors.averageBudget = "Average budget is required";
  } else if (
    typeof data.averageBudget !== "number" ||
    data.averageBudget < 0
  ) {
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
    errors.slug =
      "Slug can only contain lowercase letters, numbers and hyphens";
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