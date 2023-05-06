// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var edit = document.getElementsByClassName("fa fa-thin fa-pen-to-square")
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
const messagesList = document.querySelector('.messages');
const profileName = document.querySelector('#profile')


for (let e of edit){
  e.addEventListener('click', function(){
    console.log(this.parentNode.childNodes)
    const input = this.parentNode.childNodes[1]
    input.focus()
    input.select()
    input.addEventListener('keyup', editText)
  
  })
}

function editText(event){
  const newText = event.target.value
  const id = event.target.dataset.id // data attribute, in HTML is used to store valuable information that we need access to. 
  fetch('edit', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    
    body: JSON.stringify({
      id, newText
      
    })
   
  })
  .then(function (response) {
    // window.location.reload()
  })
}

  for (let t of trash){
    t.addEventListener('click', function(){
      fetch('messages', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
          id : t.id,
          
        })
       
      })
      .then(function (response) {
        window.location.reload()
      })
    })
  }
        
      
//       });
      
// });


// messagesList.addEventListener('click', (event) => {
//   const trashIcon = event.target.closest('.fa-trash');
//   if (!trashIcon) {
//     return;
//   }
//   const messageElement = trashIcon.closest('.message');
//   const description = messageElement.querySelector('span:nth-child(1)').innerText;
//   const msg = messageElement.querySelector('span:nth-child(2)').innerText;
//   const height = messageElement.querySelector('span:nth-child(3)').innerText;
//   const place = messageElement.querySelector('span:nth-child(4)').innerText;

//   fetch('/messages', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       description,
//       msg,
//       height,
//       place
//     })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     window.location.reload();
//   })
//   .catch(error => console.error('There was a problem deleting the message:', error));
// });

