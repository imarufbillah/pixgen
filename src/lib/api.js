// API utility functions for fetching data

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Fetch all images from the JSON file
 * @returns {Promise<Array>} Array of image objects
 */
export async function fetchImages() {
  try {
    const res = await fetch(`${BASE_URL}/data/images.json`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch images");
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
    const res = await fetch(`${BASE_URL}/data/images.json`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
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
