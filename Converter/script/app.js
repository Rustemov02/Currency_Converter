let right = document.querySelectorAll('.right-s');
let left = document.querySelectorAll('.left-s');
let amount1 = document.querySelector('.linput');
let amount2 = document.querySelector('.rinput');
let p_left = document.querySelector('#p-left')
let p_right = document.querySelector('#p-right')
let deger
let sol;
let sag;



getStart()


left.forEach(event => {
    event.addEventListener('click', function () {
        sag = this.innerText
        getvalue()
    })
});

right.forEach(event => {
    event.addEventListener('click', function () {
        sol = this.innerText
        getvalue()
    })
});



const getvalue = async () => {
    let out;
    await fetch(`https://api.exchangerate.host/latest?base=${sag}&symbols=${sol}`)
        .then(response => response.json())
        .then((data) => {
            out = Object.values(data.rates)[0]
            // console.log(data)
        })

    function reValue() {
        amount2.addEventListener('keyup', () => {
            deger = amount2.value / out
            amount1.value = deger.toFixed(2)
        })
    }




    if ((sol == 'RUB') && (sag == 'RUB')) { 
        p_right.innerHTML = ""
        p_left.innerHTML = ""
        deger = amount1.value
        amount2.value = deger.toFixed(2)
    }
    if ((sol == 'RUB') && (sag == 'EUR')) {
        p_left.innerHTML = '1 RUB =' + 1/out + ' EUR'
        p_right.innerHTML = '1 EUR = ' + out + ' RUB'
        deger = amount1.value * out
        amount2.value = deger.toFixed(2) 
        reValue()
    }
    if ((sol == 'RUB') && (sag == 'USD')) {
        p_left.innerHTML = '1 RUB =' + 1/out + ' USD'
        p_right.innerHTML = '1 USD = ' + out + ' RUB'
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    if ((sol == 'RUB') && (sag == 'AZN')) { 
        p_left.innerHTML = '1 RUB =' + 1/out + ' AZN'
        p_right.innerHTML = '1 AZN = ' + out + ' RUB'      
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'USD') && (sag == 'USD')) { 
        p_right.innerHTML = ""
        p_left.innerHTML = ""
        deger = amount1.value
        amount2.value = deger.toFixed(2)
    }
    else if ((sol == 'USD') && (sag == 'EUR')) {
        p_left.innerHTML = '1 USD =' + 1/out + ' EUR' 
        p_right.innerHTML = '1 EUR = ' + out + ' USD' 
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'USD') && (sag == 'RUB')) {
        p_left.innerHTML = '1 USD =' + 1/out + ' RUB'
        p_right.innerHTML = '1 RUB = ' + out + ' USD' 
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'USD') && (sag == 'AZN')) {
        p_left.innerHTML = '1 USD =' + 1/out + ' AZN'
        p_right.innerHTML = '1 AZN = ' + out + ' USD'
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'EUR') && (sag == 'EUR')) { 
        p_right.innerHTML = ""
        p_left.innerHTML = ""
        deger = amount1.value
        amount2.value = deger.toFixed(2)
    }
    else if ((sol == 'EUR') && (sag == 'USD')) {
        p_left.innerHTML = '1 EUR =' + 1/out + ' USD'
        p_right.innerHTML = '1 USD = ' + out + ' EUR'
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'EUR') && (sag == 'RUB')) {
        p_left.innerHTML = '1 EUR =' + 1/out + ' RUB'
        p_right.innerHTML = '1 RUB = ' + out + ' EUR'
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'EUR') && (sag == 'AZN')) {
        p_left.innerHTML = '1 EUR =' + 1/out + ' AZN'
        p_right.innerHTML = '1 AZN = ' + out + ' EUR'
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'AZN') && (sag == 'AZN')) { 
        p_right.innerHTML = ""
        p_left.innerHTML = ""
        deger = amount1.value
        amount2.value = deger.toFixed(2)
    }
    else if ((sol == 'AZN') && (sag == 'EUR')) {
        p_left.innerHTML = '1 AZN =' + 1/out + ' EUR'
        p_right.innerHTML = '1 EUR = ' + out + ' AZN'
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'AZN') && (sag == 'RUB')) {
        p_left.innerHTML = '1 AZN =' + 1/out + ' RUB'
        p_right.innerHTML = '1 RUB = ' + out + ' AZN'
        deger = amount1.value * out;
        amount2.value = deger.toFixed(2)
        reValue()
    }
    else if ((sol == 'AZN') && (sag == 'USD')) {
        p_left.innerHTML = '1 AZN =' + 1/out + ' USD'
        p_right.innerHTML = '1 USD = ' + out + ' AZN'
        deger = amount1.value * out
        amount2.value = deger.toFixed(2)
        reValue()
    }
}


function getStart() {
    amount1.addEventListener('keyup', () => {
        getvalue()
    })
}

right.forEach((event) => {
    event.addEventListener('click', function () {
        right.forEach((event) => {
            event.classList.remove('active')
            this.classList.add('active')
        })
    })
})

left.forEach((event) => {
    event.addEventListener('click', function () {
        left.forEach((event) => {
            event.classList.remove('active')
            this.classList.add('active')
        })
    })
})