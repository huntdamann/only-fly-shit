import React from "react";
import '../../css/Marquee.css'

interface StockItem {
    company: string
    price: string
    change: string
    direction: "plus" | "minus"
  }
  
  const stocks: StockItem[] = [
    { company: "Made With Intention", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
    { company: "Hand-Crafted Candles", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
    { company: "Glass Photo Albums", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
    { company: "More Soon", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
  ]

  const Spacer = () => (
    <li aria-hidden="true" style={{ display: "flex", alignItems: "center" }}>
      <div style={{ transform: "rotate(45deg)", width: "8px", height: "8px", backgroundColor: "rgba(0, 0, 0, 0.5)", flexShrink: 0 }} />
    </li>
  )
  
  const StockList = ({ hidden = false }: { hidden?: boolean }) => (
    <ul aria-hidden={hidden || undefined}>
      {stocks.map((stock, index) => (
        <React.Fragment key={stock.company}>
          <li>
            <span className="company">{stock.company}</span>
          </li>
          <Spacer />
        </React.Fragment>
      ))}
    </ul>
  )
  
  export const StockTicker = () => {
    return (
      <div className="stock-ticker">
        <StockList />
        <StockList hidden />
      </div>
    )
  }