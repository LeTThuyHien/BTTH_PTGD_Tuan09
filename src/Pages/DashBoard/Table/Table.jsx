import React, { memo, useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import EditForm from "../../../components/EditForm/EditForm";
import "./Table.css";

DataTable.use(DT);

function Table({ data }) {
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [tableData, setTableData] = useState(data); // Dùng tableData để cập nhật

    // Cập nhật khi có props mới
    useEffect(() => {
        setTableData(data);
    }, [data]);

    const handleEdit = (record) => {
        setSelectedRecord(record);
        setShowEditForm(true);
    };

    const handleSaveEdit = (updatedRecord) => {
        setTableData((prev) =>
            prev.map((item) => (item.id === updatedRecord.id ? updatedRecord : item))
        );
        setShowEditForm(false);
    };

    const handleCancelEdit = () => {
        setSelectedRecord(null);
        setShowEditForm(false);
    };

    const handleClickEdit = (id) => {
        const record = tableData.find((item) => item.id === id);
        if (record) handleEdit(record);
    };

    const columns = [
        {
            title: `<div style="text-align: center;"><input type="checkbox" /></div>`,
            data: null,
            render: () =>
                `<div style="text-align: center;"><input type="checkbox" /></div>`,
        },
        {
            title: "CUSTOMER NAME",
            data: null,
            render: (data, type, row) =>
                `<div style="display: flex; align-items: center; padding-left: 30px">
                    <img src="${row.img}" alt="Avatar" style="width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;" />
                    <span>${row.name}</span>
                </div>`,
        },
        { title: "COMPANY", data: "company" },
        {
            title: "ORDER VALUE",
            data: "value",
            render: (data) => `${data.toString()}`,
        },
        {
            title: "ORDER DATE",
            data: "date",
            render: (data) => {
                const date = new Date(data);
                return `<span style="color: #a8a6a6;">${date.toLocaleDateString("en-GB")}</span>`;
            },
        },
        {
            title: "STATUS",
            data: "status",
            render: (data) => {
                let statusClass = "";
                if (data === "New") statusClass = "status-new";
                else if (data === "In-progress") statusClass = "status-in-progress";
                else if (data === "Complete") statusClass = "status-completed";

                return `<span class="${statusClass}">${data}</span>`;
            },
        },
        {
            title: "",
            data: null,
            render: (data, type, row) => {
                return `
                    <div class="box-check" data-id="${row.id}" style="cursor: pointer; display: flex; justify-content: center;">
                        <svg fill="#a8a6a6" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.637 306.637">
                            <g>
                                <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"></path>
                                <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095 L265.13,75.602L231.035,41.507z"></path>
                            </g>
                        </svg>
                    </div>`;
            },
        },
    ];

    useEffect(() => {
        const table = document.querySelector("table");

        const handleEditClick = (e) => {
            const target = e.target.closest(".box-check");
            if (target) {
                const id = target.getAttribute("data-id");
                if (id) handleClickEdit(id);
            }
        };

        table?.addEventListener("click", handleEditClick);
        return () => {
            table?.removeEventListener("click", handleEditClick);
        };
    }, [tableData]);

    return (
        <>
            {showEditForm && selectedRecord && (
                <EditForm
                    record={selectedRecord}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                />
            )}

            <DataTable
                data={tableData}
                columns={columns}
                options={{
                    paging: true,
                    searching: false,
                    ordering: false,
                    lengthChange: false,
                    info: true,
                    pageLength: 6,
                    language: {
                        info: "_TOTAL_ results",
                    },
                }}
            />
        </>
    );
}

export default memo(Table);
