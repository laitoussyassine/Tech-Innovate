import Link from "next/link";
import styles from "./Navbar.module.css";
import {links} from "./data.js";


import { Montserrat } from "next/font/google";
const logoFont = Montserrat({ 
  subsets: ["latin"],
  weight: ['400'],
});


export default function Navbar() {
  return (
    <div className={"flex justify-between items-center bg-slate-400"}>
        <Link href={"/"} className={`font-bold text-yellow-300 text-lg ${logoFont.className}`}>Tech Innovate</Link>
        <div className={"flex gap-4"}>
            {links.map( link =>
                <Link key={link.id} href={link.url} >{link.title}</Link>
            )}
        </div>
    </div>
  )
}