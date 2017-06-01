let theHellWay = () => {
  // Counter URL http://localhost:3000/count/1 will return {"number":"1"}
  let url = 'http://localhost:3000/count'
  // Function to append a span with the number returned from the ajax call
  let addNumber = (number) => {
    let html = `<span style="font-size:5rem;margin-left:30px;">${number}</span>`
    $("#counter-container-with-callbacks").append(html)
  }
  // Callback hell
  $.ajax({
    url:`${url}/1`,
    success:function(data) {
      addNumber(data.number)
      $.ajax({
        url:`${url}/2`,
        success:function(data) {
          addNumber(data.number)
          $.ajax({
            url:`${url}/3`,
            success:function(data) {
              addNumber(data.number)
              $.ajax({
                url:`${url}/4`,
                success:function(data) {
                  addNumber(data.number)
                  $.ajax({
                    url:`${url}/5`,
                    success:function(data) {
                      addNumber(data.number)
                      $.ajax({
                        url:`${url}/6`,
                        success:function(data) {
                          addNumber(data.number)
                          $.ajax({
                            url:`${url}/7`,
                            success:function(data) {
                              addNumber(data.number)
                              $.ajax({
                                url:`${url}/8`,
                                success:function(data) {
                                  addNumber(data.number)
                                  $.ajax({
                                    url:`${url}/9`,
                                    success:function(data) {
                                      addNumber(data.number)
                                      $.ajax({
                                        url:`${url}/10`,
                                        success:function(data) {
                                          addNumber(data.number)
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  });
}
