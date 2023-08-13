import React, { useEffect, useState } from "react";
import { Card, CardBody, Table } from "reactstrap";
import countryToCurrency from "country-to-currency";
import { useDispatch, useSelector } from "react-redux";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";

// // static import
import { getCurrencyExchangeData } from "../../store/sagaActions";
import Loader from "../../component/loader/Loader";
import NoData from "../../component/noData/NoData";
import "./style.scss";

function Currency() {
  // // initial state
  const dispatch = useDispatch();
  // // redux state
  const { weatherData } = useSelector((state) => state?.weather);
  const { isCurrencyExchangeLoading, currencyExchangeData } = useSelector(
    (state) => state?.currency
  );

  // // local state
  const currencyName = countryToCurrency[weatherData?.city?.country];
  const [apiCurrencyName, setApiCurrencyName] = useState();

  // // life cycle
  useEffect(() => {
    if (currencyExchangeData?.rates) {
      setApiCurrencyName(
        Object?.keys(currencyExchangeData?.rates)?.filter(
          (cur) =>
            cur === "USD" ||
            cur === "PKR" ||
            cur === "JPY" ||
            cur === "HKD" ||
            cur === "MYR" ||
            cur === "GBP" ||
            cur === "EUR" ||
            cur === "AED" ||
            cur === "AUD"
        )
      );
    }
  }, [currencyExchangeData?.rates]);

  useEffect(() => {
    if (currencyName) {
      dispatch(getCurrencyExchangeData({ currencyName }));
    }
  }, [currencyName]);

  return (
    <Card className="currency_exchange_hero bg_primary text_primary">
      <CardBody className="pt-0">
        {isCurrencyExchangeLoading ? (
          <Loader />
        ) : !weatherData ? (
          <NoData />
        ) : (
          <Table borderless className="mb-0">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Price</th>
                <th>Change%</th>
              </tr>
            </thead>
            <tbody>
              {apiCurrencyName?.map((item) => (
                <tr key={Math.random()}>
                  <td>{item}</td>
                  <td>{currencyExchangeData?.rates?.[item]?.end_rate}</td>
                  <td
                    className={`${
                      currencyExchangeData?.rates?.[item]?.change_pct < 0
                        ? "text_red"
                        : "text_green"
                    }`}
                  >
                    {currencyExchangeData?.rates?.[item]?.change_pct < 0 ? (
                      <BsGraphDownArrow />
                    ) : (
                      <BsGraphUpArrow />
                    )}{" "}
                    {currencyExchangeData?.rates?.[item]?.change_pct?.toFixed(
                      3
                    )}
                    %
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </CardBody>
    </Card>
  );
}

export default Currency;
