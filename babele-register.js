Hooks.on('init', () => {
    if (typeof Babele !== 'undefined') {
        console.log("Trad Beastheart");
        Babele.get().register({
            module: 'mcdm-beastheart-fr',
            lang: 'fr',
            dir: 'compendium_fr'
        });
    }
});
