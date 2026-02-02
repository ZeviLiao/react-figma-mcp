const heroImg = "/images/hero.jpg";
const product1Img = "/images/product1.jpg";
const product2Img = "/images/product2.jpg";
const product3Img = "/images/product3.jpg";
const collection1Img = "/images/collection1.jpg";
const collection2Img = "/images/collection2.jpg";
const collection3Img = "/images/collection3.jpg";
const collection4Img = "/images/collection4.jpg";
const avatar1Img = "/images/avatar1.jpg";
const avatar2Img = "/images/avatar2.jpg";
const brandImg = "/images/brand.jpg";
const blog1Img = "/images/blog1.jpg";
const blog2Img = "/images/blog2.jpg";
const blog3Img = "/images/blog3.jpg";
const blog4Img = "/images/blog4.jpg";
const searchIcon = "/images/search-icon.svg";
const footerLogo = "/images/footer-logo.svg";

function StarRating() {
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-black">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function FigmaDemoPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter',sans-serif]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-transparent">
        <div className="flex items-center justify-between px-12 py-6">
          <a href="#" className="text-2xl font-medium tracking-tight">Cartelle</a>
          <div className="flex items-center gap-8 text-[15px] tracking-tight">
            <a href="#" className="hover:opacity-70">Home</a>
            <a href="#" className="hover:opacity-70">Shop</a>
            <a href="#" className="hover:opacity-70">About</a>
            <a href="#" className="hover:opacity-70">Support</a>
            <a href="#" className="hover:opacity-70">Blog</a>
          </div>
          <button className="w-8 h-8 flex items-center justify-center">
            <img src={searchIcon} alt="Search" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20">
        <div className="px-12 py-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '1824/872' }}>
            <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent pt-48 pb-12 px-12">
              <div className="flex items-end justify-between">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-100"
                >
                  Shop now
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 10h10M11 6l4 4-4 4" />
                    </svg>
                  </span>
                </a>
                <div className="text-right text-white max-w-[600px]">
                  <h1 className="text-[72px] leading-[1.1] font-medium tracking-tight mb-4">
                    Effortlessly Selling
                  </h1>
                  <p className="text-white/80 text-lg">
                    Discover quality products with fast shipping and secure checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="px-12 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm tracking-tight text-gray-500 uppercase mb-2">Fresh Selections</p>
            <h2 className="text-[64px] leading-[1.1] font-normal tracking-tight">New Arrivals</h2>
          </div>
          <a href="#" className="border border-black rounded-full px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors">
            View all products
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { img: product1Img, name: "DermaVerde", price: "USD $329" },
            { img: product2Img, name: "ElevateDesk", price: "USD $1490" },
            { img: product3Img, name: "Designer's Chair", price: "USD $1099" },
          ].map((product) => (
            <a key={product.name} href="#" className="group">
              <div className="aspect-[592/413] rounded-xl overflow-hidden mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">{product.price}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y border-gray-200">
        <div className="px-12 py-16 grid grid-cols-3 gap-12">
          {[
            {
              num: "01",
              title: "Deliver with Quality",
              desc: "Every product is crafted with care and attention to detail, ensuring the best for your customers.",
            },
            {
              num: "02",
              title: "Designed to Impress",
              desc: "A sleek, modern store that enhances your brand and creates a memorable shopping experience.",
            },
            {
              num: "03",
              title: "Curated for You",
              desc: "Handpicked selections that reflect the latest trends and timeless essentials.",
            },
          ].map((feature) => (
            <div key={feature.num}>
              <p className="text-sm text-gray-400 mb-6">{feature.num}</p>
              <h4 className="text-2xl font-medium tracking-tight mb-4">{feature.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="px-12 py-16">
        <div className="mb-10">
          <p className="text-sm tracking-tight text-gray-500 mb-2">Curated for quality</p>
          <h2 className="text-[64px] leading-[1.1] font-normal tracking-tight">Collections</h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 row-span-1 aspect-[592/450] rounded-xl overflow-hidden">
            <img src={collection1Img} alt="Collection 1" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 aspect-[592/450] rounded-xl overflow-hidden">
            <img src={collection2Img} alt="Collection 2" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-2 rounded-xl overflow-hidden" style={{ gridRow: '1 / 3' }}>
            {/* Empty space matching the design layout */}
          </div>
          <div className="col-span-1 row-span-1 aspect-[592/450] rounded-xl overflow-hidden">
            <img src={collection3Img} alt="Collection 3" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 aspect-[592/450] rounded-xl overflow-hidden">
            <img src={collection4Img} alt="Collection 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-12 py-16">
        <div className="flex gap-6 overflow-hidden">
          {[
            {
              text: "Cartelle made setting up my online store so easy! The design is sleek, and customization was a breeze. My customers love the new look!",
              name: "Emily Carter",
              role: "Boutique Owner",
              avatar: avatar1Img,
            },
            {
              text: "I've tried several eCommerce templates before, but Cartelle stands out. It's stylish, user-friendly, and perfectly suited for my furniture shop.",
              name: "Daniel Reed",
              role: "Home & Living Store Founder",
              avatar: avatar2Img,
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex-shrink-0 w-[calc(50%-12px)] bg-gray-50 rounded-2xl p-8"
            >
              <StarRating />
              <p className="mt-6 text-sm leading-relaxed text-gray-600">{testimonial.text}</p>
              <div className="flex items-center gap-3 mt-auto pt-32">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand / Video Section */}
      <section className="py-24 flex justify-center">
        <div className="relative w-[960px] aspect-[960/600] rounded-2xl overflow-hidden">
          <img src={brandImg} alt="Brand" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
            <p className="text-white text-2xl font-medium tracking-tight text-center">
              Discover a brand where style, quality, and craftsmanship come together.
            </p>
          </div>
        </div>
      </section>

      {/* Our News Section */}
      <section className="px-12 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm tracking-tight text-gray-500 uppercase mb-2">explore the trends</p>
            <h2 className="text-[64px] leading-[1.1] font-normal tracking-tight">Our News</h2>
          </div>
          <a href="#" className="border border-black rounded-full px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors">
            View all posts
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Featured Blog Post */}
          <div className="row-span-3">
            <a href="#" className="group block">
              <div className="aspect-[900/324] rounded-xl overflow-hidden mb-6">
                <img
                  src={blog1Img}
                  alt="Caring for Your Leather Bag"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gray-50 rounded-xl p-10">
                <h3 className="text-3xl font-medium tracking-tight mb-3">
                  Caring for Your Leather Bag
                </h3>
                <p className="text-sm text-gray-500 mb-16">
                  Essential maintenance and care tips to extend the life of your favorite leather products.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={avatar1Img} alt="Olivia Bennett" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium">Olivia Bennett</p>
                      <p className="text-xs text-gray-500">Accessories Expert</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>Mar 4, 2025</span>
                    <span>·</span>
                    <span>7 min read</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Side Blog Posts */}
          {[
            {
              img: blog2Img,
              title: "Customer Favorites: Bestselling Items You'll Love",
              desc: "See what's trending in our store and why customers can't get enough of these top-rated picks.",
            },
            {
              img: blog3Img,
              title: "The Story Behind Our Brand: What Makes Us Different",
              desc: "A deep dive into our brand's mission, values, and what sets our products apart.",
            },
            {
              img: blog4Img,
              title: "How to Choose the Perfect Sofa for Your Living Space",
              desc: "A guide to finding the right sofa, whether you prioritize comfort, durability, or style.",
            },
          ].map((post) => (
            <a key={post.title} href="#" className="group flex gap-6">
              <div className="w-[438px] flex-shrink-0 aspect-[438/200] rounded-xl overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-base font-medium tracking-tight mb-3">{post.title}</h5>
                <p className="text-sm text-gray-500 leading-relaxed">{post.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-12 pt-12 pb-8">
        <div className="flex justify-between mb-16">
          <div>
            <h4 className="text-2xl font-medium tracking-tight mb-4">Cartelle</h4>
            <a href="mailto:cartelle@design.com" className="block text-sm text-gray-400 hover:text-white mb-2">
              cartelle@design.com
            </a>
            <a href="tel:+12061231234" className="block text-sm text-gray-400 hover:text-white">
              +1 206-123-1234
            </a>
          </div>
          <div className="flex gap-24">
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Support</a>
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Blog Single</a>
            </div>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Shop</a>
              <a href="#" className="hover:text-white">Collections</a>
              <a href="#" className="hover:text-white">Product</a>
            </div>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">404</a>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/10 pt-8">
          <img src={footerLogo} alt="Cartelle" className="h-48 opacity-20" />
          <div>
            <p className="text-lg font-medium mb-3">Newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/20 rounded-l-full px-6 py-3 text-sm outline-none w-[400px] placeholder:text-gray-500"
              />
              <button className="border border-white/20 border-l-0 rounded-r-full px-6 py-3 text-sm hover:bg-white hover:text-black transition-colors">
                Sign up to newsletter
              </button>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-8">Created by Lunis Design</p>
      </footer>
    </div>
  );
}
