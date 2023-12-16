import { BsBellFill, BsSearch } from 'react-icons/bs';



function Nav() {
    return (
      <nav className="flex justify-between items-center p-4">
        <div className='flex items-center '>
          <a href="#" className='block w-40' >
            <img className='h-10 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/299px-Netflix_2015_logo.svg.png?20190206123158" alt="" />
          </a>
          <div className='space-x-7 ml-[40px] hidden md:block '>
            <a href="#" className='text-gray-400 hover:underline'>New</a>
            <a href="#" className='text-gray-400 hover:underline'>Movies</a>
            <a href="#" className='text-gray-400 hover:underline'>Series</a>
            <a href="#" className='text-gray-400 hover:underline'>Cartoons</a>

          </div>
        </div>
        <div className='text-gray-200 flex space-x-6'>
          <span className='cursor-pointer'>
          <BsSearch size={25} />
          </span>
          <span className='cursor-pointer'>
            <BsBellFill size={25} />

          </span>
        </div>

      </nav>
    )
}

export default Nav