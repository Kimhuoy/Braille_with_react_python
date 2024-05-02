import React from "react";
import { Icon } from "@iconify/react";
import GeneralSymbol from "./general-symbol";
import CelculateSymbol from "./celculate-symbol";
import GreekLetter from "./greek-letter";
import BasicSymbolMath from "./basic-symbol-math";
import appStore from "../../store/app";
import PhysicSymbol from "./physical-symbol-math";
import ArrowSymbol from "./arrow-symbol-math";

const MathInBraille = () => {
  const {
    selectedOption,
    setSelectedOption,
    dropdownOpenMath,
    setDropdownOpenMath,
  } = appStore();

  const handleToggleDropdown = () => {
    setDropdownOpenMath(!dropdownOpenMath);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setDropdownOpenMath(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        type="button"
        value={selectedOption}
        onClick={handleToggleDropdown}
        className="mt-4 inline-flex justify-center p-3 bg-white rounded-md shadow-md border items-center hover:bg-blue-50 relative"
      >
        {/* Your icon goes here */}
        <span className="flex justify-between font-bold gap-3  text-BlueDark">
          <h1>{selectedOption}</h1>
          {dropdownOpenMath ? (
            <Icon icon="mdi:menu-up" className="text-2xl" />
          ) : (
            <Icon icon="gridicons:dropdown" className="text-2xl" />
          )}
        </span>
      </button>

      {dropdownOpenMath && (
        <div className="origin-bottom-right z-10 absolute text-xl w-48 rounded-md bg-white  ">
          {" "}
          {/* Updated position classes */}
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() =>
                handleSelectChange({
                  target: { value: "សញ្ញាកាត់ក្នុងគណិតវិទ្យា" },
                })
              }
              className="block button-beat px-4 py-2 text-base w-full text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
              role="menuitem"
            >
              សញ្ញាកាត់ក្នុងគណិតវិទ្យា
            </button>

            <button
              onClick={() =>
                handleSelectChange({ target: { value: "សញ្ញាសម្រាប់គណនា" } })
              }
              className="block button-beat px-4 py-2 text-base w-full text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
              role="menuitem"
            >
              សញ្ញាសម្រាប់គណនា
            </button>

            <button
              onClick={() =>
                handleSelectChange({ target: { value: "សញ្ញាជាអក្សរក្រិច" } })
              }
              className="block button-beat px-4 py-2 text-base w-full text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
              role="menuitem"
            >
              សញ្ញាជាអក្សរក្រិច
            </button>

            <button
              onClick={() =>
                handleSelectChange({ target: { value: "សញ្ញាគណិតវិទ្យាទូទៅ" } })
              }
              className="block button-beat px-4 py-2 text-base w-full text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
              role="menuitem"
            >
              សញ្ញាគណិតវិទ្យាទូទៅ
            </button>

            <button
              onClick={() =>
                handleSelectChange({ target: { value: "សញ្ញាក្នុងរូបវិទ្យា" } })
              }
              className="block button-beat px-4 py-2 text-base w-full text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
              role="menuitem"
            >
              សញ្ញាក្នុងរូបវិទ្យា
            </button>

            <button
              onClick={() =>
                handleSelectChange({
                  target: { value: "សញ្ញាជាព្រួញក្នុងគណិតវិទ្យា" },
                })
              }
              className="block button-beat px-4 py-2 text-base w-full text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
              role="menuitem"
            >
              សញ្ញាជាព្រួញក្នុងគណិតវិទ្យា
            </button>
          </div>
        </div>
      )}

      {/* Render the selected component based on the chosen option */}
      {selectedOption === "សញ្ញាកាត់ក្នុងគណិតវិទ្យា" && <GeneralSymbol />}
      {selectedOption === "សញ្ញាសម្រាប់គណនា" && <CelculateSymbol />}
      {selectedOption === "សញ្ញាជាអក្សរក្រិច" && <GreekLetter />}
      {selectedOption === "សញ្ញាគណិតវិទ្យាទូទៅ" && <BasicSymbolMath />}
      {selectedOption === "សញ្ញាក្នុងរូបវិទ្យា" && <PhysicSymbol />}
      {selectedOption === "សញ្ញាជាព្រួញក្នុងគណិតវិទ្យា" && <ArrowSymbol />}
    </div>
  );
};

export default MathInBraille;
