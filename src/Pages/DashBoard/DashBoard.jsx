import { useEffect, useState } from 'react';
import { FaFileLines, FaUserPlus } from 'react-icons/fa6';
import { FaFileExport, FaFileImport } from 'react-icons/fa';
import DataTable from 'datatables.net-react';
import 'datatables.net-select-dt';

import './DashBoard.css';
import Table from './Table/Table';
import EditForm from '../../components/EditForm/EditForm'; // Đảm bảo đúng đường dẫn
import AddUserModal from '../../components/AddUser/AddUserModal';

function DashBoard() {
    const [table, setTable] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false); // Hiện form thêm
    const [newId, setNewId] = useState(1000); // Tạm tạo ID giả

    useEffect(() => {
        fetch("https://67c7c544c19eb8753e7aac5f.mockapi.io/api/gc")
            .then((res) => res.json())
            .then((table) => {
                const statuses = ["New", 'In-progress', 'Complete'];
                table.forEach((item) => {
                    item.status = statuses[Math.floor(Math.random() * statuses.length)];
                });
                setTable(table);
                setNewId(table.length + 1); // Tạo ID tiếp theo
            });
    }, []);

    const handleAddUser = () => {
        setShowAddForm(true);
    };

    const handleSaveNewUser = (newUser) => {
        newUser.id = newId;
        setTable((prev) => [...prev, newUser]);
        setNewId((prevId) => prevId + 1);
        setShowAddForm(false);
    };

    const handleCancelAdd = () => {
        setShowAddForm(false);
    };

    return (
        <div className="darhboard">
            <div className="title-darhboard">
                <div>
                    <FaFileLines />
                    <h3>Detailed report</h3>
                </div>
                <div>
                    <button onClick={handleAddUser}>+ &nbsp;Add User</button>
                    <button><FaFileImport /> &nbsp;Import</button>
                    <button><FaFileExport />&nbsp;Export</button>
                </div>
            </div>

            {showAddForm && (
                <AddUserModal
                    record={{ name: '', company: '', value: '', date: '', status: '', img: '' }}
                    onSave={handleSaveNewUser}
                    onCancel={handleCancelAdd}
                />
            )}

            <Table data={table} setData={setTable} />
        </div>
    );
}

export default DashBoard;
