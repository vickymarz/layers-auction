export const getInitials = (name: string) => {
  const newName = name.split(" ")
  const firstInitial = newName[0].slice(0, 1)
  const secondInitial = newName[1].slice(0, 1)
  const initials =  firstInitial + secondInitial
  return initials
}
