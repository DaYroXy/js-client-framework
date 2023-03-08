import dbs from './db.js';
import Encryption from '../src/utils/Encryption.js';


class Database {

    // Private static variable to store the singleton instance
    static #instance = null;
    
    db = {}

    constructor() {
        this.cipher = new Encryption("u7x!A%C*F-JaNdRgUkXp2s5v8y/B?E(G+KbPeShVmYq3t6w9z$C&F)J@McQfTjWn");
        
        if(!localStorage.getItem('db')) {
            this.db = dbs
            localStorage.setItem('db', this.cipher.encrypt(JSON.stringify(this.db)))
        } else {
            this.db = JSON.parse(this.cipher.decrypt(localStorage.getItem('db')))
        }

    }

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
        console.log(tableName)
        console.log(this.db)
        return this.db[tableName].find(row => row[key] === value);
    }

    createTable(tableName, table) {
        this.db[tableName] = table
        this.saveDb()
    }

    dropTable(tableName) {
        delete this.db[tableName]
        this.saveDb()
    }

    saveDb() {
        localStorage.setItem('db', this.cipher.encrypt(JSON.stringify(this.db)))
    }

    insert(tableName, row) {
        if(Array.isArray(row)) {
            this.db[tableName] = [...this.db[tableName], ...row];
        } else {
            this.db[tableName].push(row)
        }
        this.saveDb()
    }

    delete(tableName, key, value) {
        this.db[tableName] = this.db[tableName].filter(row => row[key] !== value)
        this.saveDb()
    }

    deleteTable(tableName) {
        this.db[tableName] = []
        this.saveDb()
    }

}
  
export default Database.getInstance();