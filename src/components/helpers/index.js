
export const createHatchedBackground = ({
  hatchAngle = 45,
  hatchColor = 'grey',
  bgColor = 'white',
  hatchWidth = 10,
}) => (
  `repeating-linear-gradient(
    ${hatchAngle}deg,
    ${hatchColor},
    ${hatchColor} ${hatchWidth}px,
    ${bgColor} ${hatchWidth}px,
    ${bgColor} ${hatchWidth*2}px
  )`
)
