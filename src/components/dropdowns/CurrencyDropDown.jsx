import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../features/currencyDropDownSlice";

const Container = styled.div`
  height: 10vh;
  min-width: 50px;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  overflow: scroll;
  font-weight: 700;
  background-color: #e6ecff;
  margin: 1%;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;

const Option = styled.option`
  text-transform: uppercase;
  font-weight: 400;
`;

const CurrencyDropDown = () => {
  //Get selected currency from store
  const currency = useSelector((state) => state.selectCurrency.selectedCurrency);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  // Hardcoded list of currencies
  const currencyList = [
    'USD', 'EUR', 'inr', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'
  ];

  return (
    <Container>
      <Select onChange={handleChange} value={currency}>
        <Option value="currency" disabled>
          Currency
        </Option>
        {currencyList.map((currencyName) => (
          <Option value={currencyName} key={currencyName}>
            {currencyName.toUpperCase()}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export { CurrencyDropDown };


















/* import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../features/currencyDropDownSlice";
import { useSelector } from "react-redux";
import { useGetAllCurrenciesQuery } from "../../features/api/currencyApiSlice";

const Container = styled.div`
  height: 10vh;
  min-width: 50px;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  overflow: scroll;
  font-weight: 700;
  background-color: #e6ecff;
  margin: 1%;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;

const Option = styled.option`
  text-transform: uppercase;
  font-weight: 400;
`;

const CurrencyDropDown = () => {
  //Get selected currency from store
  const currency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  //Fetch currency list data
  const { data: currencyList } = useGetAllCurrenciesQuery();

  return (
    <Container>
      <Select onChange={handleChange} value={currency}>
        <Option value="currency" disabled>
          Currency
        </Option>
        {currencyList &&
          currencyList.map((currencyName) => (
            <Option value={currencyName} key={currencyName}>
              {currencyName.toUpperCase()}
            </Option>
          ))}
      </Select>
    </Container>
  );
};

  export { CurrencyDropDown};
 */