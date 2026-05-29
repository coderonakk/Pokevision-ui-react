const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-15 py-8' >
        <h4 className='bg-black text-white px-6 py-2 rounded-xl tracking-widest'>PokeVision</h4>
        <button onClick={()=> window.open("https://in.pinterest.com/", "_blank")}  className='bg-gray-400 text-black px-6 py-2 cursor-pointer rounded-xl tracking-widest text-sm'>Source: Pinterest.com  <i className="ri-home-5-line"></i></button>
        </div>
  )
}

export default Navbar