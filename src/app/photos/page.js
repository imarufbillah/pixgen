import { fetchImages, fetchCategories } from "@/lib/api";
import PhotosClient from "./PhotosClient";

export default async function AllPhotos() {
  // Fetch data on the server
  const images = await fetchImages();
  const categories = await fetchCategories();

  // Pass data to client component for interactivity
  return <PhotosClient images={images} categories={categories} />;
}
