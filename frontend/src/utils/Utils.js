export function formatTimestamp(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleString()
}

export function guid() {
  function random() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return random()
}
