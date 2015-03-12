(function(){
    // https://github.com/marcuswestin/store.js

    if (!store.get("sidebarOpen")) {
        document.documentElement.setAttribute("data-sidebar", "closed");
    } else {
        document.documentElement.setAttribute("data-sidebar", "open");
    }

    function checkFont(fontName) {
        if (!store.get(fontName)) {
            new FontFaceObserver(fontName, {
              weight: 400
            }).check().then( function(){
                document.documentElement.classList.add(fontName);
                store.set(fontName, true);
            });
        } else {
            document.documentElement.classList.add(fontName);
        }
    }
    checkFont('LeagueGothicRegular');
    checkFont('OstrichSansMedium');
})();
