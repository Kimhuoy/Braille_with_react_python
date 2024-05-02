import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-BlueDark text-white lg:px-16 px-12 py-8 mt-12">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-3 md:gap-4 ">
        <div>
          <h2 className="lg:text-xl md:text:lg text-base font-bold mb-6">
            ទីតាំងរបស់ពួកយើង
          </h2>
          <p className="text-base md:text-base text-mid">
            ផ្លូវជាតិ6A សង្កាត់់ព្រែកលាប ខណ្ឌជ្រោយចង្វា រាជធានីភ្នំពេញ
          </p>
        </div>
        <div className="lg:pl-40 md:pl-24 lg:pt-0 md:pt-0 pt-4  lg:text-lg md:text-lg text-big">
          <ul>
            <li className="mb-4">
              <Link to="/">ទំព័រដើម</Link>
            </li>
            <li className="my-4">
              <a href="https://forms.gle/G4y6jdLfKcKAbNL47">បញ្ចេញមតិ</a>
            </li>
            <li className="my-4">
              <Link to="/guideline">ជំនួយ</Link>
            </li>
            <li className="my-4">
              <Link to="/about">អំពីយើង</Link>
            </li>
          </ul>
        </div>
        <div className="lg:pl-40 md:pl-8 lg:pt-0 ">
          <h2 className="lg:text-xl md:text:lg text-base font-bold mb-6">
            ទំនាក់ទំនង
          </h2>
          <ul className="text-base md:text-base text-mid">
            <li className="my-4">
              <p>
                <span className="font-bold">ទូរស័ព្ទ:</span> +855 10 344 040
              </p>
            </li>
            <li className="my-4">
              <p>
                <span className="font-bold">អ៊ីម៊ែល:</span> pr@cadt.edu.kh
              </p>
            </li>
          </ul>
        </div>
        <p className="lg:text-sm md:text-sm text-pi flex justify-center lg:pt-0 md:pt-6 pt-4">
          រក្សា​រ​សិទ្ធ​គ្រប់យ៉ាងដោយ IDRI @2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
