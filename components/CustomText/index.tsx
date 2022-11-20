import { Typography, TypographyProps } from '@mui/material'

const CustomText = (props: TypographyProps) => {
  return (
    <Typography data-test-id="hoge-text" variant='h1' color='primary' {...props}/>
  )
}

export default CustomText
