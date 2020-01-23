function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(function(allnames, name)
    {
        if(name in allnames)
        {
            allnames[name]++
        }
        else
        {
            allnames[name] = 1
        }
        return allnames
    },{})
  }
  
  module.exports = countWords
