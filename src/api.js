export async function getShoes() {
    const url = "/api/shoes"
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.shoes)
}