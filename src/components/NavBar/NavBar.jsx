import React from "react";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

function NavBar() {
  return (
    <nav className="bg-zinc-900">
			<div className=" container mx-auto flex justify-end pt-1 pb-2">
				<ul>
					<li>
						<ScoreBoard />
					</li>
				</ul>
			</div>
    </nav>
  );
}

export default NavBar;
