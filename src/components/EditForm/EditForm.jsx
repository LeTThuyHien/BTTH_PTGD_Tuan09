import React, { useState, useEffect } from "react";
import "./EditForm.css"; // Dùng lại form thêm cũng được

function EditForm({ record, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        id: "",
        img: "",
        name: "",
        company: "",
        value: "",
        date: "",
        status: "In-progress",
    });

    // Cập nhật lại form mỗi khi record thay đổi
    useEffect(() => {
        if (record) {
            setFormData({
                id: record.id,
                img: record.img || "",
                name: record.name || "",
                company: record.company || "",
                value: record.value || "",
                date: record.date || "",
                status: record.status || "In-progress",
            });
        }
    }, [record]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? URL.createObjectURL(files[0]) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);     // Gửi dữ liệu đã sửa về
        onCancel();           // Đóng form sau khi lưu
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Avatar</label>
                        <input type="file" name="img" onChange={handleChange} />
                        {formData.img && (
                            <img
                                src={formData.img}
                                alt="Preview"
                                style={{ width: "100px", marginTop: "10px" }}
                            />
                        )}
                    </div>

                    <div className="form-group">
                        <label>Customer Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Customer Name..."
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter Company Name..."
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Order Value ($)</label>
                        <input
                            type="number"
                            name="value"
                            value={formData.value}
                            onChange={handleChange}
                            placeholder="Enter Order Value..."
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Order Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <div className="radio-group">
                            {["In-progress", "New", "Complete"].map((status) => (
                                <label key={status}>
                                    <input
                                        type="radio"
                                        name="status"
                                        value={status}
                                        checked={formData.status === status}
                                        onChange={handleChange}
                                    />
                                    {status}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="save-btn">Save</button>
                        <button type="button" className="cancel-btn" onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditForm;
