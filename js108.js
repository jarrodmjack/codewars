// PREP
// P
// s is a string catalog passed into the function
// article is a string keyword
// looking for article keyword inside of s
// assuming s / article won't be empty
// article may not be present inside of s

// R: I will return any lines that include the article keyword in the format of "articlename > prx: $price qty: quantity \n"

// E: Example:
/* 
lets say I am passed an article of 'saw'
and this is my catalog
<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

I will return :

"table saw > prx: $1099.99 qty: 5\n saw > prx: $9 qty: 10\n"

if article is not found, return "Nothing."

*/

const s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`


function catalog(s, article) {
//   Split string into array of catalog products
// make array of articles by pushing all items between <name></name>
//   make array of prices by pushing all items between <prx></prx>
//   make array of qtys by pushing all items between <qty></qty>
//   find any articles in the articles array that match article parameter (also need index of that item)
// use that index to find the other items in the other arrays
//   return in format specified by returns
  let articles = [];
  let prices = [];
  let qtys = [];

 let arr = s.split('\n\n')
  for(let i = 0; i < arr.length; i++){
   let catItem = arr[i].split('<prod><name>').join('').split('</name><prx>')
   let catPrice = arr[i].split('<prx>')
   let catQty = arr[i].split('<qty>')
 
   if(catItem[0].includes(article)){
    articles.push(catItem[0])
     prices.push(catPrice[1].split('</prx>')[0])
     qtys.push(catQty[1].split('</qty>')[0])
   }
  } 
  let result = [];
  
  for(let i = 0; i < articles.length; i++){
    let str = `${articles[i]} > prx: $${prices[i]} qty: ${qtys[i]}`
    result.push(str)
  }
  
  console.log(result.join('\n'))

 
}

catalog(s, 'saw')