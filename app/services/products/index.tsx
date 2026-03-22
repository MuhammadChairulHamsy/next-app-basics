// app/services/products.ts

export const getDataProduct = async (url: string) => {
  try {
    const res = await fetch(url, {
      next: { tags: ["products"] }
    });
    if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);
    const json = await res.json();
    return json.data ?? [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return null;
  }
};
