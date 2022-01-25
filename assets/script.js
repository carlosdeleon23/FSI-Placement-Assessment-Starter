// First, tell us your name
let yourName = "Carlos De Leon"// HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// assigning var for gbQTY, ccQTY, sugarQTY & totalQTY to quarySelector
let gbQty = document.querySelector("#qty-gb")
let ccQty = document.querySelector("#qty-cc")
let sugarQty = document.querySelector("#qty-sugar")
let totalQty = document.querySelector("#qty-total")

// assigning EventListener for clicking the + button
document.getElementById('add-gb').addEventListener('click', function() {
    // value of gb increments by 1
    gb++;
    // assigning gingerbread qty text box with gb
    gbQty.textContent = gb;
    // assigning total = gb + cc + sugar
    totalQty.textContent = gb + cc + sugar;
})

// assigning EventListener for clicking the - button
document.getElementById('minus-gb').addEventListener('click', function() {
    //prevents gb to count negative numbers
    if (gb <= 0)
        gb = 0;

    else
    {
        // value of gb decrements by 1
        gb--;
        // assigning gingerbread qty text box with gb
        gbQty.textContent = gb;
        // assigning total = gb + cc + sugar
        totalQty.textContent = gb + cc + sugar;
    }
})
// assigning EventListener for clicking the + button
document.getElementById('add-cc').addEventListener('click', function() {
    // value of cc increments by 1
    cc++;
    // assigning chocolate chip cookies qty text box with cc
    ccQty.textContent = cc;
    // assigning total = gb + cc + sugar
    totalQty.textContent = gb + cc + sugar;
})

// assigning EventListener for clicking the - button
document.getElementById('minus-cc').addEventListener('click', function() {
    // prevents cc to count negative numbers
    if (cc <= 0)
        cc = 0;

    else
    {
        // value of cc decrements by 1
        cc--;
        // assigning chocolate chip cookies qty text box with cc
        ccQty.textContent = cc;
        // assigning total = gb + cc + sugar
        totalQty.textContent = gb + cc + sugar;
    }
})
// assigning EventListener for clicking the + button
document.getElementById('add-sugar').addEventListener('click', function() {
    // value of sugar increments by 1
    sugar++;
    // assigning sugar qty text box with sugar
    sugarQty.textContent = sugar;
    // assigning total = gb + cc + sugar
    totalQty.textContent = gb + cc + sugar;
})

// assigning EventListener for clicking the - button
document.getElementById('minus-sugar').addEventListener('click', function() {
    // prevents sugar to count negative numbers
    if (sugar <= 0)
        sugar = 0;

    else
    {
        // value of sugar decrements by 1
        sugar--;
        // assigning sugar qty text box with sugar
        sugarQty.textContent = sugar;
        // assigning total = gb + cc + sugar
        totalQty.textContent = gb + cc + sugar;
    }
})

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`