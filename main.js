/* if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bounds") 
}*/

 export class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75)  {
        this.loadFactor = loadFactor;
        this.capacity = initialCapacity;
        this.size = 0;
        this.buckets = new Array(this.capacity);

        // Buckets with empty arrays
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        const strKey = String(key);

        for (let i = 0; i < strKey.length; i++) {
            hashCode = (primeNumber * hashCode + strKey.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    // Resize buckets when load factor is exceeded
    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity);
        this.size = 0;

        // Initialize new buckets
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }

        // Rehash all existing elements
        for (let bucket of oldBuckets) {
            for (let [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }

    // Add or update key-value pair
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Check if key already exists
        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value; // update existing value
                return;
            }
        }
        // Add new key-value pair
        bucket.push([key, value]);
        this.size++;

        // Check if resize is needed
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    // Get value by key
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) return pair[1];
        }
        return undefined;
    }

    // Check if key exists
    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let [k] of bucket) {
            if (k === key) {
                return true;
            }
        }
        return false;
    }

    // Delete key 
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = []
        }
        this.size = 0;
    }

    // Return all keys
    keys() {
        const keysArray = [];
        for (let bucket of this.buckets) {
            for (let [key, _] of bucket) {
                keysArray.push(key);
            }
        }
        return keysArray;
    }

    //  Return all values
    values() {
        const valuesArray = [];
        for (let bucket of this.buckets) {
            for (let [_, value] of bucket) {
                valuesArray.push(value);
            }
        }
        return valuesArray;
    }

    entries() {
        const entriesArray = [];
        for (let bucket of this.buckets) {
            for (let [key, value] of bucket) {
                entriesArray.push([key, value]);
            }
        }
        return entriesArray;
    }
}
