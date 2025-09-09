export default function Navbar(){
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="text-xl font-extrabold">
        Fit<span className="text-teal">Snap</span>
      </div>
      <div className="flex items-center gap-6 text-sm text-white/80">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/try-demo" className="hover:text-white">Try Demo</a>
        <a href="/retailer" className="hover:text-white">Retailer Login</a>
        <a href="#about" className="hover:text-white">About</a>
      </div>
    </nav>
  )
}
