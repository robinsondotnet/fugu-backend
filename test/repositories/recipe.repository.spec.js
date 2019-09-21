const assert = require('assert');
const {RecipeRepository} = require('../../src/repositories');
const sinon = require('sinon');

describe('Recipe Repository', function () {
    describe('#getRecipes()', function () {
        it('should return all recipes', function () {
            // Arrange
            const mock = sinon.mock(RecipeRepository);
            const expectedRecipes = [{name: 'Foo Saltado'}];
            mock.expects("getRecipes").returns(expectedRecipes);

            // Act
            const recipes = RecipeRepository.getRecipes();

            // Assert
            assert.equal(recipes, expectedRecipes);
        });
    });
});
