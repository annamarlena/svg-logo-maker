const Shape = require("./shapes")

// Test the circle logo
describe('Shape', () => {
  describe('Circle', () => {
    it('Should make sure that a circle is created when that shape is the instantiated class.', () => {
      let mockShape = new Shape('AMK', 'pink', 'circle', 'green');
        expect(mockShape.buildSVG(mockShape.buildShape())).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">AMK</text></svg>`)
      }
    )
  })
})