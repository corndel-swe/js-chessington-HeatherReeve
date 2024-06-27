import { Rectangle } from '../exercises/rectangles.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('Area of rectangle', function() {
  const newRectangle = new Rectangle(5, 10)

  it('should call the area method', function() {
    const area = newRectangle.area()
    assert.strictEqual(area, 50)
  })
})
