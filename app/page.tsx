import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-1 justify-center	self-center py-12	'>
<div>
  <Link href='/contact'> Contact</Link>
</div>
    <div className='px-3'>Hello NextJs! ,</div>
    <div>
<p>My Name is Numan  Abubakar ! Will you be my Best Friend? @123 </p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, iste. Accusantium laborum voluptatum nesciunt odio, distinctio quae esse alias quam qui vitae dolorum pariatur sapiente dignissimos? Tempore officia quidem explicabo.</p>
    </div>
    </div>
  )
}

export default Home