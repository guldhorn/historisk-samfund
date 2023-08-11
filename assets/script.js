// update when api in on a Hetzner server
const api_url = "http://localhost:8001/historisk-samfund/articles.json";
const static_url = "http://localhost:8001/static/articles";
const searchform = document.querySelector("#searchform");
const valid_query_params = ["_shape", "_search", "_next", "_sort", "year"];

if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", processPage);
} else {
    // `DOMContentLoaded` has already fired
    processPage();
}

// localStorage is used to store pagination-infom as this info
// is not present in datasettes json-api
function updateLocalstorage(totalHits, params) {
    // if no hits, no need for work
    if (!totalHits) return;

    // if the "new" next is the same localStorage's "next", OR set to zero, it is a reload, so no updates
    if ((params.get("_next") || "0") == (localStorage.getItem("next"))) return;

    // if no localStorage is set, initialize data (checking for "start" is enough)
    if (!localStorage.getItem("start")) {
        localStorage.setItem("total", totalHits);
        localStorage.setItem("start", "1");
        localStorage.setItem("end", Math.min(totalHits, 20));
        localStorage.setItem("next", "0");
    } else {
        // if query-params' "next" is greater than localStorage's ditto
        // the user clicked "Næste side", else "Forrige side" (window.hostiry.back()) was clicked
        if (localStorage.getItem("next") < params.get("_next")) {
            localStorage.setItem("start", parseInt(localStorage.getItem("start")) + 20);
            localStorage.setItem("end", Math.min(totalHits, parseInt(localStorage.getItem("end")) + 20));
        } else {
            // On last page, sometimes the diff between start and end is not 20
            let diff = parseInt(localStorage.getItem("end")) - parseInt(localStorage.getItem("start"));
            localStorage.setItem("start", parseInt(localStorage.getItem("start")) - 20);
            localStorage.setItem("end", parseInt(localStorage.getItem("end")) - diff - 1);
        }
        localStorage.setItem("next", params.get("_next") || "0")
    }
}

// Generér {start} til {end} af {total}
function generateResultCounters() {
    return `${localStorage.getItem("start")} til ${localStorage.getItem("end")} af ${localStorage.getItem("total")}`;
}

// Generér pagination-links
function generatePagination(result) {
    let prev = parseInt(localStorage.getItem("start")) > 1;
    let next = result.next_url?.split('?')[1];
    // if no next_url and "start" on first page, return
    if (!(prev || next)) return '';

    return `<div class="results-pagination">
        <a id="prev-link" ${prev == true ? "class='pagination-link' onclick='window.history.back()'" : "class='pagination-link-inactive'"} title="Gå til forrige side med søgeresultater">Forrige</a>
        <a id="next-link" ${Boolean(next) == true ? "class='pagination-link' href='/artikler?" + next + "'" : "class='pagination-link-inactive'"} title="Gå til næste side med søgeresultater">Næste</a>
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
    // if not on the searchpage, clear localStorage and return
    // if no query-params, no need to populate form or fetch results
    if (document.location.pathname !== "/artikler" || !document.location.search) {
        localStorage.clear();
        return
    }
    // remove all invalid queryparams before querying the api
    let params = new URLSearchParams(document.location.search);
    for (let k of params.keys()) {
        if (!valid_query_params.includes(k)) params.delete(k);
    }
    // if "_next" in url, but localStorage not set, it must be a new session,
    // so we have to remove the _next-param before iterating through the results-pages
    // This is required because there is no "start" and "size" OR "offset" info from
    // the API
    if (params.get("_next") && !localStorage.getItem("start")) {
        params.delete("_next");
        console.log(params);
        window.location.assign(window.location.origin + window.location.pathname + "?" + params.toString());
        return false;
    }
    // if there are any valid search-params left, make a search
    if (params.size) {
        // populate form with year and _search, if present
        populateSearchform(params);
        // query api
        fetchAndDisplayResults(params);
    }
}

// Add eventlistener til søgeformularen
if (searchform) {
    searchform.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.clear(); // clear before fetching new results
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
        // console.log(result);
        // update localStorage, if any results
        updateLocalstorage(result.filtered_table_rows_count, params);
        displayResults(result);
    }).catch((err) => {
        alert(`Something went wrong: ${err}`);
    });
}


// Construct and insert results-div in searchpage-html
function displayResults(result) {
    // "params" is URLQueryParams (from FormData or url-querystring)
    // let totalHits = result.filtered_table_rows_count;
    // updateLocalstorage(totalHits, params);
    let html = "";
    if (!result.rows.length) {
        html += `<p>Ingen resultater matchede din søgning!</p>`;
    } else {
        html += `<div class="results-header">
                    <div class="results-counter">${generateResultCounters()} hits</div>
                    ${generatePagination(result)}
                </div>`;

        result.rows.forEach((res) => {
            html += `<li class="result-item">
                <h4 class="result-item-title">${res.title || "Uden titel"}</h4>
                <p class="result-item-text">${res.data?.slice(0,280) + "..." || "Uden tekst"}</p>
                <ul class="result-item-data">
                    <li><span class="key">Forfatter</span><span class="value">${res.author}<span></span></li>
                    <li><span class="key">Årgang</span><span class="value">${res.year}, ${res.pages}</span></li>
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