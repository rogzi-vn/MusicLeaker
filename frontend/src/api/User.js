import JAxios from '../axios.js'

export async function getUser(username, password) {
    return await JAxios({
        url: '/get_user.php',
        method: 'POST',
        data: {
            username,
            password
        }
    })
}

export async function getAvatar(email) {
    return await JAxios({
        url: '/get_user_avatar.php',
        method: 'POST',
        params: {
            email
        }
    });
}