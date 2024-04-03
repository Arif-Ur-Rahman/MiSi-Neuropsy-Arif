import Link from 'next/link'
import React from 'react'

const AboutItem = () => {
  return (
    <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2 active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Our Mission
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2"
              id="council-tab"
              data-bs-toggle="tab"
              data-bs-target="#council"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Client council
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Our Method
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Collaborate
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2"
              id="settings-tab"
              data-bs-toggle="tab"
              data-bs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Valuation
            </button>
          </li>
        </ul>
  )
}

export default AboutItem