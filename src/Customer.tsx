import { useEffect, useState } from 'react';
import { customer } from './api';
export function Customer() {
  const [id,setId]=useState('a'),[name,setName]=useState('Loading');
  useEffect(()=>{customer(id).then(setName);},[id]);
  return <section><h2>Customer</h2><select aria-label="Customer" value={id} onChange={e=>setId(e.target.value)}><option value="a">Avery</option><option value="b">Blair</option></select><p aria-label="Customer detail">{name}</p></section>;
}
