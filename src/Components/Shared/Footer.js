import React from 'react';

const Footer = () => {
      const year=new Date().getFullYear()
    return (
        <div className='py-5  bottom-0  bg-base-200 ' >
           
            <div  className='flex gap-4 justify-center items-center py-3 text-xl text-black '>
                
                <a className=' text-black' href='https://www.linkedin.com/in/mak143/' target={"blank"} ><i class="fa-brands fa-facebook"></i></a>
                <a className=' text-black' href='https://www.linkedin.com/in/mak143/' target={"blank"} > <i class="fa-brands fa-twitter"></i></a>
                <a className=' text-black' href='https://www.linkedin.com/in/mak143/' target={"blank"} ><i class="fa-brands fa-instagram"></i></a>
                <a className=' text-black' href='https://www.linkedin.com/in/mak143/' target={"blank"} > <i class="fa-brands fa-youtube"></i></a>
                <a className=' text-black' href='https://www.linkedin.com/in/mak143/' target={"blank"} > <i class="fa-brands fa-linkedin"></i></a>    
            </div>
            <div className='text-black text-center'><small>Copyright &copy; {year}  </small></div>
        </div>
    );
};

export default Footer;