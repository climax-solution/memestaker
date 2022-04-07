export default function InfoBar() {
    return (
        <div className="container">
            <div className="info-bar">
                <div className="price">
                    <span className="item-name">DOGE price: </span>
                    <span className="item-state">$0.015</span>
                </div>
                <div className="staked-amount">
                    <span className="item-name">Total Amount Staked: </span>
                    <span className="item-state">605400.681 DOGE</span>
                </div>
                <div className="active-token">
                    <span className="token-name">DOGE COIN</span>
                </div>
                <div className="start-at">
                    <span className="item-name">Staking starts in: </span>
                    <span className="item-state">16 Days 05 Hours 17 Minutes 12 Seconds</span>
                </div>
            </div>
        </div>
    )
}