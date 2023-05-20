import axios from 'axios'
import React from 'react'

const singlpage = ({user}) => {
    console.log(user)
    return (
        <div>
            singlepage
        </div>
    )
}

export default singlpage
export async function getServerSideProps(context) {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/users/${context.query.id}`);
        return {
            props: {
                user: data
            }
        };
    } catch (error) {
        console.log(error);
    }
}
