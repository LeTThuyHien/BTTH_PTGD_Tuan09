import React, { useState } from "react";
import CloudinaryUpload from "../CloudinaryUpload/CloudinaryUpload";

const AddUserModal = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        value: "",
        date: "",
        status: "In-progress",
        img: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Gọi onSave với dữ liệu đầy đủ
        onSave(formData);
        onCancel();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>ADD USER</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Avatar</label>
                        {/* Gọi CloudinaryUpload component */}
                        <CloudinaryUpload
                            onUpload={(url) => setFormData((prev) => ({ ...prev, img: url }))}
                        />
                    </div>
                    <div className="form-group">
                        <label>Customer Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                            {["In-progress", "New", "Complete"].map((s) => (
                                <label key={s}>
                                    <input
                                        type="radio"
                                        name="status"
                                        value={s}
                                        checked={formData.status === s}
                                        onChange={handleChange}
                                    />
                                    {s}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="save-btn">Add User</button>
                        <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUserModal;
