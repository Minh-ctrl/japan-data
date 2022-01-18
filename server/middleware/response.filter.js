const jsonMiddleware = (request, response, next) => {
  try {
    const oldJSON = response.json;

    response.json = (data) => {
      console.log("start function");
      // For Async call, handle the promise and then set the data to `oldJson`
      if (data && data.then != undefined) {
        console.log("is defined");
        // Resetting json to original to avoid cyclic call.
        return data
          .then((responseData) => {
            // Custom logic/code. -----> Write your logic to add success wrapper around the response
            response.json = oldJSON;
            return oldJSON.call(response, responseData);
          })
          .catch((error) => {
            next(error);
          });
      } else {
        console.log("else");
        // For non-async interceptor functions
        // Resetting json to original to avoid cyclic call.
        // Custom logic/code.
        response.json = oldJSON;
        return oldJSON.call(response);
      }
    };
    // response.json();
    next();
  } catch (error) {
    console.log("error");
    next(error);
  }
};
module.exports = jsonMiddleware;
