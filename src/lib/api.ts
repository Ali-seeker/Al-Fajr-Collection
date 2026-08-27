const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE}/api${endpoint}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Request failed" }));
    throw new Error(error.error || `HTTP error ${response.status}`);
  }

  return response.json();
}

// Collections
export const collectionsApi = {
  getAll: (activeOnly = true) => fetchApi<{ products: any[] }[]>(`/collections?activeOnly=${activeOnly}`),
  getBySlug: (slug: string, includeProducts = false) => fetchApi(`/collections?slug=${slug}&includeProducts=${includeProducts}`),
};

// Products
export const productsApi = {
  getAll: (params?: { collectionSlug?: string; featured?: boolean; activeOnly?: boolean; limit?: number; page?: number }) => {
    const searchParams = new URLSearchParams();
    if (params?.collectionSlug) searchParams.set("collectionSlug", params.collectionSlug);
    if (params?.featured) searchParams.set("featured", "true");
    if (params?.activeOnly !== undefined) searchParams.set("activeOnly", String(params.activeOnly));
    if (params?.limit) searchParams.set("limit", String(params.limit));
    if (params?.page) searchParams.set("page", String(params.page));
    return fetchApi(`/products?${searchParams.toString()}`);
  },
  getBySlug: (slug: string) => fetchApi(`/products?slug=${slug}`),
};

// Orders
export const ordersApi = {
  create: (data: any) => fetchApi("/orders", { method: "POST", body: JSON.stringify(data) }),
  getByOrderNumber: (orderNumber: string) => fetchApi(`/orders?orderNumber=${orderNumber}`),
  getUserOrders: (userId: string) => fetchApi(`/orders?userId=${userId}`),
};

// Partner Applications
export const partnerApi = {
  submit: (data: any) => fetchApi("/partner", { method: "POST", body: JSON.stringify(data) }),
  getAll: (params?: { status?: string; page?: number; limit?: number }) => {
    const searchParams = new URLSearchParams();
    if (params?.status) searchParams.set("status", params.status);
    if (params?.page) searchParams.set("page", String(params.page));
    if (params?.limit) searchParams.set("limit", String(params.limit));
    return fetchApi(`/partner?${searchParams.toString()}`);
  },
};

// Contact Inquiries
export const contactApi = {
  submit: (data: any) => fetchApi("/contact", { method: "POST", body: JSON.stringify(data) }),
  getAll: (params?: { status?: string; type?: string; page?: number; limit?: number }) => {
    const searchParams = new URLSearchParams();
    if (params?.status) searchParams.set("status", params.status);
    if (params?.type) searchParams.set("type", params.type);
    if (params?.page) searchParams.set("page", String(params.page));
    if (params?.limit) searchParams.set("limit", String(params.limit));
    return fetchApi(`/contact?${searchParams.toString()}`);
  },
};

// Newsletter
export const newsletterApi = {
  subscribe: (email: string, name?: string, source?: string) => fetchApi("/newsletter", {
    method: "POST",
    body: JSON.stringify({ email, name, source }),
  }),
  getAll: (activeOnly = true) => fetchApi(`/newsletter?activeOnly=${activeOnly}`),
};

// Lookbook
export const lookbookApi = {
  getAll: (activeOnly = true) => fetchApi(`/lookbook?activeOnly=${activeOnly}`),
};

// Wholesale
export const wholesaleApi = {
  getAll: () => fetchApi("/wholesale"),
  getFaqs: () => fetchApi("/wholesale?type=faq"),
  getBenefits: () => fetchApi("/wholesale?type=benefits"),
  getProcess: () => fetchApi("/wholesale?type=process"),
};

// Auth
export const authApi = {
  login: (email: string, password: string) => fetchApi("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  register: (data: { name: string; email: string; password: string; confirmPassword: string; business?: string }) => fetchApi("/auth/register", { method: "POST", body: JSON.stringify(data) }),
  me: () => fetchApi("/auth/me"),
};