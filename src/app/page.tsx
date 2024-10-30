export default async function Home() {
  let response = await fetch("http://localhost:8000")
  console.log(response)
  let data = await response.json()
  console.log(data)
  return (
    <div>{JSON.stringify(data)}</div>
  )
}