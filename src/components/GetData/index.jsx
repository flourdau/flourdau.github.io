const urlGitResume = 'https://raw.githubusercontent.com/flourdau/flourdau/main/flourdau.resume.json'
const urlGitReadMe = 'https://raw.githubusercontent.com/flourdau/flourdau/main/README.md'
const urlGitProfile = 'https://api.github.com/users/flourdau'

const fallbackGitHubProfile = {
	login: 'flourdau',
	name: 'Florian Lourdaux',
	bio: '💻 Développeur Web FullStack, #OPENTOWORK, passionné par le numérique... 🎮📱🎧🌍🪐🦄🌈💗'
}

async function fetchWithFallback(primaryUrl, fallbackUrl, asJson = true, fallbackValue = null) {
	const isLocalDev = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
	const urls = isLocalDev && fallbackUrl ? [fallbackUrl, primaryUrl] : [primaryUrl, fallbackUrl].filter(Boolean)

	for (const url of urls) {
		try {
			const response = await fetch(url)
			if (response.ok) {
				return asJson ? await response.json() : await response.text()
			}
		} catch (error) {
			console.warn(`Fallback triggered for ${url}:`, error)
		}
	}

	return fallbackValue
}

/*
Get Data */
const resumeData = await fetchWithFallback(urlGitResume, '/flourdau.resume.json', true, {})
const githubReadMeText = await fetchWithFallback(urlGitReadMe, '/README.md', false, '')
const githubProfileData = await fetchWithFallback(urlGitProfile, null, true, fallbackGitHubProfile)

/*
Parsing README.md */
const sections = githubReadMeText ? githubReadMeText.split('___') : []
const arrayReadME = {
	arrayReadME: sections.map((githubReadMeSection) => githubReadMeSection.split(':  \n', 2))
}

/*
Merging Data */
const mergedData = {
	Resume: resumeData,
	GitHubProfile: githubProfileData || fallbackGitHubProfile,
	...arrayReadME
}

export default async function GetData() {
	return mergedData
}
