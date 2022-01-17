let inp = document.querySelector('.text1')
let btn = document.querySelector('.btn')
    btn.setAttribute('disabled', true);
    inp.oninput = function () {
        console.log(inp.value);
        if (inp.value.length < 1 || !inp.value.trim()) {
            btn.setAttribute('disabled', true);
        } else {
            btn.removeAttribute('disabled');
        }
    }

