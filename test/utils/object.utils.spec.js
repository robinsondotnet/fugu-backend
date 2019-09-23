const assert = require('assert');
const {getClassName, splitJoin} = require('../../src/utils/object.utils');

describe('Object Utils', () => {
    describe('#getClassName()', () => {
        class Foo {
            constructor(name) {
                this.name = name;
            }
        }

        it('should return object name', () => {
            // Arrange
            const foo = new Foo("foo");

            // Act
            const actual = getClassName(foo);

            // Assert
            assert.equal(actual, "Foo");
        })

        it('should throw an error when untyped object is passed', () => {
            // Arrange
            const foo = {name: 'foo'};

            // Act
            const actual = () => getClassName(foo);

            // Assert 
            assert.throws(actual, Error);
        })
    }),
    describe('#splitJoin()',  () => {

        it('should return composed string value', () => {
            // Arrange
            const person = {name: 'Kento', age: 26}
            const preffix = 'r'

            // Act
            const actual = splitJoin(person, preffix);
            
            // Assert
            assert.equal(actual, 'r.name = $name ,r.age = $age');
        })
    })
})
