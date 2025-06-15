document.addEventListener('DOMContentLoaded', async function () {
async function getData() {
        const response = await fetch('https://api.api-ninjas.com/v1/passwordgenerator?length=16',
        {
            method:'GET',
            headers:{'X-Api-Key': 'BWWW60cexQO3iXDuo1I5Jw==tY5MtYsL8OkuoEmC',
            'Content-Type': 'application/json'}

        }
    )
    
    const data = await response.json()
    document.getElementById('pass').innerHTML = data.random_password
}

getData()

document.getElementById('button').addEventListener('click', function(){
    getData()
})
})
