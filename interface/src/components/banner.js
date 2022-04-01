export default function Banner() {
    return (
        <div className="banner text-white mt-5">
            <div className="promote">
                <h3 className="headline">Stake Your AVAX & Earn up to 20% Daily</h3>
                <h5>Important notes:</h5>
                <ol className="m-0">
                    <li>Basic interest rate (only for new deposits): +0.3% every 24 hours</li>
                    <li>Users can share referral links to earn bonus (at least 1 deposit to active the link). Referral bonuses will be automatically sent to the wallet.</li>
                    <li>No Forced Withdraw action for Silver, Gold, and Platinum packages</li>
                </ol>
            </div>
            <div className="state-info-box">
                <h4 className="text-center">Statistics</h4>
                <div className="info-list">
                    <div className="info-item">
                        <div className="icon"></div>
                        <div className="item-title">
                            <h3>Contract Balance</h3>
                            <span>0.000 AVAX</span>
                        </div>
                    </div>
                    <div className="info-item mt-2">
                        <div className="icon"></div>
                        <div className="item-title">
                            <h3>Ref Rewards</h3>
                            <span>402.510 AVAX</span>
                        </div>
                    </div>
                    <div className="info-item mt-2">
                        <div className="icon"></div>
                        <div className="item-title">
                            <h3>Total Users</h3>
                            <span>830</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}