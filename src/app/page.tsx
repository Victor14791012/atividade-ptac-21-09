"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";


export default function Home() {
 return( 
 <div> <h1>Victor</h1>
  <Link href="/login">
          <p className={styles.fale_conosco}> Fale Conosco</p>
        </Link>
 

  </div>)
  

    
 }

 

