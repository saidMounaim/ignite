// Base Url
const base_url = 'https://api.rawg.io/api/';

// get current moth
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

// get current day
const getCurrentDay = () => {
	const day = new Date().getDay();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

// get current year
const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popular games
const popular_games = `games?dates=${lastYear},${currentDate}&oredring=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&oredring=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&oredring=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
// GAME DETAILS
export const gameDetailsUrl = (id) => `${base_url}games/${id}`;
export const gameScreenshotsUrl = (id) => `${base_url}games/${id}/screenshots`;
// Searched Game
export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page_size=9`;
