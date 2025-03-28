function redirectToChat(userType) {
    if (userType === 'mothers') {
        window.location.href = "chatbot-mothers.html";
    } else if (userType === 'guardians') {
        window.location.href = "chatbot-guardians.html";
    }
}
