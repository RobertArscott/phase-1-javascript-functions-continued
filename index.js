function saturdayFun(thing = "roller-skate") {
    return `This Saturday, I want to ${thing}!`;
}

const mondayWork = function (thing = "go to the office") {
    return `This Monday, I will ${thing}.`;
}

function wrapAdjective(wrap = "*") {
    return function adjWord(word = "special") {
        return `You are ${wrap}${word}${wrap}!`;
    }
}