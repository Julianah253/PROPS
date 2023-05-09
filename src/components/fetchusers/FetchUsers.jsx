import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchUsers = () => {

    const[users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>setUsers(response.data))
        .catch(error=>console.log(error))
    })
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //    //.then(response=> response.json())
    //     .then(response=>setUsers(response.data))
    //     .catch(error=>console.log(error))
    // }, [])
  return (
    <div>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>PHONE</th>
                <th>WEBSITE</th>
                <th>COMPANY</th>
                {/* <th>GEO</th> */}
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,i)=>(
                    <tr key={i}>
                        <td> {user.id} </td>
                        <td> {user.name} </td>
                        <td> {user.username} </td>
                        <td> {user.email} </td>
                        <td> {user.address.suite} , {user.address.street}, {user.address.city}, {user.address.zipcode}, {user.address.geo.lat}, {user.address.geo.lng}</td>
                        <td> {user.phone}</td>
                        <td> {user.website} </td>
                        <td> {user.company.name}, {user.company.catchPhrase} </td>
                        {/* <td>  </td> */}
                    </tr>
                ))
            }
        </tbody>
    </div>
  )
}

export default FetchUsers