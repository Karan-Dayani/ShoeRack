export async function getShoes(gender) {
    const url = gender ? `/api/${gender}` : "/api/shoes"
    const res = await fetch(url)
    const data = await res.json()
    return data.shoes
}