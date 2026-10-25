import { useEffect, useState } from 'react';
export function Counter() {
  const [seconds,setSeconds]=useState(0);
  useEffect(()=>{const timer=setInterval(()=>setSeconds(seconds+1),1000);return()=>clearInterval(timer);},[]);
  return <section><h2>Session</h2><output aria-label="Session seconds">{seconds}</output></section>;
}
