import React from 'react'

function Card({ title, text, icon }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {icon && <div className="p-4 text-center fs-1 text-success">{icon}</div>}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
