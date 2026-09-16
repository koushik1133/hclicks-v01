export interface Inquiry {
  id: string;
  refCode: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  region: "USA" | "HYDERABAD";
  budget: string;
  guestCount: string;
  coverage: string;
  message: string;
  createdAt: string;
  status: "PENDING" | "CONFIRMED" | "ARCHIVED";
}

// Initial seed inquiries for demonstration
const initialInquiries: Inquiry[] = [
  {
    id: "inq-1",
    refCode: "HC-2026-9812",
    name: "Ananya Sharma & Vikram Roy",
    email: "ananya.sharma@example.com",
    phone: "+1 (312) 555-0194",
    eventType: "Falaknuma Palace Royal Wedding",
    eventDate: "2026-11-18",
    location: "Hyderabad, India",
    region: "HYDERABAD",
    budget: "$25,000 - $40,000",
    guestCount: "450 Guests",
    coverage: "3-Day Cinema & Photo Package",
    message: "We love your editorial 8K showreels. Looking for complete multi-day coverage including Sangeet and reception.",
    createdAt: "2026-09-15T14:30:00Z",
    status: "PENDING",
  },
  {
    id: "inq-2",
    refCode: "HC-2026-8410",
    name: "Sophia Martinez & David Miller",
    email: "sophia.m@example.com",
    phone: "+1 (847) 555-0812",
    eventType: "Lake Michigan Twilight Wedding",
    eventDate: "2026-10-04",
    location: "Chicago, IL",
    region: "USA",
    budget: "$15,000 - $25,000",
    guestCount: "200 Guests",
    coverage: "Full Day Photography & Highlight Film",
    message: "Seeking high-end editorial portraits on the skyline and ceremony coverage.",
    createdAt: "2026-09-14T09:15:00Z",
    status: "CONFIRMED",
  },
  {
    id: "inq-3",
    refCode: "HC-2026-7291",
    name: "Priya Patel & Rohan Mehta",
    email: "priya.patel@example.com",
    phone: "+1 (309) 555-0431",
    eventType: "Autumn Estate Pre-Wedding Shoot",
    eventDate: "2026-09-28",
    location: "Normal, IL",
    region: "USA",
    budget: "$8,000 - $15,000",
    guestCount: "Intimate",
    coverage: "Editorial Portrait Session & 4K Reel",
    message: "Need outdoor autumn prairie portraits and cinematic slow-motion clips.",
    createdAt: "2026-09-12T18:45:00Z",
    status: "PENDING",
  },
];

// Global in-memory singleton to persist data across requests during server runtime
const globalForInquiries = globalThis as unknown as {
  inquiriesStore: Inquiry[];
};

export const inquiriesStore = globalForInquiries.inquiriesStore || [...initialInquiries];
if (process.env.NODE_ENV !== "production") {
  globalForInquiries.inquiriesStore = inquiriesStore;
}

export function getInquiries(): Inquiry[] {
  return [...inquiriesStore].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function addInquiry(
  data: Omit<Inquiry, "id" | "refCode" | "createdAt" | "status">
): Inquiry {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  const newInquiry: Inquiry = {
    ...data,
    id: `inq-${Date.now()}`,
    refCode: `HC-2026-${randomDigits}`,
    createdAt: new Date().toISOString(),
    status: "PENDING",
  };
  inquiriesStore.unshift(newInquiry);
  return newInquiry;
}

export function updateInquiryStatus(
  id: string,
  status: "PENDING" | "CONFIRMED" | "ARCHIVED"
): Inquiry | null {
  const item = inquiriesStore.find((i) => i.id === id);
  if (item) {
    item.status = status;
    return item;
  }
  return null;
}

export function deleteInquiry(id: string): boolean {
  const index = inquiriesStore.findIndex((i) => i.id === id);
  if (index !== -1) {
    inquiriesStore.splice(index, 1);
    return true;
  }
  return false;
}
