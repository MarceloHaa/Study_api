import React from "react";
import { YAxis } from "recharts";

const formatNumber = (number) => {
  return new Intl.NumberFormat("pt-BR").format(number);
};

const CustomYAxis = (props) => (
  <YAxis {...props} tickFormatter={(value) => formatNumber(value)} />
);

export default CustomYAxis;
