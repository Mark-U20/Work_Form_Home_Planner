//fill schedule with time blocks
//update the time with current weekday, month and day
//When a time block is edited it can be saved by a button click to the right of the time block
//current hour time block needs to be red, previous grey, and future green

var container = document.getElementsByClassName('container-fluid')[0];
var currentDay = document.getElementById('currentDay');





var schedule = [

    {
        title: '9AM',
        content: ''
    },
    {
        title: '10AM',
        content: ''
    },
    {
        title: '11AM',
        content: ''
    },
    {
        title: '12PM',
        content: ''
    },
    {
        title: '1PM',
        content: ''
    },
    {
        title: '2PM',
        content: ''
    },
    {
        title: '3PM',
        content: ''
    },
    {
        title: '4PM',
        content: ''
    },

    {
        title: '5PM',
        content: ''
    }



];





//fills the schedule with time blocks
function fillTimeBlocks() {






    getBlockContent();
    // class="list-group-item list-group-item-action list-group-item-secondary"

    for (var i = 0; i < 9; i++) {
        //row of time block contents with id of 'i'
        var row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
        container.appendChild(row);


        //element for holding time
        var blockTime = document.createElement('div');
        blockTime.classList.add('block-time', 'col-sm-1', 'hour', 'fill-space');
        blockTime.innerHTML = schedule[i].title;

        //Element for holding events
        var timeBlock = document.createElement('div');
        timeBlock.classList.add('time-block', 'list-group-item', 'list-group-item-action', 'list-group-item-secondary', 'col-sm-10', 'fill-space');
        //Element for saving event to local storage
        var saveButton = document.createElement('button');
        saveButton.classList.add('saveBtn', 'col-sm-1', 'fill-space');


        //check the current time and add class to time block




        //add all elements to row
        row.appendChild(blockTime);
        row.appendChild(timeBlock);
        row.appendChild(saveButton);
    }

}
fillTimeBlocks();

//gets the schedule from local storage and adds it to array of time blocks
function getBlockContent() {








}

//sets the current day
function setCurrentDay(){
    var currentDay = moment().format('dddd, MMMM Do');
    document.getElementById('currentDay').innerHTML = currentDay;
   
}
setCurrentDay();







