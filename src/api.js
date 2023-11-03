export async function getShoes(gender) {
    const url = gender ? `/api/${gender}` : "/api/shoes"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch data.",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.shoes
}

export async function getShoe(id) {
    const url = `/api/shoes/${id}`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch data.",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.shoes
}