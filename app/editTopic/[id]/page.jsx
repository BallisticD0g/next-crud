import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
  // try {
  //     const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
  //       cache: 'no-store',
  //     });
  //     if (!res.ok) {
  //       throw new Error("Faild to fetch topic 🤯");
  //     }

  //     return res.json();
  // } catch (err) {
  //   console.log(err);
  // }
  return{}
}

async function EditTopic({params}) {
  const { id } = params;
  const {topic} = await getTopicById(id);
  const {title, description} = topic;
  
  return (
    <EditTopicForm id={id} title={title} description={description} />
  )
}

export default EditTopic