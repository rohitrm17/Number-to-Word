var single_digit = [
    "zero", "one",
    "two", "three",
    "four", "five",
    "six", "seven",
    "eight", "nine"
];

var two_digits = [
    "ten", "eleven", "twelve",
    "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
];

var tens_digit = [
    "", "", "twenty",
    "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty",
    "ninety"
];

var tens_power = ["hundred", "thousand", "lakh"];

function getAns(num) {

    let ans;

    if (num == 0) {
        ans = single_digit[0];
        return ans;
    }

    //-----------------------------
    var tempPart = getPart(num, 3);
    var part1 = tempPart[0];
    num = tempPart[1];
    var ans1 = "";

    if (part1 >= 100)
        ans1 = single_digit[Math.floor(part1 / 100)] + " " + tens_power[0];

    if (part1 % 100 > 0)
        ans1 += " " + getTens(part1 % 100);

    //-----------------------------
    var part2 = 0;
    var ans2 = "";

    // Thousands
    if (num) {
        tempPart = getPart(num, 2);
        part2 = tempPart[0];
        num = tempPart[1];
        if (part2 % 100 > 0)
            ans2 += " " + getTens(part2 % 100) + " " + tens_power[1];
    }

    //-----------------------------
    var part3 = 0;
    var ans3 = "";

    // Lakhs
    if (num) {
        tempPart = getPart(num, 2);
        part3 = tempPart[0];
        num = tempPart[1];
        if (part3 % 100 > 0)
            ans3 += " " + getTens(part3 % 100) + " " + tens_power[2];
    }
    //-----------------------------

    return ans3 + " " + ans2 + " " + ans1;
}

function Convert() {

    var inputNum = document.getElementById("numInt");
    var num = parseInt(inputNum.value);

    var errorArea = document.getElementById("error");
    errorArea.innerHTML = "";

    var outputAns = document.getElementById("numWord");
    outputAns.value = "";

    if (!num && num!=0) {
        errorArea.innerHTML = "Enter a number";
        return;
    }

    if (num < 0 || num > 9999999) {
        errorArea.innerHTML = "Number must be between 0 and 9999999";
        return;
    }

    var finalAns = getAns(num).trim();

    finalAns = finalAns.charAt(0).toUpperCase() + finalAns.slice(1);

    outputAns.value = finalAns;

    outputAns.setAttribute("style", "height:" + (outputAns.scrollHeight) + "px; overflow-y:hidden;");
}

function getPart(num, s) {
    var temp = 0, a = Math.pow(10, s);;

    temp = num % a;

    num = Math.floor(num / a);

    return [temp, num];
}

function getTens(no) {
    var ans = "";

    if (0 <= no && no <= 9) {
        ans += single_digit[no];
    }
    else if (10 <= no && no <= 20) {
        if (no == 10)
            ans += two_digits[0];
        else if (no == 20)
            ans += tens_digit[2];
        else
            ans += two_digits[no % 10];
    }
    else if (21 <= no && no <= 99) {
        ans += tens_digit[Math.floor(no / 10)];

        if (no % 10)
            ans = ans + " " + single_digit[no % 10];
    }

    return ans;
}