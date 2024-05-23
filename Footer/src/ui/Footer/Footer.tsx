import React from 'react';
import "./Footer.scss"

export let footerOptions: ISingleOption[] = [
  {
    name: 'Social',
    subOptions: [
      { name: 'LinkedIn', url: '/', blank: '_blank' },
      { name: 'Facebook', url: '/', blank: '_blank' },
      { name: 'Instagram', url: '/', blank: '_blank' },
      { name: 'X', url: '/', blank: '_blank' }
    ]
  },
  {
    name: 'Pages',
    subOptions: [
      { name: 'About', url: '/about' },
      { name: 'Features', url: '/feature' },
      { name: 'Pitch', url: '/pitch' },
      { name: 'Contact', url: '/contact' }
    ]
  },
  {
    name: 'Contact',
    subOptions: [
      {
        name: 'xyz, Plot No. 10, Sector 13, IT Park, Chandigarh',
        url: 'https://maps.app.goo.gl/6PmTzFpYniaMRe3MA'
      },
      { name: 'hello@xyz.com', url: 'mailto:hello@xyz.com' },
      { name: '+919872727227', url: 'tel:+919872727227' }
    ]
  }]

  export interface IFooterContent {
    navigationOptions: ISingleOption[];
    bottomOptions: ISubOption[];
    appStoreLink: string;
    googlePlayLink: string;
  }
  
  interface ISingleOption {
    name: string;
    subOptions: ISubOption[];
    icons?: boolean;
  }
  
  interface ISubOption {
    name?: string;
    url: string;
    iconSrc?: string;
    blank?: string;
  }


const footer = () => {
  return (
    <footer className='page-footer'>
        {footerOptions?.map((item:ISingleOption) => 
        <div className='nav-options'>
          <h3>{item.name}</h3>
        <ul className='sub-options'>
          {item.subOptions.map((item: ISubOption)=>
          <li className='option' key={item.name}><a href={item.url}>{item.name}</a></li>
        )}
        </ul>
        </div>
)}
    </footer>
  )
}

export default footer