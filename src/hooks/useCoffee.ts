import { Coffee } from "../models/Coffee"
import { useEffect, useState } from "react"

export function useCoffee(): Coffee[] {
  const [result, setResult] = useState<Coffee[]>([])
  const url =
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
  const options = { method: "GET" }

  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, options)
      const jsonData = await data.json()
      setResult(jsonData)
    }
    api()
  }, [])

  return result
}
