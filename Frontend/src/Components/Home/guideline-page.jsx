import React from "react";
import { useEffect } from "react";
import guideline1 from "../../assets/guideline-1.jpg";
import guideline1sm from "../../assets/guideline-1-sm.jpg";
import guideline2 from "../../assets/guideline-2.jpg";
import guideline2sm from "../../assets/guideline-2-sm.jpg";
import guideline3 from "../../assets/guideline-3.jpg";
import guideline3sm from "../../assets/guideline-3-sm.jpg";
import appStore from "../../store/app";
import Footer from "../Layout/footer";

const Guideline = () => {
  const { isSmallScreen, setIsSmallScreen } = appStore();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lg:mt-24 mt-20 max-w-[100%] ">
      <div className="flex justify-center font-bold lg:text-2xl text-sm md:text-xl">
        <h1>
          ទំព័រនេះគឺជាទំព័រសម្រាប់បង្ហាញពីរបៀបប្រើប្រាស់របស់គេហទំព័របកប្រែភាសាប្រៃយ៍
        </h1>
      </div>
      <div>
        <div className="lg:mt-8 md:mt-8 mt-4 lg:ml-16 md:ml-14 ml-8 text-sm lg:text-base md:text-base font-bold">
          <h2>1. របៀបប្រើប្រាស់ទី 1</h2>
        </div>
        <div className="w-[60vw] mx-auto mt-8 p-2 border border-black border-1 flex justify-center">
          {isSmallScreen ? (
            <img src={guideline1sm} alt="guideline1" />
          ) : (
            /* Render guideline2 for medium and larger screens */
            <img src={guideline1} alt="guideline2" />
          )}
        </div>

        <ol className="custom-numbered-list  mt-8 lg:mx-24 md:mx-14 mx-8 text-sm lg:text-base md:text-base">
          <li>ទំព័រដើម គឺជាទំព័រដែលនាំយើងទៅកាន់ទំព័រដើមនៃគេហទំព័រ ។</li>
          <li>
            បញ្ចេញមតិ គីជាទំព័រដែលអ្នកប្រើប្រាស់អាចបញ្ចេញមតិទៅលើគេហទំព័រយើងបាន ។
          </li>
          <li>
            ជំនួយ
            គឺជាទំព័រដែលបង្ហាញពីរបៀបប្រើប្រាស់របស់គេហទំព័របកប្រែភាសាប្រៃយ៍​ ។
          </li>
          <li>អំពីយើង គីជាទំព័រដែលបង្ហាញពីប្រភពនៃគេហទំព័រ និង អ្នកបង្កើត ។</li>
          <li>
            បកប្រែឯកសារខ្មែរទៅប្រៃយ៍
            គឺជាប៊ូតុងមួយដែលយើងប្រើប្រាស់សម្រាប់ធ្វើការទម្លាក់ឯកសារក្នុងការបកប្រែ
            ។
          </li>
          <li>
            សញ្ញាគណិតវិទ្យាក្នុងប្រៃយ៍
            គឺជាប៊ុតុងមួយសម្រាប់នាំយើងទៅកាន់ការបកប្រែសញ្ញាក្នុងគណិតវិទ្យាទៅជាប្រៃយ៍
            ។
          </li>
        </ol>
      </div>
      <div>
        <div className="lg:mt-8 md:mt-8 mt-4 lg:ml-16 md:ml-14 ml-8 text-sm lg:text-base md:text-base font-bold">
          <h2>2. របៀបប្រើប្រាស់ទី 2</h2>
        </div>
        <div className="w-[60vw] mx-auto mt-8 p-2 border border-black border-1 flex justify-center">
          {isSmallScreen ? (
            <img src={guideline2sm} alt="guideline1" />
          ) : (
            /* Render guideline2 for medium and larger screens */
            <img src={guideline2} alt="guideline2" />
          )}
        </div>

        <ol className="custom-numbered-list  mt-8 lg:mx-24 md:mx-14 mx-8 text-sm lg:text-base md:text-base">
          <li>ប៊ូតុងនេះ គឺជាប៊ូតុងសម្រាប់ផ្លាស់ប្តូរការបកប្រែទៅវិញទៅមក ។</li>
          <li>
            អក្សរនេះ គឺជាការសម្គាល់ពីការបកប្រែដែលអ្នកប្រើប្រាស់កំពុងស្ថិតនៅ ។
          </li>
          <li>
            ប៊ូតុងនេះ គឺជាប៊ូតុងសម្រាប់ធ្វើការលុបអក្សរដែលបានសរសេរទាំងអស់​ ។
          </li>
          <li>
            ប៊ូតុងនេះ គឺជាប៊ូតុងសម្រាប់ធ្វើការចម្លងនៅលទ្ធផលដែលបានបកប្រែ​ ។
          </li>
          <li>ប៊ូតុងនេះ គឺជាប៊ូតុងសម្រាប់ធ្វើការតំឡើងឯកសារដែលបានបកប្រែ ។</li>
        </ol>
      </div>
      <div>
        <div className="lg:mt-8 md:mt-8 mt-4 lg:ml-16 md:ml-14 ml-8 text-sm lg:text-base md:text-base font-bold">
          <h2>3. របៀបប្រើប្រាស់ទី 3</h2>
        </div>
        <div className="w-[60vw] mx-auto mt-8 p-2 border border-black border-1 flex justify-center">
          {isSmallScreen ? (
            <img src={guideline3sm} alt="guideline1" />
          ) : (
            /* Render guideline2 for medium and larger screens */
            <img src={guideline3} alt="guideline2" />
          )}
        </div>

        <ol className="custom-numbered-list  mt-8 lg:mx-24 md:mx-14 mx-8 text-sm lg:text-base md:text-base">
          <li>
            ប៊ូតុងនេះ គឺជាប៊ូតុងសម្រាប់ជ្រើសរើសប្រភេទនៃសញ្ញាក្នុងគណិតវិទ្យា ។
          </li>
          <li>
            ប៊ូតុងទាំងអស់នេះ គឺជាប៊ូតុងសម្រាប់ជ្រើសរើសសញ្ញាក្នុងគណិតវិទ្យា ។
          </li>
        </ol>
      </div>
      <div>
        <div className="lg:mt-8 md:mt-8 mt-4 lg:ml-16 md:ml-14 ml-8 text-sm lg:text-base md:text-base font-bold text-red-500">
          <h2>ចំណាំ:</h2>
        </div>
        <ol className="custom-numbered-list lg:mx-24 md:mx-14 mx-8 text-sm lg:text-base md:text-base">
          <li>
            រាល់ការសរសេរលេខក្នុងការបកប្រែ សូមធ្វើការដកឃ្លាខាងក្រោយលេខនោះ
            ចំនួនមួយដង ។
            <h1 className="mx-4">
              ឧ. នៅក្នុងឆ្នាំ២០០៤ កុសលបានចាប់កំណើត (ត្រឹមត្រូវ) ។
            </h1>
            <h1 className="text-red-500 mx-4">
              ឧ. នៅក្នុងឆ្នាំ២០០៤កុសលបានចាប់កំណើត (ខុស) ។
            </h1>
          </li>
          <li>
            រាល់ការសរសេរ « » ក្នុងការបកប្រែ សូមធ្វើការដកឃ្លាខាងក្រោយសញ្ញានោះ​ ។
            <h1 className="mx-4">ឧ. « កុសលបានចាប់កំណើត​ » (ត្រឹមត្រូវ) ។</h1>
            <h1 className="text-red-500 mx-4">
              ឧ. «កុសលបានចាប់កំណើត​» (ខុស) ។
            </h1>
          </li>
          <li>
            សម្រាប់់ឯកសារ PDF
            អ្នកអាចធ្វើការទម្លាក់តែឯកសារជាភាសាអង់គ្លេសតែប៉ុណ្ណោះ ។
          </li>
          <li>
            អ្នកអាចយក Mouse ទៅដាក់ពីលើប៊ូតុងនោះ​ ដើម្បីដឹងពីមុខងាររបស់វា ។
          </li>
        </ol>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Guideline;
