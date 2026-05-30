import {useState,useEffect, use} from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(result => {
            setData(result)
            setLoading(false)
        })
},[url])

}   

export default useFetch