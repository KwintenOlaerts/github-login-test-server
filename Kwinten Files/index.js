var p = MindFusion.Scheduling;


// create a new calander instance
var calendar = new p.Calendar(document.getElementById("calendar"));

calender.theme = "peach";

calender.selectionEnd.addEventListener(handleSelection);

//visualize the calender
calendar.render();
function handleSelection(sender, args)
{
    if(sender.currentView === p.CalendarView.SingleMonth)
    {
    //cancel the default behavior
    args.cancel = true;

    var start = args.startTime;
    var end = args.endTime;

    // clear alle dates from the timetable
    sender.timetableSetting.dates.clear();
    while(start < end)
    {
        sender.timetableSettings.dates.add(start);
        start = p.DateTime.addDays(start, 1);
    }
}
}