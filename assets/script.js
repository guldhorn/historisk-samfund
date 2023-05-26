// api url
const api_url =
    "http://localhost:8001/historisk-samfund/articles.json?_sort=year&_shape=objects&_size=1000";
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
        displayResults(result, params);
    }).catch((err) => {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

// Function to define innerHTML for HTML table
function displayResults(result, params) {
    let lis = "";
    if (!result.rows) {
        lis += `<p>No results!</p>`;
    } else {
        lis += `<div class="results-header">
            <span>${result.filtered_table_rows_count} resultat(er) fundet</span>
        </div>`;
        result.rows.forEach((res) => {
            lis += `<li class="result-item">
                <h4 class="result-item-title">${res.title}</h4>
                <p class="result-item-text">${res.data.slice(0,280)}...</p>
                <ul class="result-item-data">
                    <li><span class="key">Forfatter</span><span class="value">${res.author}<span></span></li>
                    <li><span class="key">Årgang</span><span class="value">${res.year}, ${res.pages}</span></li>
                    <li><span class="key">Tags</span><span class="value">${res.tags}</span></li>
                    <li><span class="key">Sted</span><span class="value">${res.place}</span></li>
                </ul>
                <div class="result-item-download"><a href="http://localhost:8001/static/articles/${res.filename}">Hent hele artiklen som pdf</a></div>
            </li>`;
        });
        // Pagination not implemented yet
        // if (result.next_url) {
        //     lis += `<p><a href='${result.next_url}'>Flere resultater</a></p>`;
        // }
    }
    // Setting innerHTML as tab variable
    document.querySelector(".results-list").innerHTML = lis;

}