import React from 'react'

export const UserInfo = ({profile: {image, username, bio}}) => (
  <div className="profile-page">
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img alt="" className="user-img" src={image} />
            <h4>{username}</h4>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
