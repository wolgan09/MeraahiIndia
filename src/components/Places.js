import React from 'react'
import { useParams } from 'react-router'

export default function Places() {
    const {id} = useParams();
    return (
        <div>
            {id}
        </div>
    )
}
