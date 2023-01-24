async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/jose-nascimento1/JavaScript-Developer-DIO/tree/master/Portfólio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}