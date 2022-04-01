export default function Package({ data }) {
    return (
        <li class="package-item bg-shadow">
            <div class="header">
                <div class={`type ${data.isPremium ? "premium-color" : ""}`}>{data.name}</div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgB7ZOLDcIwDERPTNARMkpGYAQ2IRvQDRilIzACI5QNjF0cEUVpIUk/UtUnuZV6jq+2YmBriKjhuHJ09OXBcUEtXMRwPGkc0QxKCYrL20o3+t1GWoNcZARTBXR03sQhF52zcJ7IsZrTIRc/5B85vos7ljD4hxMWZl0DXag+HA3lIWdvSScRaD5cyqBX0aAQ+mz+0ElKHEAlcZ2d3aLDYHODlzxq9yCsFYuO5qMd+4M22OgS5KzDmrwBTkMBg3NzDxwAAAAASUVORK5CYII=" alt="lock"/>
            </div>
            <div class="numbers">
                <div>
                    <span class="sm">Daily Earnings</span>
                    <div>{data.daily}%</div>
                </div>
                <div className="text-end">
                    <span class="sm">Total ROI Earnings</span>
                    <div>{(data.daily * data.period).toPrecision(5)}%</div>
                </div>
            </div>
            <div class="days bg_gradient">{data.period} Days</div>
            <div class="amount">
                <input type="text" placeholder="Enter amount in AVAX" value=""/>
            </div>
            <div class="days-roi w-100">
                <span class="sm">ROI in {data.period} days</span>
                <div class="bg_gradient p-2">0.00</div>
            </div>
            <button type="button" class="btn inactive circle-rounded">Deposit</button>
        </li>
    )
}