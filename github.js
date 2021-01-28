class GitHub {
  constructor() {
    this.client_id = "52ff14e8808299f3b347";
    this.client_secret = "bee51b2747d8dab5954d3c2f341bfa7e0b1fab14";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`
    );

    const profileData = await profileResponse.json();

    return {
        profile: profileData
    };
  }
}
