 const departures = [
    {
      time: { hrs: 8, mins: 14 },
      train: 'Acela Express',
      no: 2153,
      to: 'Washington, DC',
      status: '',
      track: 2,
    },
    {
      time: { hrs: 8, mins: 19 },
      train: 'New Haven Line',
      no: 1541,
      to: 'Grand Central Terminal',
      status: 'On Time',
      track: 14,
    },
    {
      time: { hrs: 8, mins: 20 },
      train: 'Shore Line East',
      no: 1606,
      to: 'Old Saybrook',
      status: 'On Time',
      track: 12,
    },
    {
      time: { hrs: 8, mins: 37 },
      train: 'N.E. Regional',
      no: 190,
      to: 'Boston South Station',
      status: 'On Time',
      track: 1,
    },
    {
      time: { hrs: 8, mins: 40 },
      train: 'Shuttle',
      no: 490,
      to: 'Springfield',
      status: 'On Time',
      track: 3,
    },
    {
      time: { hrs: 8, mins: 43 },
      train: 'N.E. Regional',
      no: 96,
      to: 'Newport News',
      status: 'On Time',
      track: 2,
    },
    {
      time: { hrs: 8, mins: 50 },
      train: 'New Haven Line',
      no: 1545,
      to: 'Grand Central Terminal',
      status: 'On Time',
      track: 8,
    },
    {
      time: { hrs: 9, mins: 16 },
      train: 'Shore Line East',
      no: 1610,
      to: 'Old Saybrook',
      status: 'On Time',
      track: 10,
    },
    {
      time: { hrs: 9, mins: 23 },
      train: 'New Haven Line',
      no: 1549,
      to: 'Grand Central Terminal',
      status: 'On Time',
      track: 14,
    },
    {
      time: { hrs: 9, mins: 36 },
      train: 'Acela Express',
      no: 2150,
      to: 'Boston-South Sta.',
      status: '',
      track: 1,
    },
    {
      time: { hrs: 9, mins: 46 },
      train: 'New Haven Line',
      no: 1551,
      to: 'Grand Central Terminal',
      status: 'On Time',
      track: 8,
    },
    {
      time: { hrs: 10, mins: 13 },
      train: 'N.E. Regional',
      no: 170,
      to: 'Boston South Station',
      status: 'On Time',
      track: 2,
    },
    {
      time: { hrs: 10, mins: 25 },
      train: 'New Haven Line',
      no: 1553,
      to: 'Grand Central Terminal',
      status: 'On Time',
      track: 14,
    },
  ]

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



