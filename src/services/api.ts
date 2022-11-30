import api from ".";


function getSuspender<T>(promise:Promise<T>){
  let status = "pending";
  let response:T;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};


function fetchData<T>(url:string) {
  const promise = api.get<T>(url).then((res) => res.data)
  return getSuspender(promise);
}

export default fetchData;
