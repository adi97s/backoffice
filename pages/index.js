import { useState } from "react";

export default function Home() {
  const[visible, setVisible] = useState(false)
  
  return (
    <div>
      <ul className="flex border-b">
        <li className="mr-1">
          <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/pages-static">Page Static</a>
        </li>
        <li className="mr-1">
          <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/pages-dynamic/1">Page Dynamic</a>
        </li>
      </ul>
    </div>
  )
}