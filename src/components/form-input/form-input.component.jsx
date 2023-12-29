import {FormInputLable, Input, Group} from "./form-input.style"

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} ></Input>
            {
                label && (
                    <FormInputLable shrink={otherProps.value.length}>{label}</FormInputLable>
                )
            }
        </Group>
    )
}

export default FormInput