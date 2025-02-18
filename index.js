```javascript
// Basic Data Processing in JavaScript

// Defining a class for basic data processing
class BasicDataProcessing {
    constructor(data) {
        this.data = data;
    }

    // Method to get the total count of data
    getCount() {
        return this.data.length;
    }

    // Method to get the sum of data
    getSum() {
        let sum = 0;
        for (let i = 0; i < this.data.length; i++) {
            sum += this.data[i];
        }
        return sum;
    }

    // Method to get the average of data
    getAverage() {
        let sum = this.getSum();
        let avg = sum / this.getCount();
        return avg;
    }

    // Method to get the minimum value in data
    getMin() {
        let min = this.data[0];
        for (let i = 1; i < this.data.length; i++) {
            if (this.data[i] < min) {
                min = this.data[i];
            }
        }
        return min;
    }

    // Method to get the maximum value in data
    getMax() {
        let max = this.data[0];
        for (let i = 1; i < this.data.length; i++) {
            if (this.data[i] > max) {
                max = this.data[i];
            }
        }
        return max;
    }

    // Method to sort the data in ascending order
    sortDataAsc() {
        return this.data.sort((a, b) => a - b);
    }

    // Method to sort the data in descending order
    sortDataDesc() {
        return this.data.sort((a, b) => b - a);
    }
}

// Example usage
let data = [5, 2, 8, 9, 4, 7, 6, 3, 1, 10];
let processor = new BasicDataProcessing(data);

console.log("Count: " + processor.getCount());
console.log("Sum: " + processor.getSum());
console.log("Average: " + processor.getAverage());
console.log("Min: " + processor.getMin());
console.log("Max: " + processor.getMax());
console.log("Sorted Asc: " + processor.sortDataAsc());
console.log("Sorted Desc: " + processor.sortDataDesc());

// The above JavaScript code provides a basic data processing class that can be used to perform common data processing tasks such as getting the total count of data, sum, average, minimum and maximum values as well as sorting the data in ascending and descending order.
```
Цей код створює клас з функціями, що обробляють масив чисел, включаючи підрахунок кількості елементів, суми, середнього значення, мінімального та максимального значень, а також сортування даних.