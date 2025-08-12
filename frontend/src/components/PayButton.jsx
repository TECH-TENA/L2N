import React from 'react'

export default function PayButton(){
  const link = import.meta.env.VITE_PAYMENT_LINK || 'https://tpiaiyfv.mychariow.com/prd_cku3m6/checkout';
  const handleClick = () => {
    window.open(link, '_blank');
    alert('Payment page opened in a new tab. After success, your payment provider should call the backend webhook to validate and record payment.');
  };
  return (
    <button onClick={handleClick} style={{ background:'#e11d48', color:'#fff', padding:'10px 16px', borderRadius:8, border:'none', cursor:'pointer' }}>
      Pay 2000 FRS & Join WhatsApp
    </button>
  )
}
