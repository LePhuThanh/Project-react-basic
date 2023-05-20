import React, { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'What is ReactJS ?'
    },
    {
        id: 2,
        name: 'What is MPA & SPA ?'
    },
    {
        id: 3,
        name: 'What is Arrow function ?'
    },
]

const FakeChatApp = () => {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = (detail) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }

    }, [lessonId])


    return (
        <div>
            <h3 style={{ color: '#71bdf0' }}>5. Fake Comment Two Thread </h3>
            <ul>
                {lessons?.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'yellow'
                                :
                                '#fff'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FakeChatApp;