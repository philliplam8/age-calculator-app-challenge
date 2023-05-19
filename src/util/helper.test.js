import { calculateAge } from "./helper"

const TODAY = 19;

const td = {
    e1: {
        day: TODAY - 2,
        month: 5,
        year: 2023,
        output: "0 years, 0 months, 2 days."
    },
    e2: {
        day: TODAY,
        month: 5,
        year: 2023,
        output: "0 years, 0 months, 0 days."
    },
    e3: {
        day: TODAY,
        month: 5,
        year: 2022,
        output: "1 years, 0 months, 0 days."
    },
}

describe("Tests: 1", () => {
    it("Example 1: 2 Days", () => {
        expect(calculateAge(td.e1.day, td.e1.month, td.e1.year)).toBe(td.e1.output)
    })

    it("Example 2: 0 Days -- Today", () => {
        expect(calculateAge(td.e2.day, td.e2.month, td.e2.year)).toBe(td.e2.output)
    })

    it("Example 3: 1 year", () => {
        expect(calculateAge(td.e3.day, td.e3.month, td.e3.year)).toBe(td.e3.output)
    })
})