import { useEffect } from "react";

import [useEffect,useState] from "react";

function useApi() {
  const [users, setUsers] = useEffect([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data => setUsers(data))
  },[])
  return ();
}

export default useApi;
