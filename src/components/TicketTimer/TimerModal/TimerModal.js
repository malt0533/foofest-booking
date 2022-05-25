import { Link } from "react-router-dom";
import "./_TimerModal.scss";

function TimerModal() {
	return (
		<aside className="modal">
			<div>
				<div>
					<h5>Your reservation is now invalid</h5>
				</div>
				<div>
					<Link to={"/"} className="cta">
						Back to start
					</Link>
					<a className="cta" href="https://google.dk" target="_blank">
						To schedule
					</a>
				</div>
			</div>
		</aside>
	);
}

export default TimerModal;