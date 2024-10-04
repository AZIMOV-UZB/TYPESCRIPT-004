import {memo}from 'react'
import "./Footer.scss"





const Footer = () => {
  return (
    <div className='bg-slate-400  mt-1'>
    <div className='footer container mx-auto px-5 justify-between  text-black'>

<div className='footer__wrapper flex justify-between flex-wrap'>




<div className='footer__card'>
    <p className='footer__title font-bold text-2xl mt-6'>Company</p>
    <p className='footer__text font-medium mt-6'>About Us</p>
    <p className='footer__text  font-medium	 mt-6'>Delivery Information</p>
    <p className='footer__text  font-medium	 mt-6'>Privacy Policy</p>
    <p className='footer__text  font-medium	 mt-6'>Terms & Conditions</p>
    <p className='footer__text  font-medium	 mt-6'>Contact Us</p>
    <p className='footer__text  font-medium	 mt-6'>Support Center</p>
    <p className='footer__text  font-medium	 mt-6'>Careers</p>
</div>

<div className='footer__card'>
    <p className='footer__title font-bold text-2xl mt-6'>Account</p>
    <p className='footer__text   font-medium	 mt-6 '>Sign In</p>
    <p className='footer__text   font-medium	 mt-6 '>View Cart</p>
    <p className='footer__text   font-medium	 mt-6 '>My Wishlist</p>
    <p className='footer__text   font-medium	 mt-6 '>Track My Order</p>
    <p className='footer__text  font-medium	 mt-6 '>Help Ticket</p>
    <p className='footer__text   font-medium	 mt-6 '>Shipping Details</p>
    <p className='footer__text   font-medium	 mt-6 '>Compare products</p>
</div>

<div className='footer__card'>
    <p className='footer__title font-bold text-2xl mt-6'>Corporate</p>
    <p className='footer__text   font-medium	 mt-6 '>Become a Vendor</p>
    <p className='footer__text   font-medium	 mt-6 '>Affiliate Program</p>
    <p className='footer__text   font-medium	 mt-6 '>Farm Business</p>
    <p className='footer__text   font-medium	 mt-6 '>Farm Careers</p>
    <p className='footer__text   font-medium	 mt-6 '>Our Suppliers</p>
    <p className='footer__text   font-medium	 mt-6 '>Accessibility</p>
    <p className='footer__text   font-medium	 mt-6 '>Promotions</p>
</div>



<div className='footer__card'>
    <p className='footer__title font-bold text-2xl mt-6'>Popular</p>
    <p className='footer__text   font-medium	 mt-6 '>Milk & Flavoured Milk</p>
    <p className='footer__text   font-medium	 mt-6 '>Butter and Margarine</p>
    <p className='footer__text  font-medium	 mt-6 '>Eggs Substitutes</p>
    <p className='footer__text   font-medium	 mt-6 '>Marmalades</p>
    <p className='footer__text   font-medium	 mt-6 '>Sour Cream and Dips</p>
    <p className='footer__text   font-medium	 mt-6 '>Tea & Kombucha</p>
    <p className='footer__text   font-medium	 mt-6 '>Cheese</p>
</div>



</div>
    </div>


    </div>
  )
}

export default memo(Footer)