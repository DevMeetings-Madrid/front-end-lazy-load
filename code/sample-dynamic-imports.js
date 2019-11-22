if (iWantToLoadMyModule) {
    import('myModule').then(myModule => {
        // do something with myModule.default
    });
}