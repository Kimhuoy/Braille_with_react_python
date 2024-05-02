import React from "react";
import { ArrCelculateSymbol,arrCelculateSymbolTitle } from "../../store/data-math-symbol";
import RenderButton from "./render-button-math";
import appStore from "../../store/app";

const CelculateSymbol = () => {
  const { setInputText, inputText } = appStore();

  return (
    <div className="border-1 border-black border w-[90vw] mx-auto my-2 rounded-lg">
      <div className="flex flex-wrap p-4 gap-2">
        {ArrCelculateSymbol.map((symbol, index) => (
          <RenderButton
            key={index}
            onClick={() => {
              setInputText(`${inputText}${symbol}`);
            }}
            icon={
              <div className={`flex justify-center `}>
                <h1
                  className={` w-[50px] text-xl ${
                    index === 8 || index === 9 || index === 10 || index === 11 || index === 12
                      ? "w-[70px]"
                      : ""
                  }`}
                  title={arrCelculateSymbolTitle[index]}
                >
                  {symbol}
                </h1>
              </div>
            }
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CelculateSymbol;
