import React from "react";
import { ArrArrowSymbol } from "../../store/data-math-symbol";
import RenderButton from "./render-button-math";
import appStore from "../../store/app";

const ArrowSymbol = () => {
  const { setInputText, inputText } = appStore();

  return (
    <div className="border-1 border-black border w-[90vw] mx-auto my-2 rounded-lg">
      <div className="flex flex-wrap p-4 gap-2">
        {ArrArrowSymbol.map((symbol, index) => (
          <RenderButton
            key={index}
            onClick={() => {
              setInputText(`${inputText}${symbol}`);
            }}
            icon={
              <div className="flex justify-center">
                <h1 className="w-[50px] lg:w-0 text-xl flex justify-center  ">
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

export default ArrowSymbol;
