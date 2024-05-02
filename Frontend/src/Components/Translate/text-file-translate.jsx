import React, { useRef, useEffect } from "react";
import axios from "axios";
import appStore from "../../store/app";
import pdfIcon from "../../assets/pdf-icon.png";
import textIcon from "../../assets/text-icon.png";
import wordIcon from "../../assets/word-icon.png";

const TranslateFileText = ({ onClosePopup }) => {
  const { setResultFileText } = appStore();
  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClosePopup();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, onClosePopup]);

  const handleSubmit = async (e) => {
    try {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        onClosePopup();
      }

      const formData = new FormData();
      formData.append("file", selectedFile);
      const response = await axios.post(
        "http://localhost:5000/updateTextFile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      const resultDataText = response?.data?.result;
      const dataInFileText = response?.data?.uploaded;
      setResultFileText({ resultDataText, dataInFileText });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div
      ref={popupRef}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-[100%] p-4 flex bg-cover bg-WhiteDark rounded-lg shadow-md">
        <div>
          <div className="bg-white h-[70vh] lg:h-[60vh] md:h-[60vh] lg:w-[60vw] md:w-[65vw] w-[80vw] border-dashed rounded-md border-BlueDark border-2 flex justify-center items-center">
            <form>
              <label htmlFor="fileInput" className=" crusor-pointer">
                <div>
                  <div className="flex justify-between lg:h-24 md:h-20 h-16">
                    <img src={pdfIcon} alt="pdf" />
                    <img src={wordIcon} alt="word" />
                    <img src={textIcon} alt="text" />
                  </div>
                  <div className="text-BlueDarrk font-bold my-3 lg:text-xl md:text-base text-base ">
                    <h1 className="flex justify-center ">
                      អ្នកអាចធ្វើការទម្លាក់ឯកសារ PDF, Word, Text
                    </h1>
                    <div className="flex items-center ">
                      <div className="flex-grow border-t border-b w-1/2"></div>
                      <h1 className="lg:text-xl md:text-base text-base  mx-4">
                        ឬ
                      </h1>
                      <div className="flex-grow border-t border-b w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <label className="p-3 px-7 rounded-md text-white lg:text-xl  text-base bg-BlueDark cursor-pointer  hover:bg-blue-300 hover:text-BlueDark hover:font-bold">
                      ជ្រើសរើសឯកសារ
                      <input
                        type="file"
                        id="fileInput"
                        accept=".pdf,.docx,.txt,.dxb, image/*"
                        className="hidden"
                        onChange={(e) => handleSubmit(e)}
                      />
                    </label>
                  </div>
                </div>
              </label>
              <input
                type="file"
                id="fileInput"
                accept=".pdf,.docx,.txt, image/*"
                className="hidden"
                onChange={(e) => handleSubmit(e)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateFileText;
