const setup = () => {

    let vandaag = new Date();
    console.log("het is vandaag " + vandaag);
    let verjaardag = new Date(2001, 4, 1, 11, 49, 0);
    console.log("ik ben geboren op " + verjaardag);

    let verschil = (vandaag - verjaardag.getTime()) / (1000 * 3600 * 24);
    console.log("ik ben " + verschil + " dagen oud.");

}
window.addEventListener("load", setup);