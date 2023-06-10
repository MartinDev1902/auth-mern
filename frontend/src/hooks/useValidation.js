import {useState} from 'react';

const useValidation = (initialState, validationRules) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e, submitForm) => {
        e.preventDefault();
        const validationErrors = {};

        for(const fieldName in validationRules){
            const fieldValue = values[fieldName]
            const rules = validationRules[fieldName]

            rules.forEach(rule => {
                if(rule.required && !fieldValue){
                    validationErrors[fieldName] = rule.message || 'This field is required'
                }

                if(rule.minLength && fieldValue.length < rule.minLength){
                    validationErrors[fieldName] = rule.message || `Min length: ${rule.minLength}`
                }

                if(rule.compareWith && fieldValue !== values[rule.compareWith]){
                    validationErrors[fieldName] = rule.message || `Passwords must be same`
                }
            });
        }

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0){
            submitForm(values)
        }

    }

    return {values, errors, handleChange, handleSubmit}
}

export default useValidation