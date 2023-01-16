// api url
const api_url =
    "http://localhost:8001/historisk-samfund/articles.json?_sort=year&_shape=objects";
const sform = document.querySelector("#searchform");

// sform.onsubmit = async (e) => {
if (sform) {
    sform.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(sform);
        for (let [name, value] of Array.from(formData.entries())) {
            if (value === '') formData.delete(name);
        }
        const params = new URLSearchParams(formData);
        fetchResults(params)
    });
}

async function fetchResults(params) {
    console.log(params.toString());
    fetch(api_url + '&' + params)
    .then((response) => response.json())
    .then((result) => {
        // This is the JSON from our response
        console.log(result);
        // return result;
        displayResults(result);
    }).catch((err) => {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

// Function to define innerHTML for HTML table
function displayResults(result) {
    let lis = "";
    if (!result.rows) {
        lis += `<p>No results!</p>`;
    } else {
        lis += `<p>${result.filtered_table_rows_count} resultat(er)</p>`;
        result.rows.forEach((res) => {
            lis += `<li class="result-item"><dl>
                <dt>Forfatter</dt><dd>${res.author}</dd>
                <dt>Titel</dt><dd>${res.title}</dd>
                <dt>Årstal</dt><dd>${res.year}</dd>
                <dt>Stedsangivelse</dt><dd>${res.place}</dd>
                <dt>Tags</dt><dd>${res.tags}</dd>
                <dt>Brødtekst</dt><dd>${res.data.slice(0,300)}...</dd>
            </dl></li>`;
        });
        // Pagination not implemented yet
        // if (result.next_url) {
        //     lis += `<p><a href='${result.next_url}'>Flere resultater</a></p>`;
        // }
    }
    // Setting innerHTML as tab variable
    document.querySelector(".results-list").innerHTML = lis;

}