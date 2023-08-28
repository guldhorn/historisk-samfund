// update when api in on a Hetzner server
const api_url = "http://localhost:8000/search";
const static_url = "http://localhost:8000/static";

const searchform = document.querySelector("#searchform");
const valid_query_params = ["q", "year", "size", "next", "sort", "offset", "previous", "direction"];

if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", processPage);
} else {
    // `DOMContentLoaded` has already fired
    processPage();
}

// Generér {start} til {end} af {total}
function generateResultCounters(result) {
    let end = Math.min(result.offset + result.size, result.total);
    return `${result.offset + 1} til ${end} af ${result.total}`;
}

// Generér pagination-links
function generatePagination(result) {
    // if no next_url and "start" on first page, return
    if (!(result.previous || result.next)) return '';

    return `<div class="results-pagination">
        <a id="prev-link" ${result.previous ? "class='pagination-link 'href='/new-artikler?" + result.previous + "'" : "class='pagination-link-inactive'"} title="Gå til forrige side med søgeresultater">Forrige side</a>
        <a id="next-link" ${result.next ? "class='pagination-link' href='/new-artikler?" + result.next + "'" : "class='pagination-link-inactive'"} title="Gå til næste side med søgeresultater">Næste side</a>
        </div>`;
}

// Updatér søgeformens felt-værdier, hvis url'en har en query-string
function populateSearchform(params) {
    for (let [k, v] of params) {
        let el = searchform.querySelector(`[name="${k}"]`);
        if (el) el.value = v
    }
}

// On 'DOMContentLoaded', tjek om du er på søgesiden, og om der er søge-parametre i url'en
function processPage() {
    // if not on the searchpage or no query_params, just return
    if (document.location.pathname !== "/new-artikler" || !document.location.search) {
        return
    }

    // remove all invalid queryparams before querying the api
    let params = new URLSearchParams(document.location.search);
    for (let k of params.keys()) {
        if (!valid_query_params.includes(k)) params.delete(k);
    }

    // if there are no valid search-params left, just show the searchpage
    if (!params.size) {
        return
    }

    // populate form with year and search, if present
    populateSearchform(params);
    // query api
    fetchAndDisplayResults(params);
}


// Add eventlistener til søgeformularen
if (searchform) {
    searchform.addEventListener('submit', (e) => {
        e.preventDefault();
        // localStorage.clear(); // clear before fetching new results
        let formData = new FormData(searchform);
        for (let [name, value] of Array.from(formData.entries())) {
            if (value.toString().trim() === '') formData.delete(name);
        }
        let params = new URLSearchParams(formData);
        // update the url with the queryParams, so that it is bookmarkable
        // we have to do it before fetchAndDisplay, as this function is also called from
        // processPage when the queryparams are already in place, so no need to push state
        window.history.pushState({}, "", `?${params}`);
        fetchAndDisplayResults(params);
    });
}

// Fetch and display any searchresults. The function is called either when the searchform is
// submitted, or when a page with search-relevant query-params is loaded.
function fetchAndDisplayResults(params) {
    // "params" is URLQueryParams (from FormData or url-querystring)
    fetch(`${api_url}?${params.toString()}`)
    .then((response) => response.json())
    .then((result) => {
        displayResults(result);
    }).catch((err) => {
        alert(`Something went wrong: ${err}`);
    });
}


// Construct and insert results-div in searchpage-html
function displayResults(result) {
    // "params" is URLQueryParams (from FormData or url-querystring)
    let html = "";
    if (!result.rows.length) {
        html += `<p>Ingen resultater matchede din søgning!</p>`;
    } else {
        html += `<div class="results-header">
                    <div class="results-counter">${generateResultCounters(result)} hits</div>
                    ${generatePagination(result)}
                </div>`;

        result.rows.forEach((res) => {
            html += `<li class="result-item">
                <h4 class="result-item-title">${res.title || "Uden titel"}</h4>
                <p class="result-item-text">${res.snippet || "Uden tekst"}</p>
                <ul class="result-item-data">
                    <li><span class="key">Forfatter</span><span class="value">${res.author}<span></span></li>
                    <li><span class="key">Årgang</span><span class="value">${res.year}, side ${res.pages}</span></li>
                    <li><span class="key">Tags</span><span class="value">${res.tags}</span></li>
                    <li><span class="key">Sted</span><span class="value">${res.place}</span></li>
                </ul>
                <div class="result-item-download"><a href="${static_url}/${res.filename}">Hent hele artiklen som pdf</a></div>
            </li>`;
        });

        html += `<div class="results-footer">${generatePagination(result)}</div>`;
    }

    // Setting innerHTML as tab variable
    document.querySelector(".results-list").innerHTML = html;
}