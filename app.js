const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke()

//async
async function generateJoke() {
    const config = {
        headers: { /**headers içindeki accept i aldık cevap olarakda application/json u döndürmesini istedik */
            Accept: "application/json"
        },
    }



    const res = await fetch("https://icanhazdadjoke.com", config) /*await sıralı gerçekleşmesini sağlar*/
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}
// function generateJoke() {
//     const config={
//         headers: { /**headers içindeki accept i aldık cevap olarakda application/json u döndürmesini istedik */
//             Accept:"application/json"
//         },
//     }
//     fetch("https://icanhazdadjoke.com",config)/** fetch ile api nerden yakalayacağımızı gösteriyor,,https://icanhazdadjoke.com adresinden sonra config getir diyoruz  */
//         .then((res) => res.json())  /**cevapları getirsin */
//         .then((data) => {
//         // console.log(data);
   
//    jokeEl.innerHTML=data.joke/**consol da gördüğümüz şaka kısmını html kısmına yazdır diyoruz */
//         }) 


// }
