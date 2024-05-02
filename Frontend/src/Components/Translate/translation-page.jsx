import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import _debounce from "lodash/debounce";
import appStore from "../../store/app";
import IconButtonWithDropdown from "../dropdown/download-dropdown";
import SnackBar from "../dropdown/snack-bar";
import MathInBraille from "../SymbolMathemathic/math-in-braille";

const TranslationPage = () => {
  const {
    resultFileText,
    resultFileBraille,
    setResultTextDownload,
    setShowSnackbar,
    setMessage,
    setSwitchText,
    inputText,
    setInputText,
    inputBraille,
    setInputBraille,
    resultTextAndBraille,
    setResultTextAndBraille,
    switchLang,
    setSwitchLang,
  } = appStore();

  //fetch data from backend of text to braille
  const handleSubmitTextToBraille = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/text",
        {
          text: inputText,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const resultDataText = response?.data?.result;
      const resultUnicodeData = response?.data?.unicodeData;

      setResultTextAndBraille(resultDataText);
      setResultUnicode(resultUnicodeData);
      setResultTextDownload(resultTextAndBraille);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // fetch data from backend of braille to text
  const handleSubmitBrailleToText = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/braille",
        {
          braille: inputBraille,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const resultDataBraille = response?.data?.result;
      setResultTextAndBraille(resultDataBraille);
      setResultTextDownload(resultTextAndBraille);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // function writing to output the result the same time
  const debouncedTranslateText = _debounce(handleSubmitTextToBraille, 0);
  const debouncedTranslateBraille = _debounce(handleSubmitBrailleToText, 0);

  // for switch from text to braille and braille to text
  useEffect(() => {
    if (!switchLang) {
      debouncedTranslateText();
    }
    if (switchLang) {
      debouncedTranslateBraille();
    }
  }, [inputText, inputBraille]);

  // switch the file text to file braille and verse visa
  useEffect(() => {
    if (
      resultFileText &&
      resultFileText.dataInFileText &&
      resultFileText.resultDataText
    ) {
      setInputText(resultFileText.dataInFileText);
      setResultTextAndBraille(resultFileText.resultDataText);
    }
    if (
      resultFileBraille &&
      resultFileBraille.dataInFileBraille &&
      resultFileBraille.resultDataBraille
    ) {
      setInputBraille(resultFileBraille.dataInFileBraille);
      setResultTextAndBraille(resultFileBraille.resultDataBraille);
    } else {
      console.log("Object is null or undefined, or dataInFile is not present");
    }
  }, [resultFileText, resultFileBraille]);
  console.log("dataInFile: ", inputText);

  // for show snackbar alert
  const handleShowSnackbar = (SnackBarMessage) => {
    setMessage(SnackBarMessage);
    setShowSnackbar(true);
  };

  // for switch from text to braille and verse visa for showing the result
  const handleSwitchLang = () => {
    if (inputText && resultTextAndBraille) {
      if (switchLang) {
        setInputText(resultTextAndBraille);
      }
    }
    if (inputBraille && resultTextAndBraille) {
      if (!switchLang) {
        {
          setInputBraille(resultTextAndBraille);
          setInputText(inputBraille);
        }
      }
    }
  };

  return (
    <div>
      <div className="my-4 px-4 py-2 relative lg:py-4 md:py-4  max-w-[90vw] mx-auto items-center border-BlueDark border rounded-lg h-[100%] bg-white flex justify-between   ">
        <div className="absolute ">
          <h1 className="font-bold text-big lg:text-base md:text-base ">
            {switchLang ? "ភាសាប្រៃយ៍" : "ភាសាខ្មែរ-អង់គ្លេស"}
          </h1>
        </div>
        <div className="mx-[50%]">
          <button title="ចុចដើម្បីផ្លាស់ប្តូរការបកប្រែ" className="">
            <Icon
              icon="fluent:arrow-swap-20-filled"
              className="text-4xl button-beat cursor-pointer hover:bg-gray-100 p-2 rounded-full"
              style={{ fontWeight: "bold" }}
              onClick={() => {
                setSwitchLang(!switchLang),
                  setSwitchText(true),
                  handleSwitchLang();
              }}
              color={inputBraille || inputText ? "#15274b" : "gray"}
            />
          </button>
        </div>
        <div className=" right-4 absolute">
          <h1 className="font-bold text-big lg:text-base md:text-base">
            {switchLang ? "ភាសាខ្មែរ" : "ភាសាប្រៃយ៍"}
          </h1>
        </div>
      </div>

      <div className="grid grid-1 lg:flex md:flex  gap-2 -mt-2   justify-center">
        <div className=" relative">
          <div className=" flex flex-cols-2 flex-1 ">
            <textarea
              placeholder={
                switchLang ? "សូមបញ្ចូលអក្សរប្រៃយ៍..." : "សូមបញ្ចូលភាសាខ្មែរ..."
              }
              value={switchLang ? inputBraille : inputText}
              onChange={(e) => {
                setInputText(e.target.value), setInputBraille(e.target.value);
                if (!switchLang) {
                  debouncedTranslateText();
                }
                if (switchLang) {
                  debouncedTranslateBraille();
                }
              }}
              className="lg:w-[45vw] md:w-[45vw] w-[90vw] mx-auto flex rounded-lg lg:h-80 md:h-72 h-48 pl-4 pr-12 pb-11 py-2 text-base lg:text-xl md:text-xl border-BlueDark border resize-none focus:outline-none focus:border-BlueDark transition duration-200"
            />
            <div className="absolute top-2 right-2">
              {inputText ? (
                <button
                  title="លុបទាំងអស់"
                  onClick={(e) => {
                    setInputText("");
                    setInputBraille("");
                    setResultTextAndBraille("");
                  }}
                  className="button-beat p-1 rounded-full hover:bg-gray-100  mr-2 after:text-red-500"
                >
                  <span>
                    <Icon icon="material-symbols:close" className="text-xl" />
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-cols-2  flex-1 ">
            <textarea
              placeholder={
                switchLang
                  ? "ភាសាខ្មែរដែលបកប្រែហើយ..."
                  : "ភាសាប្រៃយ៍ដែលបកប្រែហើយ..."
              }
              value={resultTextAndBraille}
              readOnly
              className="lg:w-[44vw] md:w-[45vw] w-[90vw] mx-auto rounded-lg flex lg:h-80 md:h-72 h-48 pl-4 pr-14 pb-11 py-2 text-base lg:text-xl md:text-xl border-BlueDark border resize-none focus:outline-none focus:border-BlueDark transition duration-200"
            />
          </div>
          <div className="absolute top-2 right-5 ">
            <div>
              {resultTextAndBraille ? (
                <button
                  title="ចម្លងការបកប្រែ"
                  onClick={(e) => {
                    navigator.clipboard.writeText(resultTextAndBraille),
                      handleShowSnackbar("ចម្លងបានជោគជ័យ");
                  }}
                  className="button-beat p-2 rounded-full hover:bg-gray-100 font-KohSantepheap"
                >
                  <span>
                    <Icon
                      icon="material-symbols:copy-all-outline"
                      className="text-xl font-bold "
                    />
                  </span>
                </button>
              ) : null}
              <SnackBar />
            </div>
            <div>
              {resultTextAndBraille ? <IconButtonWithDropdown /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <MathInBraille />
      </div>
    </div>
  );
};

export default TranslationPage;
