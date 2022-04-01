import React from 'react'

const headerData = [
    {
        title: "Home",
        tabs: [
            {name: 'Kredily', type: 'link'},
            {name: 'Search Input', type: 'search'},
            {name: 'Toggle', type: 'toggle'},
            {name: 'Notification', type: 'notificatin'},
            {name: 'Dropdown', type: 'dropdown'},
        ]
    },
    {
        title: "Payroll",
        tabs: [
            {name: 'Run Payroll', type: 'link'},
            {name: 'Payroll Setup', type: 'link'},
            {name: 'Advanced Settings', type: 'link'},
            {name: 'New Joinies & Exits', type: 'link'},
        ]
    }
]

const Header = (props) => {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg ${props.type === 1 ? 'navbar-dark bg-dark' : ' navbar-light bg-light'}`}>
            <div className={`container-fluid ${props.type === 1 && 'align-items-start d-flex flex-column justify-content-start align-content-start flex-wrap '}`}>
                <a className="navbar-brand" href="/">{headerData[props.type]?.title || "default"}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {headerData[props.type]?.tabs.map((tab, index) => <li className="nav-item" key={tab.name}>
                            <a className={`nav-link ${index === 0 && 'active border-bottom border-4'}`} aria-current="page" href={`/${tab.name}`}>{tab.name}</a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header