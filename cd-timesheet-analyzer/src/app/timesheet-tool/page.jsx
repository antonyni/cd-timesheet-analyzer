'use client'
import './page.css'
import handleFileUpload from '@/helpers/handleFileUpload';
import { useState,useEffect} from 'react';

const Home = () => {
  const [test , setTest] = useState(0);
  return (
    <main >
      <input type="file" onChange={handleFileUpload} />
    </main>  
  )
}

export default Home;