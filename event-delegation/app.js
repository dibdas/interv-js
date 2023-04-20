document.querySelector("#category").addEventListener("click", (event) => {
  console.log(event.target.value); //0
  console.log(event.target.id);
  console.log("parent got clicked");
  window.location = "/" + event.target.id;
});

// whenver I am clicking on any li events , the event is being bubbled to its parent element,
// and single event handler is being attached to the parent , it is even listening to the clicks
// hapening inside each and every  child , so it checks for the event and passes the event object
// and from the event object in the callback method , we can check what was the target , where the actual
// target is triggerd and we can take out the id from it

document.querySelector("#form").addEventListener("keyup", (event) => {
  console.log(event);
  if (event.target.dataset.uppercase !== undefined) {
    event.target.value = event.target.value.toUpperCase();
  }
});

// pros of event delegation is-
// usage of less memory by using single event handler
// it mitigate the performance of bottleneck operation
// writing less code
// dom maniulation , using the parent event listener.., without adding event listener to every html element
// cons
// all the events are not bubbled up , example:- blur,resize of window, scrolling
// unable to use stop propogation()..
