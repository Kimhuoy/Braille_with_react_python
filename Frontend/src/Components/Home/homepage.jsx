import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { Outlet } from "react-router-dom";
import TranslationPage from "../Translate/translation-page";
import TranslateFileText from "../Translate/text-file-translate";
import TranslateFileBraille from "../Translate/braille-file-translate";
import appStore from "../../store/app";

const HomePage = () => {
  const { switchText, isPopupOpen, setIsPopupOpen } = appStore();

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const renderButton = (index, icon, title, description) => (
    <button
      key={index}
      onClick={() => onClick(index)}
      className={`items-center font-bold ml-2 text-BlueDark  bg-white  hover:bg-blue-50 `}
    >
      <div className="shadow-md px-4 py-2  flex lg:w-[230px] md:w-[230px] w-[160px] rounded-lg border  hover:bg-blue-50">
        <div className="items-center flex  gap-2 lg:gap-3 md:gap-3 justify-between">
          <span className={`font-bold`}>{icon}</span>
          <div>
            <h1 className="text-sm lg:text-base md:text-base">{title}</h1>
            <p className="items-center text-pi lg:text-sm md:text-sm text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </div>
    </button>
  );

  //for scroll into MathInBraille page
  const mathInBrailleRef = useRef(null);
  const handleScrollToMathInBraille = () => {
    if (mathInBrailleRef.current) {
      mathInBrailleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className=" flex items-center mt-20 lg:mt-24 md:mt-24 lg:mx-16 md:mx-16 mx-2  ">
        <div className="flex flex-col  gap-4 lg:gap-0 md:gap-0 lg:flex-row md:flex-row   items-center justify-between w-[100vw]">
          <h1 className="font-bold font-KohSantepheap text-BlueDark text-center sm:text-base md:text-xl lg:text-3xl">
            បកប្រែភាសាខ្មែរទៅកាន់ប្រៃយ៍
          </h1>
          <div className="flex flex-row gap-2  ">
            <div
              className="font-KohSantepheap feature "
              onClick={handleOpenPopup}
            >
              {renderButton(
                0,
                <Icon icon="icons8:document" className="text-3xl -ml-2" />,
                "បកប្រែឯកសារខ្មែរទៅប្រៃយ៍",
                ".pdf, .docx, .txt"
              )}
            </div>

            {/* Menu Overlay*/}
            {isPopupOpen ? (
              <div className="bg-black/30 fixed w-full h-screen z-10 top-0 left-0 "></div>
            ) : (
              ""
            )}

            <div className="font-KohSantepheap z-10 ">
              {isPopupOpen && (
                <div>
                  {switchText ? (
                    <TranslateFileBraille onClosePopup={handleClosePopup} />
                  ) : (
                    <TranslateFileText onClosePopup={handleClosePopup} />
                  )}
                </div>
              )}
            </div>

            <div
              className="font-KohSantepheap feature"
              onClick={handleScrollToMathInBraille}
            >
              {renderButton(
                1,
                <Icon icon="tabler:math" className="text-3xl -mr-2" />,
                "សញ្ញាគណិតវិទ្យាក្នុងប្រៃយ៍",
                "សញ្ញាជាប្រៃយ៍សម្រាប់គណនា"
              )}
              <div ref={mathInBrailleRef}></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TranslationPage />
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
