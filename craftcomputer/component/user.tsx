import React, { useEffect, useState } from 'react'

function User(props: any) {
  return (
    <div className="user">
      <p>
        {props.username}
        <br />
        {props.email}
        <br />
        {props.password}
        <br />
      </p>
    </div>
  )
}

export { User }
