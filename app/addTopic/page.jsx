'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title and description are required.");
            return;
        }

        try {
            const res = await fetch(
                'http://check.list.codearena.ca/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description}),
            });
            if (res.ok) {
                router.refresh();
                router.push('/');
            } else {
                throw new Error("Faild to create a Topic");
            }
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center'>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='border border-slate-500 px-8 py-2 w-3/4'
                type="text"
                placeholder='Topic Title'
            />

            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className='border border-slate-500 px-8 py-2 w-3/4'
                type="text-box"
                placeholder='Topic Description'
            />

            <button
                type="submit"
                className='bg-green-600 font-bold text-white py-3 px-6 w-fit'
            >
                Add Topic
            </button>
        </form>
    )
}

export default AddTopic