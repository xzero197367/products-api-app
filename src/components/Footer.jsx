import React from 'react'

const Footer = () => {

  const footerAPI = {
    titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
    links: [
      [
        {link: "News"},
        {link: "Careers"},
        {link: "Investors"},
        {link: "Prupose"},
        {link: "Sustainability"},
      ],
      [
        {link: "Order Status"},
        {link: "Shipping & Delivery"},
        {link: "Payment Options"},
        {link: "Gift Card Balance"},
        {link: "Contact Us"},
        {link: "FAQ"},
        {link: "Blog"},
      ],
      [
        {link: "Gift Cards"},
        {link: "Promotions"},
        {link: "Find A Store"},
        {link: "Signup"},
        {link: "Nike Jouneral"},
        {link: "Send Us Feeback"},
      ],
    ]
  };

  const {titles, links} = footerAPI


  return (
    <footer className='bg-theme mt-10 pt-7 pb-5 z-20'>

      <div className='nike-container text-slate-200'>

        <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>

          {
            titles.map((val, i)=>(
              <div key={i} className="grid items-center">
                <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
              </div>
            ))
          }

          
          {
            links.map((list, i)=>(
              <ul key={i} className="grid items-center gap-1">
                {
                  list.map((link, index)=>(
                    <li key={index} className='text-sm sm:text-xs'>{link.link}</li>
                  ))
                }
              </ul>
            ))
          }

        </div>

        <div className='mt-5 text-center'>
          <p className='text-sm md:text-center'>
            CopyRight<sup className='text-base font-bold'>&copy;</sup> 
            All Reserved Rights 2022 
            <span className='font-semibold'> Ezz Abdelmoez</span>
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer