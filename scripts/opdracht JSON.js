const setup = () => {

    let student1=[
        {
            voornaam: 'Brent',
            familienaam: 'Van Rysselberghe',
            geboorteDatum: new Date('2001-03-01'),
            email: 'vanrysselberghebrent@gmail.com',
        }
        ];

    let tekst = JSON.stringify(student1);
    console.log(tekst);

    let student = JSON.parse(tekst);
    console.log(student);

}
window.addEventListener("load", setup);