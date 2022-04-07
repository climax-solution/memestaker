export default function Package({ data }) {
    return (
        <li class="package-item bg-shadow">
            <div class="header">
                <div class={`type ${data.isPremium ? "premium-color" : ""}`}>{data.name}</div>
                
                {
                    !data.isPremium ?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgB7ZOLDcIwDERPTNARMkpGYAQ2IRvQDRilIzACI5QNjF0cEUVpIUk/UtUnuZV6jq+2YmBriKjhuHJ09OXBcUEtXMRwPGkc0QxKCYrL20o3+t1GWoNcZARTBXR03sQhF52zcJ7IsZrTIRc/5B85vos7ljD4hxMWZl0DXag+HA3lIWdvSScRaD5cyqBX0aAQ+mz+0ElKHEAlcZ2d3aLDYHODlzxq9yCsFYuO5qMd+4M22OgS5KzDmrwBTkMBg3NzDxwAAAAASUVORK5CYII=" alt="unlock"/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA0LTA3VDIxOjIwOjI4KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNC0wN1QyMToyNTo0MCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wNC0wN1QyMToyNTo0MCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4Njk2YTUyMS01NmMyLTc1NDYtOTFmYy1kYWEyYmFjNTIwMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODY5NmE1MjEtNTZjMi03NTQ2LTkxZmMtZGFhMmJhYzUyMDE0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODY5NmE1MjEtNTZjMi03NTQ2LTkxZmMtZGFhMmJhYzUyMDE0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Njk2YTUyMS01NmMyLTc1NDYtOTFmYy1kYWEyYmFjNTIwMTQiIHN0RXZ0OndoZW49IjIwMjItMDQtMDdUMjE6MjA6MjgrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7rFoDRAAAA9ElEQVRIDWP4//8/Ay0xnPFnOwNW/PdWtfzf86H7/x41fg/k/wfjQxrf/l5OmoNLDwgTZcHfm+U2f/bL/IYbjI6BcmA15FoANxxk0LXcApBvwBYD2ShyUHGSLIAGAU4DwGJQS4BBeJB0HwDDGaz5SkY7zvi5ml0FcYTsb3KCCBbW+BKALC511LHgdj0frS0Qoq0FV3MK/+wR+AfGxFgAylB/dvP/w5nuCWGg3r9n/c5htQAq8Z8aGOjQA5g+gLocV84kBkP1gn2CLYgIhjmRGGzOqAWjFtDCAlrnA1Duo1pOPut3HntZBJSguCyCOBSzLKIVBgCY5jQlrRbxiQAAAABJRU5ErkJggg==" alt="lock"/>
                }

            </div>
            <div class="numbers">
                <div>
                    <span class="sm">Daily Earnings</span>
                    <div>{data.daily}%</div>
                </div>
                <div className="text-end">
                    <span class="sm">Total ROI Earnings</span>
                    <div>{data.total}%</div>
                </div>
            </div>
            <div class="days bg_gradient">{data.period} Days</div>
            <div class="amount">
                <input type="text" placeholder="Enter amount in DOGE" value=""/>
            </div>
            <div class="days-roi w-100">
                <span class="sm">ROI in {data.period} days</span>
                <div class="bg_gradient p-2">0.00</div>
            </div>
            <button type="button" class="btn inactive circle-rounded">Deposit</button>
        </li>
    )
}