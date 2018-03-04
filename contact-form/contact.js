(function () {
    var btn = document.querySelector('.submit');
    btn.addEventListener('click', validate);
    function validate() {

        var a = document.querySelector('[placeholder="First Name"]');
        var b = document.querySelector('[placeholder="Last Name"]');
        var c = document.querySelector('[value="m"]');
        var d = document.querySelector('[value="f"]');
        var e = document.querySelector('[name="Message"]');

        var z = /^[A-Za-z]+$/;

        if (a.value !== '' && a.value.match(z)) {
            a.style.border = '0.5px solid #666';
            
        } else {
            a.style.border = 'thick solid #f00';
            return false;
        };
        if (b.value !== '' && b.value.match(z)) {
            b.style.border = '0.5px solid #666';
            
        } else {
            b.style.border = 'thick solid #f00';
            return false;
        };
        if (c.checked === false && d.checked == false ) {
            document.querySelector('#radio').style.border = 'thick solid #f00';
            return false;
        };

        if (e.value === '') {
            e.style.border = 'thick solid #f00';
            return false;
        } else {
            a.style.border = '0.5px solid #666';
        };

        console.log('First name : ' + a.value);
        console.log('Last name : ' + b.value);
        if(c.checked){
            console.log('Gender : ' + c.value);
        }else{
            console.log('Gender : ' + d.value);
        }
        
        console.log('Message : ' + e.value);
        document.querySelector('.confirmation-banner').innerHTML = ('Thank you for contacting us , ' + a.value + ' !');
        return true;

    }

}());



















// var letters = /^[a-zA-Z]+''/;


// if(a.value === '' ){
//     a.style.border = 'thick solid #ff0000';
//     // return false;
// };
// if(b.value === ''){
//     b.style.border = 'thick solid #ff0000';
//     // return false;
// };
// if(c.checked === false && d.checked === false){
//     document.querySelector('#radio').style.border = 'thick solid #ff0000';
//     // return false;
// };

// if(e.value === ''){
//     e.style.border = 'thick solid #ff0000';
//     // return false;
// };

// return (true);

// function checkTxt() {
//     var element = document.getElementsByClassName('input-field');
//     element.value = element.value.replace(/[^a-zA-Z0-9@]+/, '');
// };

// if(document.myForm.name.match(alphaExp))
// {
//     //Your logice will be here.
// }
// else{
//     alert("Please enter only alphabets");
// }

//     console.log(a.value);
//     console.log(b.value);
//     console.log(c.checked);
//     console.log(d.checked);
//     console.log(e.value);
// }