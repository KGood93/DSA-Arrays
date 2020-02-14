function URLify(string){
    const regex = /\s/g
    console.log(string.replace(regex, '%20'))
  }
  
  URLify('tauhida parveen')
  URLify('www.thinkful.com /tauh ida parv een')