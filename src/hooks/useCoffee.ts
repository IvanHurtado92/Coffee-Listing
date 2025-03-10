import { Coffee } from "../models/Coffee";
import { useEffect, useState } from "react";

export function useCoffee():Coffee[]{

    const [result, setResult] = useState<Coffee[]>([])
    
    useEffect(() => {
      const api = async () => {
        const data = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json",{
          method: "GET"
        });
        const jsonData = await data.json()
        setResult(jsonData)
      }
      api()
    }, [])
    
    return result

}
