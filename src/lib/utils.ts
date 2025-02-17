import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, subDays } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getExceptionType = (error: unknown) => {
  const UnknownException = {
    type: "UnknownException",
    status: 500,
    message: "An unknown error occurred",
  };

  if (!error) return UnknownException;

  if ((error as Record<string, unknown>).name === "DatabaseError") {
    return {
      type: "DatabaseException",
      status: 400,
      message: "Duplicate key entry",
    };
  }

  return UnknownException;
};

export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }
) {
  return new Intl.DateTimeFormat("en-US", {
    ...options,
  }).format(new Date(date));
}

export function formatPrice(
  price: number | string,
  options: Intl.NumberFormatOptions = {}
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: options.currency ?? "USD",
    notation: options.notation ?? "compact",
    ...options,
  }).format(Number(price));
}

export function absoluteUrl(path: string) {
  return `https://nmn-taxes.vercel.app/${path}`;
  // return new URL(path, process.env.NEXT_PUBLIC_APP_URL).href;
}

export function isValidEmail(email: string): boolean {
  return /.+@.+/.test(email);
}

const padTime = (value: number) => {
  const str = value.toString();

  return str.length === 1 ? `0${str}` : str;
};

export const formatTime = (seconds: number) => {
  const int = Math.floor(seconds / 60);
  const decimal = Math.floor(seconds % 60);

  return `${int}:${padTime(decimal)}`;
};

export function removeDuplicates(arr: string[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

export function formatNumber(amount: number, n: number = 0, x: number = 0) {
  const re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return amount.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
}

export function formatPhoneNumber(phoneNumber: string): string {
  // Remove all non-digit characters
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");

  // Check if the cleaned number has the right length
  if (cleaned.length !== 12) {
    return phoneNumber;
  }

  // Format the number
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
  }

  return phoneNumber;
}

export async function downloadFile(filename: string, url: string) {
  try {
    // Fetch the file from the URL
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Convert the response to a Blob
    const blob = await response.blob();

    // Create a URL for the Blob object
    const downloadUrl = URL.createObjectURL(blob);

    // Create a link element
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = filename; // Set the download attribute with the filename

    // Append the link to the body (required for Firefox)
    document.body.appendChild(a);

    // Programmatically trigger a click on the link to start the download
    a.click();

    // Clean up by revoking the object URL and removing the link element
    URL.revokeObjectURL(downloadUrl);
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error downloading the file:", error);
  }
}

export function slugify(text: string): string {
  return text
    .toString() // Convert to string (if not already)
    .normalize("NFD") // Normalize to decompose special characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing whitespace
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}

export function findAddedAndRemovedElements(
  arrayA: string[],
  arrayB: string[]
): { added: string[]; removed: string[] } {
  // Create sets from the arrays for easier manipulation
  const setA = new Set(arrayA);
  const setB = new Set(arrayB);

  // Find elements in arrayB that are not in arrayA (added)
  const added = Array.from(setB).filter((item) => !setA.has(item));

  // Find elements in arrayA that are not in arrayB (removed)
  const removed = Array.from(setA).filter((item) => !setB.has(item));

  return {
    added,
    removed,
  };
}

export function padNumber(num: number, length: number): string {
  return num.toString().padStart(length, "0");
}

export function unpadNumber(padded: string): number {
  return Number(padded);
}

export function formatAmountForDisplay(
  amount: number,
  currency: string
): string {
  const numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(amount);
}

/**
 * Returns the last `n` days as an array of date strings in the format 'YYYY-MM-DD'.
 * @param n - The number of days to look back.
 * @returns An array of date strings.
 */
export function getLastNDays(n: number): string[] {
  const today = new Date();
  const lastNDays = [];

  for (let i = 0; i < n; i++) {
    // Subtract 'i' days from today
    const date = subDays(today, i);
    // Format the date as YYYY-MM-DD
    const formattedDate = format(date, "yyyy-MM-dd");
    lastNDays.push(formattedDate);
  }

  return lastNDays;
}

export const getLocationKindName = (kind: string) => {
  const parentKind: Record<string, string> = {
    BASE_DIRECTION: "Direction",
    DISTRICT: "District",
    DISTRICT_BRANCH: "Zone",
    PARKING: "Parking",
    CROSSROAD: "Caréfour",
    IMPOUD_AREA: "Fourrière",
    MARKET: "Etalage",
  };

  return parentKind[kind] || "----";
};
