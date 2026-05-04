// API utility functions for fetching data
import { readFile } from "fs/promises";
import { join } from "path";

/**
 * Read JSON data from the file system (server-side only)
 * This is more reliable than fetching during build time
 */
async function readJsonData() {
  try {
    // Read from public directory
    const filePath = join(process.cwd(), "public", "data", "images.json");
    const fileContents = await readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return { images: [], categories: ["All"] };
  }
}

/**
 * Fetch all images from the JSON file
 * @returns {Promise<Array>} Array of image objects
 */
export async function fetchImages() {
  try {
    const data = await readJsonData();
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
    const data = await readJsonData();
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
