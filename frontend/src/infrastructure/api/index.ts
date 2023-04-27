/* eslint-disable @typescript-eslint/no-explicit-any */
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Connection: "keep-alive",
};

const processResponse = (result: any) => {
  return result
    .then((res: any) => res.json())
    .then(async (res: any) => {
      let _res = res;
      if (!res?.data) _res = { error: res?.error, data: res?.data };
      else if (res?.data?.error) _res = { error: res.data.error };
      return _res;
    })
    .catch((error: any) => {
      return { error };
    });
};

const processRequest = async (
  request: any,
  method: string,
  params: any,
  optionalsHeaders: any
) => {
  const response = fetch(request, {
    method,
    headers: optionalsHeaders ? { ...headers, ...optionalsHeaders } : headers,
    ...(params ? { body: JSON.stringify(params) } : {}),
  });
  const result = await processResponse(response);
  return result;
}

const api = (urlBase: string) => ({
  async get(endpoint: string, params = null, optionalsHeaders = null) {
    const result = await processRequest(
      `${urlBase}${endpoint}`,
      "GET",
      params,
      optionalsHeaders
    );
    return result;
  },
  async post(endpoint: string, params = null, optionalsHeaders = null) {
    const result = await processRequest(
      `${urlBase}${endpoint}`,
      "POST",
      params,
      optionalsHeaders
    );
    return result;
  },
  async put(endpoint: string, params = null, optionalsHeaders = null) {
    const result = await processRequest(
      `${urlBase}${endpoint}`,
      "PUT",
      params,
      optionalsHeaders
    );
    return result;
  },
  async delete(endpoint: string, params = null, optionalsHeaders = null) {
    const result = await processRequest(
      `${urlBase}${endpoint}`,
      "DELETE",
      params,
      optionalsHeaders
    );
    return result;
  },
});

export default api;
