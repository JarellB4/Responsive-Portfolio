// function sendEmail() {
//     const myModal = document.getElementById('myModal');
//     const sgMail = require('@sendgrid/mail');
//     const button = document.getElementById('insert id')
//     button.onclick = () => {
//         show.bs.myModal
//     }
//     //SendGrid Email
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//     const msg = {
//       to: '', // Change to your recipient
//       from: 'jlw00329@gmail.com', // Change to your verified sender
//       subject: 'Sending with SendGrid is Fun',
//       text: 'and easy to do anywhere, even with Node.js',
//       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };
//     sgMail.send(msg, (err, info) => {
//       if (err) {
//         console.log('Email not Sent');
//       } else {
//         console.log('Your Email was Sent');
//       };
//       });
//   };