/* Mubashir is going on a secret mission. He needs your help but you have to learn how to encode a secret password to communicate safely with other agents. Create a function that takes an argument message and returns the encoded password.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

secretPassword("mubashirh") ➞ "hsajsi13u2"
Step 1: Message length should be of nine characters containing only lowercase letters from 'a' to 'z'. If the argument doesn't meet this requirement you must return "BANG! BANG! BANG!" (Remember, there are no second chances in the spy world!)

Step 2: Divide the string into three equal parts of three characters each:

1 - mub
2 - ash
3 - irh
Step 3: Convert the first and third letter to the corresponding number, according to the English alphabets (ex. a = 1, b = 2, c = 3 ... z = 26, etc).

mub = 13u2
Step 4: Reverse the fourth, fifth, and sixth letters:

ash = hsa
Step 5: Replace seventh, eighth, and ninth letter with next letter (z will be substituted with a).

irh = jsi
Step 6: Return the string in the following order: "Part_2+Part_3+Part_1"

"hsajsi13u2"
See the below examples for a better understanding:

Examples
secretPassword("mubashirh") ➞ "hsajsi13u2"

secretPassword("mattedabi") ➞ "detbcj13a20"

secretPassword("HeLen-eda") ➞ "BANG! BANG! BANG!"*/

function secretPassword(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (message.length === 9 && !/[A-Z]/.test(message)) {
    let firstPart = message.slice(0, 3);
    let secondPart = message.slice(3, 6);
    let thirdPart = message.slice(-3);
    const step3 =
      firstPart
        .slice(0, 1)
        .replace(
          firstPart.charAt(0),
          alphabet.indexOf(firstPart.charAt(0)) + 1
        ) +
      firstPart.slice(1, 2) +
      firstPart
        .slice(-1)
        .replace(
          firstPart.charAt(2),
          alphabet.indexOf(firstPart.charAt(2)) + 1
        );
    const step4 = Array.from(secondPart).reverse().join("");
    const actPosition = alphabet.indexOf(thirdPart.charAt(0));
    const actPosition2 = alphabet.indexOf(thirdPart.charAt(1));
    const actPosition3 = alphabet.indexOf(thirdPart.charAt(2));
    let step5 = "";
    if (thirdPart.charAt(2) !== "z") {
      step5 =
        thirdPart
          .slice(0, 1)
          .replace(thirdPart.charAt(0), alphabet.charAt(actPosition + 1)) +
        thirdPart
          .slice(1, 2)
          .replace(thirdPart.charAt(1), alphabet.charAt(actPosition2 + 1)) +
        thirdPart
          .slice(-1)
          .replace(thirdPart.charAt(2), alphabet.charAt(actPosition3 + 1));
    } else {
      step5 =
        thirdPart
          .slice(0, 1)
          .replace(thirdPart.charAt(0), alphabet.charAt(actPosition + 1)) +
        thirdPart
          .slice(1, 2)
          .replace(thirdPart.charAt(1), alphabet.charAt(actPosition2 + 1)) +
        thirdPart.slice(-1).replace(thirdPart.charAt(2), alphabet.charAt(0));
    }

    return step4 + step5 + step3;
  } else {
    return "BANG! BANG! BANG!";
  }
}

console.log(secretPassword("mattedabz"));
