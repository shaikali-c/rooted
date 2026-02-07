export default function timeAgo(timestamp) {
  if (!timestamp) return "Not saved yet";

  const diffMs = Date.now() - timestamp;
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return "Saved just now";
  if (diffMin < 60) return `Saved ${diffMin} min ago`;

  const diffHr = Math.floor(diffMin / 60);
  return `Saved ${diffHr} hour${diffHr > 1 ? "s" : ""} ago`;
}
