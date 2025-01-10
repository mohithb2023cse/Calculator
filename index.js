let op = "";
let first = "";
let second = "";

function append(number) {
    if (op === "") {
        first += number;
        document.getElementById('result').value = first;
    } else {
        second += number;
        document.getElementById('result').value = second;
    }
}

function setOp(o) {
    if (first !== "") {
        op = o;
    }
}

function showResult() {
    if (first !== "" && second !== "" && op !== "") {
        let res = 0;
        switch (op) {
            case '+':
                res = parseFloat(first) + parseFloat(second);
                break;
            case '-':
                res = parseFloat(first) - parseFloat(second);
                break;
            case '*':
                res = parseFloat(first) * parseFloat(second);
                break;
            case '/':
                res = parseFloat(first) / parseFloat(second);
                break;
        }
        document.getElementById('result').value = res;
        // Reset for further operations
        first = res.toString();
        second = "";
        op = "";
    }
}

function reset() {
    first = "";
    second = "";
    op = "";
    document.getElementById('result').value = "";
}

function changeBackgroundColor() {
    const colors = ['red', 'black', 'pink', 'yellow', 'green', 'violet', 'whitesmoke'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
}