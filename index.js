//fill schedule with time blocks
//update the time with current weekday, month and day
//When a time block is edited it can be saved by a button click to the right of the time block
//current hour time block needs to be red, previous grey, and future green

var container = document.getElementsByClassName('container-fluid')[0];
var currentDay = document.getElementById('currentDay');





var schedule = [

    {
        title: '9AM',
        content: '',
        code: '9'
    },
    {
        title: '10AM',
        content: '',
        code: '10'
    },
    {
        title: '11AM',
        content: '',
        code: '11'
    },
    {
        title: '12PM',
        content: '',
        code: '12'
    },
    {
        title: '1PM',
        content: '',
        code: '13'
    },
    {
        title: '2PM',
        content: '',
        code: '14'
    },
    {
        title: '3PM',
        content: '',
        code: '15'
    },
    {
        title: '4PM',
        content: '',
        code: '16'
    },

    {
        title: '5PM',
        content: '',
        code: '17'
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
        blockTime.id = 'blockTime' + i;

        //Element for holding events
        var timeBlock = document.createElement('INPUT');
        timeBlock.id = 'timeBlock' + i;
        timeBlock.classList.add('time-block','format-text', 'list-group-item', 'list-group-item-action', 'list-group-item-secondary', 'col-sm-10', 'fill-space');
        //add text content to time block
        timeBlock.value = schedule[i].content;
        //Element for saving event to local storage
        var saveButton = document.createElement('button');
        saveButton.id = 'saveButton' + i;
        saveButton.classList.add('saveBtn', 'col-sm-1', 'fill-space');


        //check the current time and add class to time block
        if (schedule[i].code == moment().hour()) {
            timeBlock.classList.add('present');
        }
        else if(schedule[i].code > moment().hour()){
            timeBlock.classList.add('future');
        }
        else{
            timeBlock.classList.add('past');
        }



        //add all elements to row
        row.appendChild(blockTime);
        row.appendChild(timeBlock);
        row.appendChild(saveButton);
    }

}
fillTimeBlocks();

//gets the saved information from local storage and adds it to the schedule
function getBlockContent() {

    for (var i = 0; i < 9; i++) {

        var blockContent = localStorage.getItem(i);
        // console.log(localStorage.getItem(i));
        if(blockContent != null){
        schedule[i].content = blockContent;
        console.log(blockContent);
        }

        //the schedule content is null because it is empty 

    }






}

//sets the current day
function setCurrentDay(){
    var currentDay = moment().format('dddd, MMMM Do');
    document.getElementById('currentDay').innerHTML = currentDay;
   
}
setCurrentDay();

// console.log(moment().hour());







//creating one event listener for all time blocks and save buttons


var mainButtonListener = container.addEventListener('click', function(event) {


    //prints event of element id to console
    console.log(String(event.target.id));

    
   
    //if the event click is a button then save the timeBlock input to local storage
    if(event.target.nodeName == 'BUTTON'){
        // console.log("you just clicked a saveButton")
        //current index of time block
        var indexOfRow = event.target.id.slice(-1);
        //put row content into local storage

        localStorage.setItem(indexOfRow, document.getElementById(('timeBlock' + indexOfRow)).value);
     }



 




});







