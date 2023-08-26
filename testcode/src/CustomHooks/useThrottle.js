export const useThrottle = (func, limit) => {
  let flag = true; //flag ka access rhega when fun is returned so its closure
  return function () {
    let context = this;
    let args = arguments;

    if (flag) {
      func.apply(context, args);
      flag = false;
      console.log("throttle flag is ", flag);
      setTimeout(() => {
        flag = true;
        console.log("throttle read for next chla flag = ", flag);
      }, limit);
    }
  };
};
