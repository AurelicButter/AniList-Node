#Media
- `media.anime(id)` | Fetches an anime by its id
- `media.manga(id)` | Fetches a manga by its id

#People
- `people.character(id)` | Fetches a character by their id 
    - `character.id` | Character's id
    - `character.name` | Character's name (Three sub-values: first, last, native.)
    - `character.image` | Character's image (Two sub-values: large and medium)
    - `character.description` | Character's description
    - `character.isFavourite` | [Requires login]: Character on the user's favourite list
    - `character.siteUrl` | Character's AniList URL
    - `character.media` | All media that the character is in (Returns ids only)

- `people.staff(id)` | Fetches a staff member by their id
    - `staff.id` | Staff's id
    - `staff.name` | Staff's name (Three sub-values: first, last, native)
    - `staff.language` | Staff's language
    - `staff.image` | Staff's image (Two sub-values: large and medium)
    - `staff.description` | Staff's description
    - `staff.isFavourite` | [Requires login]: Staff is on the user's favourite list 
    - `staff.siteUrl` | Staff's AniList URL
    - `staff.staffMedia` | All media that the staff has been apart of (Returns ids only)
    - `staff.characters` | All characters that the staff has voiced (Returns ids only)

#Search
- `Anilist.search(term, page, amount)` | Searches the database for an anime or manga that resembles the term provided.
    - `search.pageInfo` | Page object
        - `pageInfo.total` | Total amount of pages in search
        - `pageInfo.currentPage` | Current page of the search
        - `pageInfo.lastPage` | Last page of searched term
        - `pageInfo.hasNextPage` | If the page has a next page or not
        - `pageInfo.perPage` | How many results are on each page
    - `search.media` | Search results (Returns as an array)
        - `media.id` | Media ID
        - `media.title` | Title of the media (Four sub-values: english, native, romaji, userPreferred)

#User
- `user.profile(username|id)` | Fetches an AniList user by either their username or id. Usernames must be strings and ids must be integers.
    - `profile.id` | User's id
    - `profile.name` | User's username
    - `profile.about` | User's description
    - `profile.avatar` | User's avatar (Two sub-values: large and medium)
    - `profile.bannerImage` | User's banner image
    - `profile.isFollowing` | [Requires login] Logged in user following user
    - `profile.options` | User's options (Four sub-values: titleLanguage, displayAdultContent, airingNotifications, profileColor)
    - `profile.mediaListOptions` | Undocumented (Five sub-values: scoreFormat, rowOrder, useLegacyLists, sharedTheme, sharedThemeEnabled)
    - `profile.unreadNotificationCount` | Amount of unreadNotifications the user has
    - `profile.siteUrl` | User's AniList URL
    - `profile.donatorTier` | Check if the user is a donator
    - `profile.moderatorStatus` | Check if the user is a moderator
    - `profile.updatedAt` | Timestamp of the last update of the user 