export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '77ecf7d3f6mshaa434cc064101fcp114f31jsn4c0f2f40a2d6',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers: headers
    })

    const result = await response.json();

    return result;
    
}