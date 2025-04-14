import { useState } from "react";

const CloudinaryUpload = ({ onUpload }) => {
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setPreview(URL.createObjectURL(file)); // Preview before upload
        setLoading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'uploadImg');
        formData.append('folder', 'Tuan08');

        try {
            const res = await fetch(
                'https://api.cloudinary.com/v1_1/dlbg2caig/image/upload',
                { method: 'POST', body: formData }
            );
            const data = await res.json();
            if (data.secure_url) {
                onUpload(data.secure_url); // Return URL after upload
            } else {
                throw new Error("Failed to upload image.");
            }
        } catch (error) {
            setError(error.message);
            console.error('Upload Cloudinary error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleUpload} />
            {loading && <p>Uploading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {preview && <img src={preview} alt="Preview" width={100} style={{ marginTop: 10 }} />}
        </div>
    );
};
export default CloudinaryUpload;

