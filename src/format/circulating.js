const Circulating = (obj, sym) => {
  if(obj)
  {
    let str = obj + "";

    let flag = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      flag++;
      if (flag === 3) {
        if (i > 0) {
          str = str.substr(0, i) + ',' + str.substr(i);
          flag = 0;
        }

      }
    }
    str += " " + sym;
    return str;
  }

  return "? " + sym;
}

export default Circulating;
