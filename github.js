class Github {
  constructor() {
    this.auth_token = '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';
    this.repos_count = 5;
    this.repos_sort = 'created:%20asc';
  }

  async getUser(username) {
    // Fetching github api for users
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      method: 'GET',
      headers: {
        authorization: `token ${this.auth_token}`,
      },
    });

    // Fetching github api for user's repos
    // https://api.github.com/users/e/repos?per_page=5&sort=created:%20asc
    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, {
      method: 'GET',
      headers: {
        authorization: `token ${this.auth_token}`,
      },
    });

    // Converting user json to javascript object
    const user = await userResponse.json();
    
    // Converting repos json to javascript object
    const repos = await repoResponse.json();

    // Returning user obj
    // {user} === {user:user}
    return { user, repos };
  }
}
