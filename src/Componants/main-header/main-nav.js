'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-nav.module.css";
const mainNav = ({href, children}) => {
    const path= usePathname();  
  return (
    <div>
    <Link href= {href} className= {path.startsWith(href)? classes.active : ''} >   
    {children}
    </Link>
    </div>
  )
}

export default mainNav
