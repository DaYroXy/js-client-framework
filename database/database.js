import dbs from './db.js';

class Database {
    // Private static variable to store the singleton instance
    static #instance = null;
    db = dbs || {}

    // Public static method to get the singleton instance
    static getInstance() {
      if (Database.#instance === null) {
        Database.#instance = new Database();
      }
      return Database.#instance;
    }

    getTables() {
        return this.db
    }

    getTable(tableName) {
        return this.db[tableName]
    }

    getRowBy(tableName, key, value) {
        return this.db[tableName].find(row => row[key] === value);
    }

    createTable(tableName, table) {
        this.db[tableName] = table
    }


}
  
export default Database.getInstance();