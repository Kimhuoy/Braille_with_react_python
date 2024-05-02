import React from "react";
import appStore from "../../store/app";
import { Icon } from "@iconify/react";
import textIcon from "../../assets/text-icon.png";
import wordIcon from "../../assets/word-icon.png";
import SnackBar from "./snack-bar";

const IconButtonWithDropdown = () => {
  const { resultTextAndBraille, setShowSnackbar, setMessage, dropdownOpen,setDropdownOpen } = appStore();

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDownLoadTextFile = () => {
    const blob = new Blob([resultTextAndBraille], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const element = document.createElement("a");

    element.href = url;
    element.download = "ឯកសារដែលបានបកប្រែ.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadWordFile = () => {
    const blob = new Blob([resultTextAndBraille], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const element = document.createElement("a");

    element.href = url;
    element.download = "ឯកសារដែលបានបកប្រែ.doc";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(url);
  };

  const handleDownloadFile = (handler) => {
    try {
      handler();
    } catch (error) {
      console.error("Error during download:", error);
    }
  };

  const handleShowSnackbar = () => {
    setMessage("ដំឡើងឯកសារបានជោគជ័យ");
    setShowSnackbar(true);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        title="ចម្លងការបកប្រែ"
        type="button"
        onClick={handleToggleDropdown}
        className="inline-flex justify-center button-beat items-center text-gray-800 focus:outline-none focus:ring-2 focus:border-gray-50 focus:rounded-full"
      >
        {/* Your icon goes here */}
        <span className="p-1 rounded-full hover:bg-gray-100 text-BlueDark">
          <Icon icon="material-symbols:download" className="text-2xl" />
        </span>
      </button>

      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 text-xl w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => {
                handleDownloadFile(handleDownLoadTextFile),
                  handleShowSnackbar();
              }}
              className="block px-4 py-2 text-base w-full text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
              role="menuitem"
            >
              <div className="flex pb-2 border-b ml-2 gap-2">
                <img src={textIcon} alt="pdf" className="h-6" />
                Download as Text File
              </div>
            </button>
            <SnackBar />

            <button
              onClick={() => {
                handleDownloadFile(handleDownloadWordFile),
                  handleShowSnackbar();
              }}
              className="block px-4 py-2 text-base w-full text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
              role="menuitem"
            >
              <div className="flex pb-2  ml-2 gap-2">
                <img src={wordIcon} alt="pdf" className="h-6" />
                Download as Word File
              </div>
            </button>
            <SnackBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default IconButtonWithDropdown;
