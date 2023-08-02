export function removeNullUndefinedKeys<T>(obj: T): T {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key]
    }
  }
  return obj
}

export function replacer(key: string, value: string) {
  if (typeof value === 'string') {
    return value.replace(/\n/g, '\\n')
  }
  return value
}
