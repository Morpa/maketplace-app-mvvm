import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delay: number = 500) => {
  const [debounceValue, setDebounceValue] = useState<T>(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [value, delay])

  return debounceValue
}
