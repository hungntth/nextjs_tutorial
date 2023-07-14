export function removeNullUndefinedKeys<T>(obj: T): T {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key]
    }
  }
  return obj
}
