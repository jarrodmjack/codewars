/*
Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.
*/


// PREP
// I will create a function that takes in an integer as a parameter called summary. summary will represent the total number of digits that adding the page numbers together creates. I must find the amount of pages that will be in the book by using the summary to calculate it.



// P:
// Assuming all inputs will be valid
// summary/pages could be a large number (100,000)
// single function


// R:
// I will return an integer representing the number of pages in the book



// E: Example
/*
summary=25
1234567891011121314151617 === 17. We hit 25 digits at 17
*/



function amountOfPages(summary){
    // P:
    //   create string variable
    //   loop through and concatenate all numbers into string
    //   check if string length >= summary
    //   if >=, return the last number that got added
    
      let str = ''
      let num = ''
     
      for(let i = 1; i <= summary; i++){
        str += i
        if(str.length === summary){
          return i
        }
      }
     
      // console.log(str)
     
    }
    
    amountOfPages(25)