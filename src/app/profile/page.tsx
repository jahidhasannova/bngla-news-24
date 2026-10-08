"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);

        const formData = new FormData(e.currentTarget);
        const name = (formData.get("name") as string)?.trim();
        const image = (formData.get("image") as string)?.trim();

        const updates: { name?: string; image?: string } = {};
        if (name) updates.name = name;
        if (image) updates.image = image;

        if (Object.keys(updates).length === 0) {
            setMessage({ type: "error", text: "Please fill in at least one field." });
            return;
        }

        setLoading(true);
        const { error } = await authClient.updateUser(updates);
        setLoading(false);

        if (error) {
            setMessage({
                type: "error",
                text: error.message || "Failed to update profile.",
            });
            return;
        }

        setMessage({ type: "success", text: "Profile updated successfully!" });
        setShow(false);
    };

    const handleShowForm = () => {
        setShow((prev) => !prev);
        setMessage(null);
    };

    return (
        <div className="flex flex-col items-center mt-5 px-4">
            <div className="flex flex-col items-center gap-2 text-center">
                <Link href="/profile">
                    <div className="avatar mt-5">
                        <div className="ring-primary ring-offset-base-100 w-30 rounded-full ring-2 ring-offset-2">
                            <img
                                alt="User avatar"
                                src={user?.image || "/default-avatar.png"}
                            />
                        </div>
                    </div>
                </Link>

                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>

            <h1 className="text-2xl font-bold mt-5 text-center">
                Update Your Profile
            </h1>

            <button
                type="button"
                onClick={handleShowForm}
                className="btn w-full max-w-md mt-2 mb-5"
            >
                {show ? "Cancel" : "Edit"}
            </button>

            {message && (
                <p
                    className={`mb-3 text-center ${
                        message.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                    }`}
                >
                    {message.text}
                </p>
            )}

            {show && (
                <form
                    onSubmit={handleUpdateProfile}
                    className="w-full max-w-md"
                >
                    <label className="label">নাম / Name</label>

                    <input
                        name="name"
                        type="text"
                        defaultValue={user?.name ?? ""}
                        className="input w-full mb-3 hover:border-red-700"
                        placeholder="আব্দুল করিম / Abdul Karim"
                    />

                    <label className="label">
                        প্রোফাইল ছবি / Profile Image
                    </label>

                    <input
                        name="image"
                        type="url"
                        defaultValue={user?.image ?? ""}
                        className="input w-full mb-3 hover:border-red-700"
                        placeholder="https://example.com/image.jpg"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn mt-3 w-full"
                    >
                        {loading ? "Updating..." : "Submit"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ProfilePage;