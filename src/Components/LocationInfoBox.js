import nasaLogo from './nasa-logo.png'

const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <div className="box-heading">
            <h2>Event Location Information</h2>
            <img src={nasaLogo} className='nasa-logo'></img>
            </div>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
