import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export default function ResultTable() {
  const [data, setData] = useState([]);
  const [effectRunCount, setEffectRunCount] = useState(0);
  useEffect(() => {
    if (effectRunCount < 5) {
      console.log("mount");
      getServerData("http://localhost:5000/api/result", (res) => {
        setData(res);
      });
      // Increment the effect run counter
      setEffectRunCount(effectRunCount + 1);
    }
  }, [effectRunCount]);

  return (
    <div>
      <table>
        <thead className='table-header'>
          <tr className='table-row'>
            <td>Name</td>
            <td>Attemps</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan='4' className='text-light'>
                No Data Found
              </td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr className='table-body' key={i}>
                <td>{v?.username || ""}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achived || ""}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
