// API utility functions for fetching data

/**
 * Get the base URL for API requests
 * In production, use the Vercel URL or custom domain
 * In development, use localhost
 */
function getBaseUrl() {
  // Check if we're on the server
  if (typeof window === "undefined") {
    // Server-side: Use Vercel URL or localhost
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      return process.env.NEXT_PUBLIC_BASE_URL;
    }
    return "http://localhost:3000";
  }
  // Client-side: Use current origin
  return window.location.origin;
}

/**
 * Fetch all images from the JSON file
 * @returns {Promise<Array>} Array of image objects
 */
export async function fetchImages() {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/data/images.json`, {
      next: { revalidate: 3600 }, // Revalidate every hour
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch images: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();
    return data.images || [];
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

/**
 * Fetch a single image by ID
 * @param {string} id - Image ID
 * @returns {Promise<Object|null>} Image object or null if not found
 */
export async function fetchImageById(id) {
  try {
    const images = await fetchImages();
    return images.find((img) => String(img.id) === String(id)) || null;
  } catch (error) {
    console.error("Error fetching image by ID:", error);
    return null;
  }
}

/**
 * Fetch all categories
 * @returns {Promise<Array>} Array of category strings
 */
export async function fetchCategories() {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/data/images.json`, {
      next: { revalidate: 3600 }, // Revalidate every hour
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch categories: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();
    return data.categories || ["All"];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return ["All"];
  }
}

/**
 * Fetch images by category
 * @param {string} category - Category name
 * @returns {Promise<Array>} Filtered array of image objects
 */
export async function fetchImagesByCategory(category) {
  try {
    const images = await fetchImages();

    if (category === "All" || !category) {
      return images;
    }

    return images.filter((img) => img.category === category);
  } catch (error) {
    console.error("Error fetching images by category:", error);
    return [];
  }
}

/**
 * Get top N images (by likes)
 * @param {number} count - Number of images to return
 * @returns {Promise<Array>} Array of top image objects
 */
export async function fetchTopImages(count = 6) {
  try {
    const images = await fetchImages();
    return images.sort((a, b) => b.likes - a.likes).slice(0, count);
  } catch (error) {
    console.error("Error fetching top images:", error);
    return [];
  }
}
