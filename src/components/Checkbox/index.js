export default function Checkbox({checked, onClick}) {
  return (
    <div className="pretty p-default p-curve p-smooth">
      <input type="checkbox" checked={checked} readOnly 
        onClick={() => {onClick && onClick()}}
      />
      <div className="state p-info">
        <i className="icon mdi mdi-check"></i>
        <label></label>
      </div>
    </div>
  )
}