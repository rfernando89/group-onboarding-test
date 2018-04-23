function getQueryString(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

var organization = getQueryString('organization');
var communitySlug = getQueryString('communityslug');

if (organization && communitySlug) {
    localStorage.setItem('Organization', organization);
    localStorage.setItem('Community Slug', communitySlug);
}