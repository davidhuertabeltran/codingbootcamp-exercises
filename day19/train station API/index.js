const fetchDataTrain = () => {
  fetch(`http://bootcamp.podlomar.org/api/departures`)
  .then((resp) => resp.json())
  .then((json) => {
    createDepartures(json);
  }
)};

fetchDataTrain();

const createDepartures = (departures) => {

  const elementFromHTML = (html) => {
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    return tr;
  }
  
  const tbody = document.querySelector('.board__table tbody');

  departures.forEach((row) => {
    let html = `<tr>
    <td class="board__time">${row.time.hrs}:${row.time.mins}</td>
    <td class="board__train">${row.train}</td>
    <td class="board__no">${row.no}</td>
    <td class="board__to">${row.to}</td>
    <td class="board__status">${row.status}</td>
    <td class="board__track">${row.track}</td>
    <td class="board__button"><button>Delayed</button></td>
      </tr>
      `;
  
    const finalTable = elementFromHTML(html);
  
    document.querySelector('.board__table tbody').appendChild(finalTable);
  
    //to change the text and backgroundc color when pressing the button
    
    const changeStatus = () => {
  
      let changeButton = finalTable.querySelector(".board__status");
      changeButton.classList.toggle("board__status__delayed"); //I use this to change btween classes, the style of each classes is defined in the CSS code
  
      if(changeButton.className === 'board__status board__status__delayed') {
        
        finalTable.querySelector('.board__status').textContent = 'Delayed'; //I use this to change the text content depending on which class is active
        for(let i = 0; i < departures.length; i++) { //i use this loop to change the array content whent he button is clicked
          departures[i].status = "Delayed";
        }
        
  
      } else {
        finalTable.querySelector('.board__status').textContent = 'On Time';
        for(let i = 0; i < departures.length; i++) { //i use this loop to change the array content whent he button is clicked
          departures[i].status = "On Time";
          
        }
        
      }
    }
    
    finalTable.querySelector('.board__button').addEventListener('click', changeStatus);
  
  });
}