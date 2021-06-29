class Github {
  constructor() {
    this.client_id = YOUR_CLIENT_ID;
    this.client_secret = YOUR_CLIENT_SECRET;
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
