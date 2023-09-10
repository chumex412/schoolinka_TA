import { AlarmIcon, SettingsIcon, profilePic } from '../../../assets';

const Header = () => {
	return (
		<header className="shadow">
			<nav className="container flex items-center justify-between py-4">
				<h1 className="text-xl font-semibold">ToDo</h1>
				<div className="flex items-center gap-x-2.5">
					<SettingsIcon />
					<AlarmIcon />
					<img src={profilePic} className="ml-2" alt="Profile picture" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
