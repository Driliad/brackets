const check = (str, bracketsConfig) => {
   if (str.length % 2 === 0) {
      let length = str.length - 1;
      while (length >= 0) {
         bracketsConfig.forEach(element => {
            if (str[length] === element[0]) {
               str = str.replace(element[0] + element[1], "");
            }
         });

         length--;
      }

      return str.length === 0;
   }

   return false;
};

module.exports = check;

