import { useState } from "react"


function PaymentCard({value}) {
  const [image,setImage] = useState(false);
  console.log(image)
  return (
    <div className="paymentcard" onClick={()=>setImage(!image)}>
    
        {image?<img src={value.qr} alt="QR-scanner"/> :<img src={value.logo} alt="logo"/>}
    </div>
  )
}

export default PaymentCard