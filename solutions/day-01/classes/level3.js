// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Statistics {
    constructor(samples) {
        this.samples = samples
        this.samples.sort((a, b) => { return a - b });
    }

    count () {
        return this.samples.length
    }

    mean () {
        return this.samples.reduce((acc, value) => { return acc + value }) / this.count()
    }

    sum () {
        return this.samples.reduce((acc, value) => { return acc + value })
    }

    min () {
        return this.samples[0]
    }

    max () {
        return this.samples[0]
    }

    range () {
        return this.max() - this.min()
    }

    median () {
        let half = Math.floor(this.count() / 2);
        
        if (this.count() % 2) {
            return this.samples[half]
        }
            
        return (this.samples[half - 1] + this.samples[half]) / 2.0;
    }

    mode () {
        let maxFreq = 0
        let actual = this.samples[0]
        let mode = this.samples[0]
        let freq = 0

        for (let el of this.samples) {
            if (el === actual) {
                freq++
            } else {
                if (freq > maxFreq) {
                    maxFreq = freq
                    mode = actual
                }
                actual = el
                freq = 1
            }
        }

        if (freq > maxFreq) {
            maxFreq = freq
            mode = actual
        }

        return [mode, maxFreq]
    }

    variance () {
        let mean = this.mean()
        let squareDiff = this.samples.reduce((acc, value) => { return acc + Math.pow((value - mean), 2) }, 0)

        return squareDiff / this.count()
    }

    stdDeviation () {
        return Math.sqrt(this.variance())
    }

    describe() {
        console.log(
            `Count: ${this.count()}
            Sum: ${this.sum()}
            Min: ${this.min()}
            Max: ${this.max()}
            Range: ${this.range()}
            Mean: ${this.mean()}
            Median: ${this.median()}
            Mode: ${this.mode()}
            Variance: ${this.variance()}
            Standard Deviation: ${this.stdDeviation()}`
        )
    }
}

let stats = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
stats.describe()