import React, { useEffect, useState } from "react";
import axios from "axios";

//Side effects

//Necessary skills 
/*
Events: Add /Remove event listener
Observer pattern: Subscribe / unsubcribe
Closure
Timers: setInterval, setTimeout, clearInterval, clearTimeout
useState
Mounted / Unmounted
===
Call API
 */

/*
1. Update DOM
    - title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubcribe
    - Clear timers
*/

//1. useEffect(callback)
//- Call callback when component re-render
//- Call callback when component add element into DOM
//2. useEffect(callback, [])
//- Call callback 1 time after component mounted
//3. useEffect(callback, [deps])
// Callback will is recalled when des change


//--------
// 1. callback always is called after when component mounted
// 2. Cleanup function always is called before component unmounted
// 3. Cleanup function always is called before callback is called (subtract(-) time mounted)


const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

const ExpUseEffect = () => {

    const [title, setTitle] = useState('')
    const [rowPosts, setRowPosts] = useState([])
    const [type, setType] = useState('')
    const [showGoToTop, setShowGoToTop] = useState(false)
    //------------------------------------------------------------------

    useEffect(() => {
        document.title = title
        //console.log('>>> Mounted')
    }, [title])
    //------------------------------------------------------------------

    useEffect(() => {
        //fetch data
        const fetchAxios = async () => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/${type}`);
                res?.data ?
                    setRowPosts(res.data)
                    :
                    setRowPosts([])
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };
        fetchAxios();
    }, [type]);
    //------------------------------------------------------------------

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 300)
        }

        window.addEventListener('scroll', handleScroll)
        console.log('>>> addEventListener')
        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('>>> removeEventListener')
        }

    }, [])

    return (
        <>
            <div>2. Fetch data</div>
            <div>
                {tabs?.map(tab => (
                    <button
                        key={tab}
                        style={type === tab ? {
                            color: '#fff',
                            backgroundColor: '#333',
                        } : {}}
                        onClick={() => setType(tab)
                        }
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                {/* {console.log('>>> Render')} */}
            </div>
            <div>
                <ul>
                    {Array.isArray(rowPosts) ? rowPosts.map((post) => (
                        <li key={post.id}> {post.title || post.name} </li>
                    )) : null}
                </ul>
            </div>
            <div>
                {showGoToTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20,
                        }}
                    >
                        Go To Top
                    </button>
                )}
            </div>

        </>
    )
}
export default ExpUseEffect; 