class Cart {
  constructor(initHandler) {
    initHandler(this.products);
  }

  #storage = window.localStorage;

  events = {
    "add to cart": [],
    "remove from cart": [],
  };

  get products() {
    const products = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const productString = localStorage.getItem(key);
      const product = JSON.parse(productString);
      products.push(product);
    }
    return products;
  }

  addProduct(product) {
    this.#storage.setItem(product.id, JSON.stringify(product));
    this.dispatch("add to cart", this.products);
  }

  deleteProduct(id) {
    this.#storage.removeItem(id);
    this.dispatch("remove from cart", this.products);
  }

  listen(type, handler) {
    this.events[type].push(handler);
    return this;
  }

  dispatch(type, payload) {
    this.events[type].forEach((handler) => {
      handler(payload);
    });
  }
}
