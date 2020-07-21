import { useEffect, useState } from 'react'
import { UseHistory, useHistory } from 'react-router-dom'

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)

    const onChange = (name, value) => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }
    return { form, onChange}
}