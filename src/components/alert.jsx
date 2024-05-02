export function AlertsContainer({children}) {
  return (
    <div className="alerts-container">{children}</div>
  )
}

export function Alert({index,message,dismiss}) {
  return (
    <div className="alert">
      <div className="body">{message}</div>
      <div className="actions">
        <button className="close-btn" onClick={function(){dismiss(index)}}>&times;</button>
      </div>
    </div>
  )
}