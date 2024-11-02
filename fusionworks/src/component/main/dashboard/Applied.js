import React from 'react'

const Applied = () => {

  const tableData = [
    { id : 1 , title : "title 1 erihwerfewiroiewrtgoiewrtgoi ewrtiewrtiewrtigwiretg wiertgiwregtwiregtirewt goiretgoiwtgwiergtoirewgtirewg" , date  : "20/3/2334" , status : "pending" , remove : ""}
    , { id : 2 , title : "title 2" , date  : "20/3/2334" , status : "pending" , remove : ""}
    , { id : 3 , title : "title 3" , date  : "20/3/2334" , status : "pending" , remove : ""}
    , { id : 4 , title : "title 4" , date  : "20/3/2334" , status : "pending" , remove : ""}
    , { id : 5 , title : "title 5" , date  : "20/3/2334" , status : "pending" , remove : ""}
    , { id : 6 , title : "title 6" , date  : "20/3/2334" , status : "pending" , remove : ""}
    , { id : 7 , title : "title 7" , date  : "20/3/2334" , status : "pending" , remove : ""}
  ]

  return (
    <div>
      <table className="table-fixed w-full">

        <thead>
          <tr className="text-sky-200">
            <th>Sno</th>
            <th>Title</th>
            <th>Applied Date</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {
            tableData.map((data , index) => (
              <tr key = {index}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.date}</td>
                <td>{data.status}</td>
                <td>{data.remove}</td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </div>
  )
}

export default Applied
