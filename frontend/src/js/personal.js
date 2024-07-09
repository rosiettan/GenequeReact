document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age);

    // Here you can add code to send data to a server or process it further
    alert('Survey Submitted!');
});
