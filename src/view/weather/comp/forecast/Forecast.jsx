import React from "react";
import { Card, CardBody, Table } from "reactstrap";
import moment from "moment";
import {
  BsCloudSun,
  BsCloudHaze2,
  BsCloudRain,
  BsClouds,
} from "react-icons/bs";
import Loader from "../../../../component/loader/Loader";
import NoData from "../../../../component/noData/NoData";
import "./style.scss";

function Forecast({ data, isLoading }) {
  return (
    <Card className="forecast_hero bg_primary">
      <CardBody>
        {isLoading ? (
          <Loader />
        ) : !data?.length ? (
          <NoData />
        ) : (
          <Table striped hover>
            <tbody>
              {data?.slice(3, Infinity)?.map((item) => (
                <tr key={Math.random()}>
                  <td>{moment(item?.dt_txt).format("DD/MM/YYYY, hh:mmA")}</td>
                  <td>{item.main.temp || 0}&deg;C</td>
                  <td>
                    {item.weather?.[0]?.main === "Clear" ? (
                      <BsCloudSun className="fs-5" />
                    ) : item.weather?.[0]?.main === "Clouds" ? (
                      <BsClouds className="fs-5" />
                    ) : item.weather?.[0]?.main === "Haze" ? (
                      <BsCloudHaze2 className="fs-5" />
                    ) : item.weather?.[0]?.main === "Rain" ? (
                      <BsCloudRain className="fs-5" />
                    ) : (
                      <BsClouds className="fs-5" />
                    )}
                    &nbsp;
                    {item.weather?.[0]?.main || "---"}
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

export default Forecast;
