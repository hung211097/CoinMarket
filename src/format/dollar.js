const Dollar = (obj) =>{
  if(obj)
  {
    let str = obj + "";

    if(str.indexOf('.') >= 0)
     {
        let flag = 0;
        for(let i = str.indexOf('.') - 1; i >= 0; i--)
          {
            flag++;
            if(flag === 3)
              {
                if(i > 0)
                  {
                   str = str.substr(0, i) + ',' + str.substr(i);
                    flag = 0;
                  }
              }
          }
          str = "$" + str;
      }
    else
      {
        let flag = 0;
        for(let i = str.length - 1; i >= 0; i--)
          {
            flag++;
            if(flag === 3)
              {
                if(i > 0)
                  {
                   str = str.substr(0, i) + ',' + str.substr(i);
                    flag = 0;
                  }

              }
          }
          str = "$" + str;
      }
      return str;
  }
  return "$?";
}

export default Dollar;
