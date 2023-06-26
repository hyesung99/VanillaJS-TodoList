export default function generateUniqueId() {
  const timestamp = Date.now().toString();
  const randomString = Math.random().toString().slice(0, 5);
  return `${timestamp}${randomString}`;
}
