(function(){
    // https://github.com/marcuswestin/store.js

    if (store.get("sidebarStatus") === "closed") {
        document.documentElement.setAttribute("data-sidebar", "closed");
    } else {
        document.documentElement.setAttribute("data-sidebar", "open");
    }

})();
