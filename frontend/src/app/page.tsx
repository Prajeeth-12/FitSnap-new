import Navbar from '@/components/Navbar'
import Hero3D from '@/components/Hero3D'

export default function HomePage(){
  return (
    <>
      <Navbar />
      <section className="grid md:grid-cols-2 gap-8 items-center pt-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Smart Fashion, Perfect Fit,
            <br />
            <span className="text-teal">Zero Guesswork.</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-xl">
            AI-powered recommendations and immersive 3D try-on. Upload a photo or enter measurements to find your perfect size.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn-primary" href="/try-demo">Try Your Fit</a>
            <a className="px-5 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition" href="#about">Learn more</a>
          </div>
        </div>
        <Hero3D />
      </section>

      <section id="about" className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-2">AI Size Recommendation</h3>
          <p className="text-white/70">Get instant sizing guidance using your measurements or photos. No more returns.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-2">3D Virtual Try-On</h3>
          <p className="text-white/70">Preview outfits on a 3D avatar shaped like you. Rotate and zoom for details.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-2">Retailer Dashboard</h3>
          <p className="text-white/70">Upload garment measurements and see fit matches for your customers.</p>
        </div>
      </section>
    </>
  )
}
