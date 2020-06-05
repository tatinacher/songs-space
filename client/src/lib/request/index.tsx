export type RequestProps = {
  method: string;
  url: string;
  params?: object;
};

export const request = async ({
  url,
  method,
  params = {}
}: RequestProps): Promise<any> => {
  console.log(url);

  const request = process.env.REACT_APP_HOST + "/api" + url;
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json"
  };
  const options =
    method === "get"
      ? { headers, method }
      : {
          headers,
          method,
          body: JSON.stringify(params)
        };
  console.log(params);

  try {
    const response = await fetch(request, options);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result);
    }
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};
