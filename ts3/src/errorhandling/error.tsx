import { useState } from "react"

export const MyComponent=()=>{
    const[error,seterror]=useState<string|null>(null);
 const handleClick = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
    } catch (error: unknown) { 
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };
};