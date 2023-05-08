// function validateAndSend() {
//     if (myForm.telephone.value == '' && myForm.mobile.value == '') {
//         alert('You have to enter at least one phone number.');
//         return false;
//     }
//     else {
//         myForm.submit();
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const inputs = Array.from(
//         document.querySelectorAll('input[name=eMail], input[name=Phone]')
//     );

//     const inputListener = e => {
//         inputs
//             .filter(i => i !== e.target)
//             .forEach(i => (i.required = !e.target.value.length));
//     };

//     inputs.forEach(i => i.addEventListener('input', inputListener));
// });