import { useEffect, useState } from "react";
import "./Overview.css";
import { FaCaretUp, FaCartPlus, FaDollarSign, FaUser } from "react-icons/fa";
function Overview() {
    const [overviewData, setOverviewData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://67c7c544c19eb8753e7aac5f.mockapi.io/api/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setOverviewData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="overview">
            <div className="title">
                <h2>Overview</h2>
            </div>
            <div className="list-item">
                {overviewData.map(item => (
                    <div
                        className="item"
                        key={item.id}
                        style={{
                            backgroundColor: item.id === "1"
                                ? "#ffe0e6" // Pink for id === "1"
                                : (item.id === "2" || item.id === "3")
                                    ? "#e0f7fa" // Light blue for id === "2" or id === "3"
                                    : "#fff",   // White for other ids (or default)
                        }}
                    >
                        <div className="overview-header">
                            <h4 className="overview-title">{item.name}</h4>
                            <div className="icon">
                                {item.id === "1" ? (
                                    <FaCartPlus />
                                ) : item.id === "2" ? (
                                    <FaDollarSign />
                                ) : (
                                    <FaUser />
                                )}
                            </div>

                        </div>
                        <div className="overview-value">{item.price}</div>
                        <div className="overview-note">
                        <p className="note-item"><span style={{ color: "rgb(25, 124, 32)" }}><FaCaretUp /> {item.note}</span> period of change</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}


export default Overview;