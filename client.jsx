"use client"
import { useState } from "react"

export default function ClientSideComponent({stock}) {
  const [quantitiy, seQuantity] = useState(0);
  return(
    <div className="quantity">
      <button onClick={() => seQuantity(prev => prev -1)}>-</button>
      <span>{quantitiy}</span>
      <button onClick={() => seQuantity(prev => prev === stock ? stock : prev +1)}>+</button>
    </div>
  )
}