import NotFoundClient from "./NotFoundClient";

export const metadata = {
  title: "404 - Page Not Found | PixGen",
  description:
    "The page you're looking for doesn't exist. Explore our AI-generated art gallery instead.",
};

export default function NotFound() {
  return <NotFoundClient />;
}
