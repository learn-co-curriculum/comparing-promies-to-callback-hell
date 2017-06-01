let thePromisedWay = () => {
  let url = 'http://localhost:3000/count'
  let count = 1

  let addNumber = response => {
    let html = `<span style="font-size:5rem;margin-left:30px;">${response.number}</span>`;
    $("#counter-container-with-promises").append(html)
  }

  let countAgain = response => {
    addNumber(response)
    count += 1
    return $.ajax(`${url}/${count}`)
  }

  $.ajax(`${url}/${count}`)
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
  .then( resp => {return countAgain(resp)} )
}

let thePromisedWayWithWhen = () => {
  let url = 'http://localhost:3000/count'
  let p1 = $.get(`${url}/1`)
  let p2 = $.get(`${url}/2`)
  let p3 = $.get(`${url}/3`)
  let p4 = $.get(`${url}/4`)
  let p5 = $.get(`${url}/5`)
  let p6 = $.get(`${url}/6`)
  let p7 = $.get(`${url}/7`)
  let p8 = $.get(`${url}/8`)
  let p9 = $.get(`${url}/9`)
  let p10 = $.get(`${url}/10`)
  Promise.all([p1,p2,p3,p4,p5,p6,p7,p8,p9,p10])
  .then( responses => {
    responses.forEach( response => {
      let html = `<span style="font-size:5rem;margin-left:30px;">${response.number}</span>`;
      $("#counter-container-with-promises-and-when").append(html)})
  });
}

