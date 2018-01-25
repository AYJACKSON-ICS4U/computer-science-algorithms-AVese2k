background(0, 0, 0);//background is black
fill(255, 255, 255);//numbers are red

var displayArray = function(array, j, x, y) {
    textFont(createFont("monospace"), 11);
    var k = 30;//shift each number over 30 pixels
    for (var i = 0; i < array.length; i++) {
        text(array[i], ((i*k) + 20)+x, (j+20)+y);//outputting each number
    }
};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;//swapping the numbers
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];//determining the lowest number left in the array
        }
    } 
    return minIndex;
}; 

var x = 0;
var y = 0;
var counter = 0;

var selectionSort = function(array) {
    var num = 0;
    var j = 0;
    displayArray(array, j, x, y);//display array before sorting
    for(var i = 0; i < array.length; i++) {
        j+=25;//shift each number down 25 pixels
        num = indexOfMinimum(array, i);
        swap(array, i, num);
        displayArray(array, j, x, y);//display the array after a swap
        stroke(255, 0, 0);
        line(i*30 + x + 25, j + y + 8, num*30 + x + 25, j + y - 2);//outputting a red line to visualize the swap
    }
    counter++;
    if (counter === 1) {
        x=220;//shifting over the second array
    }
    else if (counter === 2) {
        x = 0;//shifting over the array to the position of the first array
        y=170;//shifting down the second array
    }
    else if (counter === 3) {
        x=220;//shifting over the second array
        y=170;//shifting down the second array
    }
};

var array = [22, 11, 88, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 11, 22, 42, 88]);

var array = [2, 9, 0, -7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [-7, 0, 2, 9, 42]);

var array = [5, 1, 3, 2, 4];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [1, 2, 3, 4, 5]);

var array = [-2, -99, 6, 15, 23];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [-99, -2, 6, 15, 23]);
