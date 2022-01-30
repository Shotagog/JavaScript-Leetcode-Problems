//////////////////////////////////////////////Valid Parentheses///////////////////////////////////////////////////////
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
// Example 3:
//
// Input: s = "(]"
// Output: false
// Example 4:
//
// Input: s = "([)]"
// Output: false
// Example 5:
//
// Input: s = "{[]}"
// Output: true
const isValid = function(s) {
    const dict = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    let flag = true;
    let arr = [];

    for(let a = 0; a < s.length; a++){
        const close = dict[s[a]];

        if(close){
            arr.push(close);
            continue;
        }

        if(s[a] === arr.pop()){
            continue;
        }

        flag = false;
        break;
    }

    return flag && !arr.length;
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
// console.log(isValid("{[]}"));
