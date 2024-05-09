import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";
export default function ResultTable() {
  const [data, setData] = useState([]);
  const [effectRunCount, setEffectRunCount] = useState(0);

  useEffect(() => {
    if (effectRunCount < 5) {
      getServerData(" https://quiz-app-71pc.onrender.com/api/result", (res) => {
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

            <td>Time</td>
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
            data
              .sort((a, b) => {
                if (a.points === b.points) {
                  return a.minutes + a.seconds - (b.minutes + b.seconds); // For the same score, lower time ranks higher
                }
                return b.points - a.points; // Otherwise, higher score ranks higher
              })
              .map((v, i) => (
                <tr className='table-body' key={i}>
                  <td>{v?.username || ""}</td>
                  <td>{v?.attempts || 0}</td>
                  <td>{v?.points || 0}</td>
                  <td>
                    {v?.minutes || 0}m {v?.seconds || 0}s
                  </td>
                  <td>{v?.achived || ""}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
}
