document.querySelector('.profile-submit').addEventListener('click', submitProfile);

function submitProfile() {
  var firstName = document.querySelector('.user-first-name').value;
  var lastName = document.querySelector('.user-last-name').value;
  var email = document.querySelector('.user-email').value;
  var photoUrl = document.querySelector('.user-photo').value;
  var dob = document.querySelector('.user-dob').value;
  var school = document.querySelector('.user-school').value;
  var description = document.querySelector('.user-description').value;

  if (
    firstName == '' ||
    lastName == '' ||
    email == '' ||
    dob == '' ||
    school == '' ||
    description == ''
  ) {
    document.querySelector('.error').textContent = 'Please fill out all the fields!';
  } else {
    localStorage.firstName = firstName;
    localStorage.lastName = lastName;
    localStorage.email = email;
    localStorage.dob = dob;
    localStorage.school = school;
    localStorage.description = description;

    location.href = 'home.html';
  }
}
