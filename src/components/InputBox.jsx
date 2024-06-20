import React from "react";

const InputBox = ({
  label,
  currencyOptions = [],
  loading,
  selectCurrency = "usd",
  amount,
  onAmountChange,
  onCurrencyChange,
  amountDisabled,
}) => {
  return (
    <div>
      <p className="mb-2">{label}</p>
      <div className="flex gap-5">
        <input
          className="outline-none w-full bg-transparent py-2 border-2 border-gray-600 rounded-md px-3"
          type="number"
          placeholder="0"
          value={amount.toFixed(2)}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
        <select
          className="rounded-md px-3 py-2 cursor-pointer outline-none border-2 border-gray-600 bg-transparent"
          name=""
          id=""
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {loading ? (
            <option>Loading...</option>
          ) : (
            currencyOptions.map((currency) => (
              <option className="text-gray-600" key={currency} value={currency}>
                {currency}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
