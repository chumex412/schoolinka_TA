import { AlarmIcon, SettingsIcon, profilePic } from '../../../assets';

const Header = () => {
	return (
		<header>
			<nav className="container flex justify-between items-center py-5">
				<h1 className="font-semibold">ToDo</h1>
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
