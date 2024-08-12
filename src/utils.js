export default function formatDate() {
  const date = new Date().toLocaleDateString("en-uk", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return date;
}
