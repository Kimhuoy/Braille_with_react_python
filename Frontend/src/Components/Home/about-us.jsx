import React from "react";
import innovation from "../../assets/innovation-center-pic.png";
import Footer from "../Layout/footer";

const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <img
          src={innovation}
          alt="innovationcenter"
          className="lg:w-[80vw] md:w-[85vw] w-[75vw]"
        />
      </div>
      <div className="lg:my-14 lg:mx-16 my-4 mx-12 md:mx-14">
        <h1 className="font-bold lg:text-3xl md:text-xl text-base mb-4">
          តើពួកយើងជានរណា?
        </h1>
        <div className="lg:flex md:flex lg:justify-between md:justify-between">
          <div className="items-center">
            <img
              src="https://www.idri.edu.kh/wp-content/uploads/2022/12/background-1.webp"
              className="lg:w-[80%] md:w-[70%] w-[50vw] max-w-auto ml-20 lg:ml-16 md:ml-16 md:mt-10"
            />
          </div>
          <div className="mt-4 lg:text-base text-sm md:text-mid">
            <p className="mb-4">
              វិទ្យាស្ថានស្រាវជ្រាវ និងនវានុវត្តន៍ឌីជីថល(IDRI)
              គឺជាស្ថាប័នស្រាវជ្រាវសាធារណៈមួយ
              ក្រោមបណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា(CADT)
              ទទួលបន្ទុកស្រាវជ្រាវ និងអភិវឌ្ឍន៍ផ្នែកបច្ចេកវិទ្យាឌីជីថល
              និងការច្នៃប្រឌិតឌីជីថល និងការលើកកម្ពស់សហគ្រិនភាព ។
            </p>
            <p className="mb-4">
              គោលដៅរបស់យើងគឺដើម្បីបង្កើតដំណោះស្រាយដែលឆ្លើយតបទៅនឹងតម្រូវការរបស់ទាំងវិស័យសាធារណៈ
              និងឯកជន និងដើម្បីរួមចំណែកដល់ការអភិវឌ្ឍន៍សេដ្ឋកិច្ចឌីជីថល
              និងសង្គមនៃព្រះរាជាណាចក្រកម្ពុជា ។
            </p>
            <p>
              យើងបន្តបង្កើតក្រុមស្រាវជ្រាវប្រកបដោយគុណភាព និងបរិយាកាសការងារល្អ
              និងសហការជាមួយគ្រប់ភាគីពាក់ព័ន្ធទាំងក្នុងស្រុក និងក្រៅស្រុក
              សម្រាប់ការផ្ទេរចំណេះដឹង និងបច្ចេកវិទ្យា ។
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex-1 lg:flex md:flex md:ml-2 lg:ml-0">
        <div className="lg:mt-12 lg:ml-16 my-4 mx-12 lg:w-full md:w-full">
          <div className="font-bold lg:text-3xl md:text-xl text-base mb-4 ">
            <h1>បេសកកម្មរបស់ពួកយើង</h1>
          </div>
          <div className="text-sm md:text-mid lg:text-base">
            <p className="mb-4">
              R&D និង Technology Transfer
              លើបច្ចេកវិទ្យាឌីជីថលដែលផ្តោតលើបច្ចេកវិទ្យាដែលកំពុងរីកចម្រើនដូចជា
              AI, IoT, Data Science, Cyber Security ។
            </p>
            <p className="mb-4">
              លើកកម្ពស់ការច្នៃប្រឌិតឌីជីថល និងបច្ចេកវិទ្យា ។
            </p>
            <p className="mb-4">
              ធ្វើការសិក្សា
              និងស្រាវជ្រាវគោលនយោបាយយ៉ាងម៉ត់ចត់លើបច្ចេកវិទ្យាឌីជីថល
              និងផលប៉ះពាល់របស់វាទៅលើសេដ្ឋកិច្ច និងសង្គម ។
            </p>
            <p className="mb-4">ការទទួលស្គាល់ទេពកោសល្យឌីជីថល ។</p>
          </div>
        </div>
        <div>
          <div className=" lg:border-r md:border-r border-black lg:border-l md:border-l lg:h-56 md:h-48 lg:mt-20 md:mt-10"></div>
        </div>
        <div className="lg:mt-12 lg:ml-16 my-4 mx-12 lg:w-full md:w-full">
          <div className="font-bold lg:text-3xl md:text-xl text-base mb-4 ">
            <h1>ចក្ខុវិស័យរបស់ពួកយើង</h1>
          </div>
          <div className="text-sm lg:text-base md:text-mid">
            <p className="mb-4">
              ដើម្បីក្លាយជាវិទ្យាស្ថានស្រាវជ្រាវ
              និងនវានុវត្តន៍ដ៏លេចធ្លោរបស់កម្ពុជា
              ជាមួយនឹងការទទួលស្គាល់ជាអន្តរជាតិនៅក្នុងបច្ចេកវិទ្យាឌីជីថល
              ដែលដោះស្រាយបញ្ហាប្រឈមសំខាន់ៗក្នុងសង្គម
              និងសេដ្ឋកិច្ចចំពេលមានការផ្លាស់ប្តូរឌីជីថលដ៏ឆាប់រហ័ស។
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-BlueDark text-white h-72 flex justify-between px-32 ">
        <div>
          <h1 className="text-2xl py-10">ទីតាំងរបស់ពួកយើង</h1>
          <p>ផ្លូវជាតិ6A សង្កាត់់ព្រែកលាប ខណ្ឌជ្រោយចង្វា រាជធានីភ្នំពេញ </p>
        </div>
        <div>
          <ul>
            <li>ទំព័រដើម</li>
            <li>បញ្ចេញមតិ</li>
            <li>ជំនួយ</li>
            <li>អំពីយើង</li>
          </ul>
        </div>
        <div>
          <h1>ទំនាក់ទំនង</h1>
          <p>ទូរស័ព្ទ</p>
          <p>អ៊ីម៊ែល</p>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default AboutUs;
