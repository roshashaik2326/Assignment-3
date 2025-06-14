function add()
{
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    sum = num1 + num2
    document.getElementById('res').innerHTML = `<p style="color: red; font-size: 20px;">${sum}</p>`;
}

function sub()
{
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('res').innerHTML = num1-num2;
}

function mult()
{
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('res').innerHTML = num1 * num2;
}

function div()
{
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('res').innerHTML = num1 / num2;
}