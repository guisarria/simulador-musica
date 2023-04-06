import Image from 'next/image'
import React from 'react'
import FooterLogo from '../../assets/footer-logo.svg'

export default function Footer() {
  return (
    <>
      <footer className="w-full text-white -mt-2">
        <div className="py-4 text-sm bg-black/60">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-2 md:col-span-4 lg:col-span-6 text-white -ml-10 -mt-2">
                <Image width={150} height={100} src={FooterLogo} alt="" />
              </div>
              <nav aria-labelledby="footer-social-links" className="col-span-2 text-right md:col-span-4 lg:col-span-6">
                <ul className="flex items-center justify-end gap-4"></ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
