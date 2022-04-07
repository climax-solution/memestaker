import Package from "./package";

const packages = [
    {
        name: "SAVINGS",
        isPremium: false,
        daily: 12.3,
        period: 14
    },
    {
        name: "CLASSICS",
        isPremium: false,
        daily: 11.8,
        period: 21
    },
    {
        name: "PREMIUM",
        isPremium: false,
        daily: 11.3,
        period: 28
    },
    {
        name: "SILVER",
        isPremium: true,
        daily: 12.3,
        period: 14
    },
    {
        name: "GOLD",
        isPremium: true,
        daily: 11.8,
        period: 21
    },
    {
        name: "PLATINUM",
        isPremium: true,
        daily: 11.3,
        period: 28
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