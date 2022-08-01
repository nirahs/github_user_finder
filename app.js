// Initializing github object
const github = new Github();

// Initializing ui object
const ui = new UI();

// Input search field
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Getting input text
  const userText = e.target.value;

  if (userText.trim() !== '') {
    // Make http call
    github
      .getUser(userText)
      .then((data) => {
        // If user doesnt exist show alerts
        if (data.user.message === 'Not Found') {
          // Clearing the old profile
          ui.clearProfile();

          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        }
        // If user exist show profile
        else {
          // Show profile
          ui.showProfile(data.user);

          // Show repos
          ui.showRepos(data.repos);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});

