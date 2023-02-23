import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFilm } from 'react-icons/bs';
import { SlSocialTwitter } from 'react-icons/sl';
import MenuItem from './MenuItem';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title={'MOVIES'} address={'/'} Icon={ BsFilm } />
        <MenuItem title={'TWITTER'} address={'http://twitter.com/Sakae'} Icon={ SlSocialTwitter } />
        <MenuItem title={'CONTACT'} address={'/contact'} Icon={ AiOutlineMail } />
      </div>
      <div className=''>
        <Link href="/">
          <h2 className='text-2xl'>
            <span className='font-bold text-2xl mx-1'>MY</span>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>MOVIES</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
