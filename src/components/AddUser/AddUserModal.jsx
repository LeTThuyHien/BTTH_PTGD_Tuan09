import React, { useState } from "react";
import "./AddUserModal.css"; // CSS bạn có thể dùng chung với EditForm nếu muốn

const AddUserModal = ({ onClose, onUserAdded }) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        value: "",
        date: "",
        status: "In-progress",
        img: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            payload.append(key, value);
        });

        try {
            const res = await fetch("/api/users", {
                method: "POST",
                body: payload,
            });

            if (!res.ok) throw new Error("Failed to add user");

            const result = await res.json();
            onUserAdded(result); // thông báo ra ngoài để cập nhật lại bảng
            onClose(); // đóng modal
        } catch (error) {
            alert("Error adding user: " + error.message);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>ADD USER</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Avatar</label>
                        <input type="file" name="img" onChange={handleChange} accept="image/*" />
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
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUserModal;
