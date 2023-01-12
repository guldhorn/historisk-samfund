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
function displayResults(results) {
    let lis = "";
    if (!results.rows) {
        lis+= `<p>No results!</p>`;
    } else {
        results.rows.forEach((res) => {
            lis += `<li class="result-item">
            <span>${res.title}</span>
            </li>`;
        });
        if (results.next_url) {
            lis += `<p><a href='${results.next_url}'>Flere resultater</a></p>`;
        }
    }
    // Setting innerHTML as tab variable
    document.querySelector(".results-list").innerHTML = lis;

}