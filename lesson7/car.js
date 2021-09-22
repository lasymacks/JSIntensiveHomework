function checkNumber(num) {
    if(typeof(num) !== 'number' || isNaN(num)) {
        return false
    }
    if (num === 0 || num < 0) {
        return false;
    }
    if (num === Infinity || num === -Infinity) {
        return false;
    }
    return true;
}
function checkString(str) {
    if (typeof(str) !== 'string' || str.length <= 0) {
        return false;
    }
    return true;
}

class Car {

    #brand = 'Fiat';
    #model = '500';
    #yearOfManufacturing  = 2015;
    #maxSpeed = 170;
    #maxFuelVolume = 20;
    #fuelConsumption = 8;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }
    get model() {
        return this.#model;
    }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }
    get maxSpeed() {
        return this.#maxSpeed;
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }
    get fuelConsumption() {
        return this.#fuelConsumption;
    }
    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }
    get isStarted() {
        return this.#isStarted;
    }
    get mileage() {
        return this.#mileage;
    }

    set brand(value) {
        if (checkString(value) && value.length <= 50) {
            return this.#brand = value;
        }
    }
    set model(value) {
        if (checkString(value) && value.length <= 50) {
            return this.#model = value;
        }
    }
    set yearOfManufacturing(value) {
        if (checkNumber(value) && value >= 1900 && value <= 2021) {
            return this.#yearOfManufacturing = value;
        }
    }
    set maxSpeed(value) {
        if (checkNumber(value) && value >= 100 && value <= 300) {
            return this.#maxSpeed = value;
        }
    }
    set maxFuelVolume(value) {
        if (checkNumber(value) && value >= 5 && value <= 20) {
            return this.#maxFuelVolume = value;
        }
    }
    set fuelConsumption(value) {
        if (checkNumber(value)) {
            return this.#fuelConsumption = value;
        }
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена');
        }
        return this.#isStarted = true;
    }
    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина ещё не заведена');
        }
        return this.#isStarted = false;
    }
    fillUpGasTank(liters) {
        if (checkNumber(liters)) {
            if ((this.#currentFuelVolume + liters) <= this.#maxFuelVolume) {
                return this.#currentFuelVolume += liters;
            }
            throw new Error('Топливный бак переполнен');
        } else {
            throw new Error('Неверное количество топлива для заправки');
        }
    }
    drive(speed, hours) {
        if (!checkNumber(speed)) {
            throw new Error('Неверная скорость');
        }
        if (!checkNumber(hours)) {
            throw new Error('Неверное количество часов');
        }
        if (speed > this.maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        }
        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }
        const distance = speed * hours;
        const availableDistance = (this.#currentFuelVolume / this.#fuelConsumption) * 100;
        if (distance <= availableDistance) {
            this.#mileage += distance;
            this.#currentFuelVolume -= hours * this.#fuelConsumption;
            console.log(distance, availableDistance, this.#currentFuelVolume, this.#mileage);
            return this;
        } else {
            throw new Error('Недостаточно топлива');
        }
    } 
}

module.exports = Car;