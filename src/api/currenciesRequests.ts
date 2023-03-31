import { request } from "./createRequest";

export const getCurrencies = async () => {
  const currencies = await request({
    url: "",
    method: "GET",
  });
  return currencies;
};

export const getOneCurrency = async (id: string) => {
  const currency = await request({
    url: `/${id}`,
    method: "GET",
  });
  return currency;
};

export const getCurrencysHistory = async (id: string) => {
  const history = await request({
    url: `/${id}/history?interval=d1`,
    method: "GET",
  });
  return history;
};
