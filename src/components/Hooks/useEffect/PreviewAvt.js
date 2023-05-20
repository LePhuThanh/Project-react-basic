import React, { useEffect, useState } from "react";


const PreviewAvt = () => {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        //Cleanup
        return () => {
            //Important // Senior
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        //console.log(URL.createObjectURL(file));
        file.preview = URL.createObjectURL(file) //file is object || add property preview

        setAvatar(file)
        //handle the key: choose 1 picture 2 times 
        e.target.value = null // Delete value the name of picture 
        //console.log(123)
    }
    return (
        <div>
            <h3 style={{ color: '#71bdf0' }}>4. Preview Avatar</h3>

            <input
                type="file"
                // multiple
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="object is choosed from computer" width="80%"></img>
            )}

        </div>
    )
}

export default PreviewAvt;