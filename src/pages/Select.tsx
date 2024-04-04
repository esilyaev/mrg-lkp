export const Select = (props: { items: string[] }) => {
  return (
    <select name="" id="">
      {props.items.map(item => (
        <option value={item}>{item}</option>
      ))}
    </select>
  )
}
