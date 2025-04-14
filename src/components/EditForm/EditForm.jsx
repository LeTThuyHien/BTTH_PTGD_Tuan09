import React, { useState } from "react";
import "./EditForm.css"; // File này để bạn dùng chung với form thêm nếu muốn

function EditForm({ record, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        id: record.id,
        img: record.img || "",
        name: record.name || "",
        company: record.company || "",
        value: record.value || "",
        date: record.date || "",
        status: record.status || "In-progress",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? URL.createObjectURL(e.target.files[0]) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>EDIT USER</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Avatar</label>
                        <input type="file" name="img" onChange={handleChange} />
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
