var searchMethod = "bing";

/*document.getElementById('searchbox').searchboxID.onchange = function() {
    searchMethod = this.value;
};*/

function searchFunction(value){
    searchMethod = value;
}

function openBar() {
    document.getElementById('side').style.width = '400px';
    document.getElementById('open').style.opacity = '0';
}

function closeBar() {
    document.getElementById('side').style.width = '0';
    document.getElementById('open').style.opacity = '.75';
}

function goHome(){
    document.getElementById('site').src = "https://bing.com";
}

function goTo(){
    var searchEntry = document.getElementById('search').value;
    // if searchbox is set to bing check what type of entry was entered
    if (searchMethod == "bing"){
        // if user entered url with https or http
        if (searchEntry.indexOf('.') > 0 && searchEntry.indexOf('. ' == -1)){
            document.getElementById('site').src = searchEntry;
        } else {
            document.getElementById('site').src = 'https://bing.com/search?q=' + searchEntry;
        }
        document.getElementById('search').value = '';
        closeBar();

    } else if (searchMethod == "youtube"){
        document.getElementById('site').src = 'https://www.youtube.com/results?search_query=' + searchEntry
    } else {
        console.log(searchMethod);
    }
}