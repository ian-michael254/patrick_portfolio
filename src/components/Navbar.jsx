

function Navbar() {
  return (
   <header className="w-full mx-w-full h-automx-h-auto bg-green-100 flex justify-between items-center space-x-8 px-5 py-3 box-border" >
    <h1 className="text-xl font-logo cursor-pointer text-slate-900">PATRICK OCHIENG' </h1>
    <nav className="hidden md:block">
        <ul className=" md:flex md:space-x-10 md:text-lg md:font-medium md:text-violet-700">
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
        </ul>
    </nav>
    <i class="ri-menu-line text-2xl cursor-pointer text-slate-900 md:hidden"></i>
    
   </header>
  )
}

export default Navbar