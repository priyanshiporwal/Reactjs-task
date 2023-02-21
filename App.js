import React, { useEffect, useState } from 'react'
const App = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const api = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await api.json();
        if (res.length > 0) {
            setData(res);
        }
        // console.log(res);


    }
    useEffect(() => {

        fetchData();

    }, [])
    console.log(data);
    return (
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((item) => {
                            return (
                                <tr>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default App;
