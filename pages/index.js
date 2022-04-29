import JsonObjectWidget from "../components/JsonObjectWidget"
import JsonListWidget from "/components/JsonListWidget"

export default function Home() {
  return (
    <div className="sm:w-2/3 w-11/12 m-auto flex flex-col items-center justify-center min-h-screen py-2">
      <JsonListWidget/>
      <JsonObjectWidget/>
    </div>
  )
}
