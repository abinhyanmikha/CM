export default function dateFormat(date) {
  if (date instanceof Date) {
    return date.toLocaleDateString("en-US", {
      timeZone: "Asia/Kathmandu",
    });
  } else {
    return "";
  }
}
