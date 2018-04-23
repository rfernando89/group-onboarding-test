// Detect what mobile operating system the user is using
function checkMobileOS() {
    var mobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(mobileUserAgent) && !window.MSStream) {
        return "iOS";
    }

    if (/android/i.test(mobileUserAgent)) {
        return "Android";
    }

    return "unknown"
}

// Create a link to redirect the user into their texting app 
function createSmsLink(message_text) {
    if (checkMobileOS() === 'iOS') {
        var href = "sms:&body=";
    }

    if (checkMobileOS() === 'Android') {
        var href = "sms:?body=";
    }

    smsLink = href + encodeURI(message_text);

    return smsLink;
}

var organizationName = localStorage.getItem('Organization');
var communitySlug = localStorage.getItem('Community Slug');
var message_text = `Hey! I created a ‘${organizationName}‘ board for us. Please join it before our next group with this link: https://www2.cotribute.co/${communitySlug}`;

var href = createSmsLink(message_text);

document.getElementById('link').setAttribute('href', href); 