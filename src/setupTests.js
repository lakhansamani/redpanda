// Mock storage for Jest testing
class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  removeItem(key) {
    delete this.store[key];
  }
}
global.localStorage = new LocalStorageMock();
global.localStorage.setItem('authData', JSON.stringify({
  id: 3,
  name: 'Test',
  email: 'test@test.com'
}));
