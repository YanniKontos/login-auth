function submitForm() {
    const email = document.getElementById('email-validation').value;
    const password = document.getElementById('pwd-validation').value;
    const fail = document.getElementById('fail');
  
    
    if (email == 'admin' && password == 'password') {
        alert('login successful');
    }
    
    else {
        fail.textContent = 'Your Login Has Failed, Please Input Correct Data';
        event.preventDefault();
    }
    
    if (email == '' && password == '') {
        alert('please input details in the specific field');
        event.preventDefault();
    }
}