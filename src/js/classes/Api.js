export class Api {
  #apiUrl;

  constructor(apiUrl) {
    this.#apiUrl = apiUrl;
  }

  async get(endpoint) {
    let data = [];

    try {
      const response = await fetch(this.#apiUrl + endpoint);

      if (!response.ok) {
        console.log(response.status);
        return data;
      }

      data = await response.json();
    } catch (error) {
      console.log(error);
    }

    return data;
  }
}
