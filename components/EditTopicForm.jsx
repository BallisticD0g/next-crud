'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function EditTopicForm({ id, title, description }) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application-json",
                },
                body: JSON.stringify({newTitle, newDescription}),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic 😦");
            }
            router.refresh();
            router.push('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center'>
            <input
                onChange={e => setNewTitle(e.target.value)}
                value={newTitle}
                className='border border-slate-500 px-8 py-2 w-3/4'
                type="text"
                placeholder='Topic Title'
            />

            <textarea
                onChange={e => setDescription(e.target.value)}
                value={newDescription}
                className='border border-slate-500 px-8 py-2 w-3/4'
                type="text-box"
                placeholder='Topic Description'
            />

            <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Topic</button>
        </form>
    )
}

export default EditTopicForm