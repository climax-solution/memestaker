import Package from "./package";

const packages = [
    {
        name: "SAVINGS",
        isPremium: false,
        daily: 8,
        period: 14,
        total: 112
    },
    {
        name: "CLASSICS",
        isPremium: false,
        daily: 7.5,
        period: 21,
        total: 157
    },
    {
        name: "PREMIUM",
        isPremium: false,
        daily: 7,
        period: 28,
        total: 196
    },
    {
        name: "SILVER",
        isPremium: true,
        daily: 8,
        period: 14,
        total: 197
    },
    {
        name: "GOLD",
        isPremium: true,
        daily: 7.5,
        period: 21,
        total: 365
    },
    {
        name: "PLATINUM",
        isPremium: true,
        daily: 7,
        period: 28,
        total: 582
    }
];

export default function Packages() {
    return (
        <div className="packages mt-4">
            <h4>PACKAGES</h4>
            <ul className="px-0">
                {
                    packages.map((item, index) => (
                        <Package data={item} key={index}/>
                    ))
                }
            </ul>
            <div className="restriction-box">
                <div className="withdraw-box bg-shadow">
                    <div className="header">
                        <h6 className="title m-0">STAKED DOGE</h6>
                        <h4>0</h4>
                    </div>
                    <div className="input-box my-5">
                        <span className="d-block">Available DOGE to withdraw </span>
                        <input
                            type="text"
                            className="bg_gradient"
                        />
                    </div>
                    <button className="btn">Withdraw</button>
                </div>
                <div className="referal-box bg-shadow">
                    <div className="header">
                        <h3>Referrals</h3>
                        <hr/>
                    </div>
                    <div className="referal-link bg_gradient">
                        PLEASE CONNECT WALLET TO GENERATE REFERRAL LINK
                        <span></span>
                    </div>
                    <div className="info-box">
                        <div className="referal-item earned">
                            <span>EARNED</span>
                            <span>0</span>
                        </div>
                        <div className="referal-item withdrawn">
                            <span>WITHDRAWN</span>
                            <span>0</span>
                        </div>
                        <div className="referal-item referrals">
                            <span>REFERRALS</span>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}