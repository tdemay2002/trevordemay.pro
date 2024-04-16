var searchMethod = "bing"; // can only be changed by html's dropdown menu. cycles between bing and youtube

// changes searchMethod
function searchFunction(value){
    searchMethod = value;
}

// opens and closes sidebar
function openBar() {
    document.getElementById('side').style.width = '400px';
    document.getElementById('open').style.opacity = '0';
}
function closeBar() {
    document.getElementById('side').style.width = '0';
    document.getElementById('open').style.opacity = '.75';
}

// takes user back to default webpage
function goHome(){
    document.getElementById('site').src = "https://bing.com";
}

// fulfills users search. user can search bing or youtube, and can give a url or just a search result
function goTo(){
    var searchEntry = document.getElementById('search').value; // gets the text set inside of search bar

    if (searchMethod == "bing"){
        // if user entered url go to url
        if (searchEntry.indexOf('.') > 0 && searchEntry.indexOf('. ' == -1)){
            document.getElementById('site').src = searchEntry;
        } else { // if not a url, then does a search
            document.getElementById('site').src = 'https://bing.com/search?q=' + searchEntry;
        }
        // resets search bar and closes sidebar
        document.getElementById('search').value = '';
        closeBar();

    } else if (searchMethod == "youtube"){ // does youtube search
        document.getElementById('site').src = 'https://www.youtube.com/results?search_query=' + searchEntry
    } else {
        console.log("searchMethod is set to " + searchMethod);
    }
}