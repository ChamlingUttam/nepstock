export interface ContactPayload {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

const BASE_URL = "https://stocknep.product-api.hamroyouthit.com/api/v1";

export async function submitContact(
  data: ContactPayload
): Promise<ContactResponse> {
  const res = await fetch(`${BASE_URL}/public/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { message?: string }).message || "Failed to send message. Please try again."
    );
  }

  return res.json();
}
