# Enter The Matrix with JavaScript

We are going to create, a step by step, Matrix calculator UI using RequireJS.

This is going to be fun.

## Matrix Module

First, define a Matrix module (`matrix.js`) that returns a `Matrix` class.

The Matrix class should have the following requirements:

* The constructor of the class should take the matrix dimensions - `N` and `M`, that are the number of rows and number of columns
* `getN()` method, that returns the number of rows
* `getM()` method, that retuns the number of columns
* `getRow(index)` method, that returns the row located at `index`, 0-based
* `getCol(index)` method, that retuns the column, located at `index`, 0-based
* `setRow(index, row)` - changes the row, located at `index` with the given `row` - 0 based. This can set a row outside the current matrix dimension, only if the index is the current dimension for rows + 1
* `setCol(index, col)` - changes the column, located at `index` with the given `col` - 0 based. This can set a column outside the current matrix dimension, only if the index is the current dimension for columns + 1
* `getAt(i, j)` - returns the value of the cell with with index `i` and `j` - 0 based
* `setAt(i, j, value)` - sets a new `value` to the cel with index `i` and `j`. This cannot extend the matrix outside dimensions
* `getData()` - this method returns the data of the matrix, represented as a two-dimensional JavaScript array
* `toString()` - prints the matrix in a nice, readable way

## MatrixOperations Module

This module will require the `Matrix` module.

Next, create a `matrixoperation.js` module that retuns a single object (for example `MatrixOperations`) with the following methods:

* `createFromArray(data)` - this creates a new Matrix from the 2-dimensional array `data`. This is an array of arrays, where each element is a row for the matrix
* `transpose(M)` - this takes a matrix and returns new matrix, that is the transpoed of `M`. [This is Matrix transposition.](http://en.wikipedia.org/wiki/Transpose)
* `add(M1, M2)` - the method returns a new matrix that is the sum of matrices `M1` and `M2`. [This is Matrix addition](http://en.wikipedia.org/wiki/Matrix_addition)
* `scalarMult(scalar, M1)` - the method returns a new matrix, that is the scalar product of `scalar` with the matrix `M1`. [This is a matrix scalar multiplication.](http://www.purplemath.com/modules/mtrxmult.htm)
* `multiply(M1, M2)` - the method returns a new matrix that is the product of multiplying `M1` and `M2`. [This is Matrix Multiplication](http://www.purplemath.com/modules/mtrxmult.htm)

## Matrix Calculator UI

Now that we have our Modules, it's time to get the UI up and running.

Make the following:

1. Take input from the user for matrix dimensions
2. Output that many `<input type="number">` fields that are placed as a matrix
3. There should be one button for each Matrix Operation available
4. Once an operation is selected, be smart about it - give the user a proper UI for the operation. For example, if Matrix multiplication is selected and the user has entered `NxM` matrix, display a `MxN` matrix ready to be filled with data.

For the UI, create a separate module :)
