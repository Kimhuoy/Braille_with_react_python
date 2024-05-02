import React from "react";
import {
  ArrGeneralSymbol,
  arrGeneralSymbolTitles,
} from "../../store/data-math-symbol";
import RenderButton from "./render-button-math";
import appStore from "../../store/app";

const GeneralSymbol = () => {
  const { setInputText, inputText } = appStore();

  return (
    <div className="border-1 border-black border w-[90vw] mx-auto my-2 rounded-lg">
      <div className="flex flex-wrap p-4 gap-2">
        {ArrGeneralSymbol.map((symbol, index) => (
          <RenderButton
            key={index}
            onClick={() => {
              setInputText(`${inputText}${symbol}`);
            }}
            icon={
              <div className="flex justify-center">
                <h1 className="w-[50px] text-xl" title={arrGeneralSymbolTitles[index]}>
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

export default GeneralSymbol;
