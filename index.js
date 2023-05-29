const apiUrl = "https://type.fit/api/quotes";
const card = document.getElementById("card");


const refreshBtn = document.getElementById("refresh");

refreshBtn.addEventListener("click", ()=>{
    document.location.reload();
});


async function displayQuote() {
   fetch(apiUrl)
   .then((response) => response.json())
   .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);

        const selectedQuote = data[randomIndex];

        const quoteText = selectedQuote.text;
        const authorName = selectedQuote.author;

        console.log(quoteText);

            content.innerHTML = `
        <div class="card" id="card">

            <div class="quote--wrapper">
                <div>
                    <i class="fa-solid fa-quote-left"></i>
                </div>
                
                <div class="quote" id="quote">
                    ${quoteText}
                </div>

                <span class="line"></span>

                <div class="name" id="author">
                    ${authorName}
                </div>
            </div>
        </div> 
        `;
   })
}

displayQuote();


