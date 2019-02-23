const config1 = [["(", ")"]];
const config2 = [["(", ")"], ["[", "]"]];
const config3 = [["(", ")"], ["[", "]"], ["{", "}"]];
const config4 = [["|", "|"]];
const config5 = [["(", ")"], ["|", "|"]];
const config6 = [["1", "2"], ["3", "4"], ["5", "6"], ["7", "7"], ["8", "8"]];
const config7 = [["(", ")"], ["[", "]"], ["{", "}"], ["|", "|"]];

class Stack {
   constructor() {
      this.stack = [];
   }

   length() {
      return this.stack.length;
   }
   push(data) {
      this.stack.push(data);
   }

   pop() {
      if (this.length() === 0) {
         return;
      }
      this.stack.pop();
   }

   isEmpty() {
      return this.length() === 0;
   }

   getLastItem() {
      return this.stack[this.length() - 1];
   }
}

const getOpeningBrackets = bracketsConfig => {
   const result = [];

   bracketsConfig.forEach(element => {
      result.push(element[0]);
   });

   return result;
};

const getClosingBrackets = bracketsConfig => {
   const result = [];

   bracketsConfig.forEach(element => {
      result.push(element[1]);
   });

   return result;
};

const isBracket = (str, brackets) => {
   return brackets.join("").indexOf(str) !== -1;
};

const matches = (topStack, brackets, closBracket) => {
   for (var k = 0; k < brackets.length; k++) {
      if (brackets[k][0] === topStack && brackets[k][1] === closBracket) {
         return true;
      }
   }

   return false;
};

function check(str, bracketsConfig) {
   if (str.length % 2 === 0) {
      const stack = new Stack();

      const openingBrackets = getOpeningBrackets(bracketsConfig);
      const closingBrackets = getClosingBrackets(bracketsConfig);

      const string = str.split("");

      for (let index = 0; index < string.length; index++) {
         const isOpeningBracket = isBracket(string[index], openingBrackets);
         const isClosingBracket = isBracket(string[index], closingBrackets);
         if (isOpeningBracket === isClosingBracket) {
            stack.pop();
            continue;
         }

         if (isOpeningBracket) {
            stack.push(string[index]);
            continue;
         }

         if (
            isClosingBracket &&
            matches(stack.getLastItem(), bracketsConfig, string[index])
         ) {
            stack.pop();
            continue;
         }
      }

      return stack.isEmpty();
   }

   return false;
}

module.exports = check;
