class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    // Creating html for user profile and inserting to dom
    this.profile.innerHTML = `
                              <div class="card card-body mb-3">
                                <div class="row">
                                  <div class="col-md-3">
                                    <img src="${user.avatar_url}" alt="User avatar" class="img-fluid mb-2" />
                                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                                  </div>
                                  <div class="col-md-9">
                                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                                    <span class="badge badge-success">Followers: ${user.followers}</span>
                                    <span class="badge badge-info">Following: ${user.following}</span>
                                    <br><br>
                                    <ul class="list-group">
                                      <li class="list-group-item">Username: ${user.login}</li>
                                      <li class="list-group-item">Company: ${user.company}</li>
                                      <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                      <li class="list-group-item">Location: ${user.location}</li>
                                      <li class="list-group-item">Member Since: ${user.created_at}</li>
                                    </ul>
                                  </div>
                                </div>
                              </div> 
                              <h3 class="page-heading mb-3">Latest Repos</h3>
                              <div id="repos"></div>
                             `;
  }

  // Remove profile if the name input is empty string
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // Show ui alert for errors
  showAlert(message, className) {
    // Clear the old alerts to show new alerts
    ui.clearAlert();

    // Creating div to show alert
    const div = document.createElement('div');

    // Adding bootstrap classes to use different designs of alerts
    div.className = className;

    // Creating text node to add the error message
    div.appendChild(document.createTextNode(message));

    // Selecting the search container to insert the error bellow search container
    const searchContainer = document.querySelector('.searchContainer');

    // Selecting search input div to add error
    const searchDiv = document.querySelector('.search');

    // Inserting error above the search bar
    searchContainer.insertBefore(div, searchDiv);

    // Removing the current alert after 3s
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  // Clear alert from showing more than error
  clearAlert() {
    // Selecting the alert div
    const currentAlert = document.querySelector('.alert');

    // Remove the alert div from the dom
    if (currentAlert !== null) {
      currentAlert.remove();
    }
  }

  // Showing users github repos
  showRepos(repos) {
    let output = '';

    // Looping through repos and creating html div blocks with the repos details
    repos.forEach((repo) => {
      output += `
                <div class="card card-body mb-2">
                  <div class="row">
                    <div class="col-md-6">
                      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                      <span class="badge badge-primary">Starts: ${repo.stargazers_count}</span>
                      <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                      <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                    </div>
                  </div>
                </div>
      `;
    });

    // Inserting repos details into dom
    document.getElementById('repos').innerHTML = output;
  }
}
