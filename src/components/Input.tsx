import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface inputProps{
    name: string,
    placeholder: string
}

const Input = forwardRef((props: inputProps, ref) => {
  return (
    <div className="w-1/1 m-5 bg-white rounded-md">
        <TextField inputRef={ref} {...props} fullWidth={true} multiline={true} size="small" color='primary' maxRows='4'>

        </TextField>
    </div>
  )
})

export default Input