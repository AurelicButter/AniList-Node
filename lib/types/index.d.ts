// Type definitions for AniList-Node
// Project: https://github.com/Butterstroke/AniList-Node
// Definitions by: Diego Aquino <https://github.com/typlox>

/* =================== USAGE ===================

    import anilist from 'anilist-node';
    const Anilist = new anilist();

 =============================================== */

/**
 * The main class for AniList-Node
 * @since 1.0.0
 */
declare class Anilist {

    /**
     * Access AniList's user data.
     * @since 1.0.0
     * @memberof AniList
     */
    user: User;

    /**
     * Access a user's AniList list data.
     * @since 1.1.0
     * @memberof Anilist
     */
    lists: Lists;

    /**
     * Access AniList's media data.
     * @since 1.0.0
     * @memberof AniList
     */
    media: Media;

    /**
     * Access AniList's characters and staff data.
     * @since 1.0.0
     * @memberof AniList
     */
    people: People;

    /**
     * Access activities on AniList
     * @since 1.7.0
     * @memberof AniList
     */
    activity: Activity;

    /**
     * Search for items on AniList
     * @since 1.7.0
     * @memberof AniList
     */
    searchEntry: Search;

    /**
     * Access AniList's recommendations
     * @since 1.8.0
     * @memberof AniList
     */
    recommendation: Recommendation;

    /**
     * Access AniList's threads
     * @since 1.11.0
     * @memberof AniList
     */
    thread: Thread;

    /**
     * @constructor
     * @param {String} [accessKey] - The AniList API token. If no key is provided,
     *      the user will not be able to access private information such as
     *      the authorized user's profile (if set to private).
     * @param { InitOptions } [options] - Optional options used while getting info from AniList
     */
    constructor(accessKey?: string, options?: InitOptions);

    /**
     * Grabs data on a studio
     * @param {String | Number} studio - The studio ID or name on AniList.
     * @return { StudioEntry }
     * @since 1.0.0
     */
    studio(studio: number | string): Promise<StudioEntry>;

    /**
	 * [Requires Login] Favourite/Unfavourite a studio
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
    favouriteStudio(id: number): Promise<Boolean>;

    /**
     * Searches AniList based on a specific term.
     * @param {String} type - Required. Either anime, manga, character, staff, studio, or user.
     * @param {String} term - Required. The term to lookup. (ie: "Honzuki no Gekokujou" or "Butterstroke")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.0.0
     * @deprecated Please use {@link AniList.Search} class via `AniList.searchEntry` for updated searching. {@link AniList.Search} will replace
     * this function in the next major update (v2.0.0).
     */
    search(type: 'anime' | 'manga' | 'character' | 'staff' | 'studio' | 'user', term: string, page?: number, amount?: number)
        : Promise<MediaSearchEntry | CharacterSearchEntry | StaffSearchEntry | StudioSearchEntry | UserSearchEntry>;

    /**
	 * Grabs all possible genres
	 * @since 1.12.0
	 */
	genres(): Promise<String[]>;

    /**
	 * Grabs all possible media tags
	 * @since 1.12.0
	 */
	mediaTags(): Promise<MediaTag[]>;
}

declare class User {

    /**
     * Fetch a user's AniList basic profile.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { UserProfile }
     * @since 1.0.0
     */
    profile(user: number | string): Promise<UserProfile>;

    /**
     * Fetch a user's AniList stats.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { UserStats }
     * @since 1.3.0
     */
    stats(user: number | string): Promise<UserStats>;

    /**
     * Fetch a user's AniList profile, basic and stats.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns all keys within {@link UserProfile} and {@link UserStats}. UserStats are found under the statistics key.
     * @since 1.0.0
     */
    all(user: number | string): Promise<UserStatsProfile>;

    /**
     * Fetch recent activity from a user.
     * @param {Number} user - Required. Needs to be the user's AniList ID.
     * @returns { Object[] } Returns the 25 most recent activities of the user. Contains any number of
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifiable by the type key.
     *
     * @since 1.6.0
     */
    getRecentActivity(user: number): Promise<Array<ListActivity | TextActivity | MessageActivity>>;

    /**
     * Fetch profile information on the currently authorized user.
     * @returns { UserProfile }
     *
     * @since 1.8.0
     */
    getAuthorized(): Promise<UserProfile>;

    /**
	 * [Requires Login] Update user settings
	 * @param {UserOptions} options 
	 * @returns {UserProfileOptions}
	 * 
	 * @since 1.10.0
	 */
	update(options: UserOptions): Promise<UserProfileOptions>;

    /**
	 * [Requires Login] Follow/Unfollow a user
	 * @param {Number} userID - The user ID of the account to follow
	 * @returns {Boolean} True if following, false otherwise.
	 *
	 * @since 1.12.0
	 */
    follow(userID : number): Promise<Boolean>;
}

declare class Lists {

    /**
     * Fetch a user's AniList anime lists.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { UserList }
     * @since 1.1.0
     */
    anime(user: number | string): Promise<UserList[]>;

    /**
     * Fetch a user's AniList manga lists.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { UserList }
     * @since 1.1.0
     */
    manga(user: number | string): Promise<UserList[]>;

    /**
	 * [Requires Login] Add an entry to a user's list.
	 * @param {Number} id - The AniList ID of the entry to add
	 * @param {UpdateEntryOptions} options - Values to save with.
	 * @returns {UpdatedEntry}
	 * @since 1.13.0
	 */
	addEntry(id: number, options: UpdateEntryOptions): Promise<UpdatedEntry>;

    /**
	 * [Requires Login] Update a list entry to a user's list.
	 * @param {Number} id - The AniList list ID of the entry to edit.
	 * @param {UpdateEntryOptions} options - Values to save with.
	 * @returns {UpdatedEntry}
	 * @since 1.13.0
	 */
	updateEntry(id: number, options:UpdateEntryOptions): Promise<UpdatedEntry>;

	/**
	 * [Requires Login] Remove an entry from a user's lists.
	 * @param {Number} id - The AniList list ID of the entry to remove.
	 * @returns {Boolean} Returns true if removed, false otherwise.
	 * @since 1.13.0
	 */
	removeEntry(id: number): Promise<Boolean>;
}


/**
 * Access AniList's media data.
 * @since 1.0.0
 * @memberof AniList
 */
declare class Media {

    /**
     * Fetch an anime entry by its AniList ID.
     * @param { Number } id - Required. The ID tied to the AniList entry.
     * @returns { AnimeEntry }
     * @since 1.0.0
     */
    anime(id: number): Promise<AnimeEntry>;

    /**
	 * [Requires Login] Favourite/Unfavourite an anime
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
    favouriteAnime(id: number): Promise<Boolean>;

    /**
     * Fetch a manga entry by its AniList ID.
     * @param { Number } id - Required. The ID tied to the AniList entry.
     * @returns { MangaEntry }
     * @since 1.0.0
     */
    manga(id: number): Promise<MangaEntry>;

    /**
	 * [Requires Login] Favourite/Unfavourite a manga
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
    favouriteManga(id: number): Promise<Boolean>;
}

declare class People {

    /**
     * Fetch a character entry by its AniList ID.
     * @param { Number|String } id - Required. The ID tied to the AniList entry.
     * @returns { CharacterEntry }
     * @since 1.0.0
     */
    character(id: number | string): Promise<CharacterEntry>;

    /**
	 * [Requires Login] Favourite/Unfavourite a character
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
    favouriteChar(id: number): Promise<Boolean>;

    /**
     * Fetch a staff entry by its AniList ID or their name.
     * @param { Number|String } id - Required. The ID can either be the AniList ID or the staff's name.
     * @returns { StaffEntry }
     * @since 1.0.0
     */
    staff(id: number | string): Promise<StaffEntry>;

    /**
	 * [Requires Login] Favourite/Unfavourite a staff entry
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
    favouriteStaff(id: number): Promise<Boolean>;
}

declare class Activity {

    /**
     * Get a specific AniList activity by its ID.
     * @param {Number} activityID The AniList activity ID
     * @returns { ListActivity | TextActivity | MessageActivity } Returns the activity information. Activity will either appear as:
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifiable by the type key.
     * @since 1.7.0
     */
    get(activityID: number): Promise<ListActivity | TextActivity | MessageActivity>;

    /**
     * Fetch activities from a user.
     * @param {Number} user - Required. Needs to be the user's AniList ID.
     * @param {Number} page - The page number to display
     * @param {Number} perPage - How many entries to display on one page. (Max is 25 per AniList limit)
     * @returns { Object[] } Returns a list of user activities based on the page & perPage values Contains any number of
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifiable by the type key.
     *
     * @since 1.7.0
     */
    getUserActivity(user: number, page?: number, perPage?: number): Promise<Array<ListActivity | TextActivity | MessageActivity>>;

    postText(text: string, id?:number): Promise<TextActivity>;

    postMessage(text: string, recipientId: number, isPrivate?:boolean, id?: number): Promise<MessageActivity>;

    delete(id: number): Promise<boolean>;
}

declare class Search {

    /**
     * Search for a specific character
     * @param {String} term - Required. The term to lookup. (ie: "Myne" or "Chise Hatori")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    character(term: string, page?: number, amount?: number): Promise<CharacterSearchEntry>;

    /**
     * Search for a specific studio
     * @param {String} term - Required. The term to lookup. (ie: "White Fox")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    studio(term: string, page?: number, amount?: number): Promise<StudioSearchEntry>;

    /**
     * Search for a specific staff member
     * @param {String} term - Required. The term to lookup. (ie: "Yuka Iguchi")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    staff(term: string, page?: number, amount?: number): Promise<StaffSearchEntry>;

    /**
     * Search for a specific user
     * @param {String} term - Required. The term to lookup. (ie: "Butterstroke")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    user(term: string, page?: number, amount?: number): Promise<UserSearchEntry>;

    /**
     * Search for a specific anime
     * @param {String} term - The term to lookup. (ie: "Log Horizon"). For no term, input a null value
     * @param {Object} filter - A key-value paired object to filter search data.
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    anime(term?: string, filter?: MediaFilterTypes, page?: number, amount?: number): Promise<MediaSearchEntry>;

    /**
     * Search for a specific manga
     * @param {String} term - The term to lookup. (ie: "Mahoutsukai no Yome"). For no term, input a null value.
     * @param {Object} filter - A key-value paired object to filter search data.
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    manga(term?: string, filter?: MediaFilterTypes, page?: number, amount?: number): Promise<MediaSearchEntry>;

    /**
     * Search for a specific activity
     * @param {Number} activityID - The activityID to lookup. (ie: 152876349). For no term, input a null value.
     * @param {Object} filter - A key-value paired object to filter search data.
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { ActivityEntry }
     * @since 1.7.0
     */
    activity(activityID?: number, filter?: ActivityFilterTypes, page?: number, amount?: number): Promise<ActivityEntry[]>;
}

declare class Recommendation {

    /**
     * Get AniList recommendations for a media.
     * @param { Number } mediaID The AniList media id
     * @returns { RecommendationList }
     * @since 1.8.0
     */
    getList(mediaID: Number): Promise<RecommendationList>;

    /**
     * Get an AniList recommendation via its ID
     * @param { Number } recommendID The AniList recommendation ID
     * @returns { SingleRecommendation }
     * @since 1.8.0
     */
    get(recommendID: Number): Promise<SingleRecommendation>;
}

declare class Thread {
    /**
	 * Get a specific thread by its AniList ID
     * @param {Number} id - The AniList ID of the thread
	 * @returns {ThreadEntry}
     * @since 1.11.0
	 */
	get(id: number): Promise<ThreadEntry>;

    /**
	 * [Require Login] Delete a thread
	 * @param {Number} id - The AniList thread ID to delete
	 *
	 * @returns {Boolean} Returns true if successful
	 * @since 1.12.0
	 */
	delete(id: number): Promise<Boolean>; 

	/**
	 * Get thread comments for a thread
	 * @param {Number} id - The AniList thread ID
     * @param {Number} page - The page number
     * @param {Number} perPage - How many entries per page
	 *
	 * @returns {ThreadComments[]}
	 * @since 1.12.0
	 */
	getComments(id: number, page: number, perPage: number): Promise<ThreadComment[]>;
}

export declare type MediaType = 'ANIME' | 'MANGA';

export declare type MediaFormat = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC' | 'MANGA' | 'NOVEL' | 'ONE_SHOT';

export declare type MediaStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';

export declare type MediaSeason = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';

export declare type MediaSource = 'ORIGINAL' | 'MANGA' | 'LIGHT_NOVEL' | 'VISUAL_NOVEL' | 'VIDEO_GAME' | 'OTHER' | 'NOVEL' | 'DOUJINSHI' | 'ANIME';

export declare type MediaSort = 'ID' | 'ID_DESC' | 'TITLE_ROMAJI' | 'TITLE_ROMAJI_DESC' | 'TITLE_ENGLISH' | 'TITLE_ENGLISH_DESC' | 'TITLE_NATIVE' |
    'TITLE_NATIVE_DESC' | 'TYPE' | 'TYPE_DESC' | 'FORMAT' | 'FORMAT_DESC' | 'START_DATE' | 'START_DATE_DESC' | 'END_DATE' | 'END_DATE_DESC' |
    'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODES' | 'EPISODES_DESC' | 'DURATION' | 'DURATION_DESC' |
    'STATUS' | 'STATUS_DESC' | 'CHAPTERS' | 'CHAPTERS_DESC' | 'VOLUMES' | 'VOLUMES_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC';

export declare type ActivitySort = 'ID' | 'ID_DESC';

export declare type ActivityType = 'TEXT' | 'ANIME_LIST' | 'MANGA_LIST' | 'MESSAGE' | 'MEDIA_LIST';

export declare type RecommendationRating = "NO_RATING" | "RATE_UP" | "RATE_DOWN";

export declare type ModRole = "ADMIN" | "LEAD_DEVELOPER" | "DEVELOPER" | "LEAD_COMMUNITY" | "COMMUNITY" | "DISCORD_COMMUNITY" | "LEAD_ANIME_DATA" |
    "ANIME_DATA" | "LEAD_MANGA_DATA" | "MANGA_DATA" | "LEAD_SOCIAL_MEDIA" | "SOCIAL_MEDIA" | "RETIRED";

export declare type UserTitleLanguage = "ROMAJI" | "ENGLISH" | "NATIVE" | "ROMAJI_STYLISED" | "ENGLISH_STYLISED" | "NATIVE_STYLISED";

export declare type UserStaffNameLanguage = "ROMAJI" | "NATIVE" | "ROMAJI_WESTERN";

export declare type ScoreFormat = "POINT_100" | "POINT_10_DECIMAL" | "POINT_10" | "POINT_5" | "POINT_3";

export declare type NotificationType = "ACTIVITY_MESSAGE" | "ACTIVITY_REPLY" | "FOLLOWING" | "ACTIVITY_MENTION" | "THREAD_COMMENT_MENTION" | "THREAD_SUBSCRIBED" |
    "THREAD_COMMENT_REPLY" | "AIRING" | "ACTIVITY_LIKE" | "ACTIVITY_REPLY_LIKE" | "THREAD_LIKE" | "THREAD_COMMENT_LIKE" | "ACTIVITY_REPLY_SUBSCRIBED" |
    "RELATED_MEDIA_ADDITION" | "MEDIA_DATA_CHANGE" | "MEDIA_MERGE" | "MEDIA_DELETION";

export declare type EntryStatus = "CURRENT" | "PLANNING" | "COMPLETED" | "DROPPED" | "PAUSED" | "REPEATING";

export declare interface FuzzyDate {
    year: number,
    month: number,
    day: number
}

export declare interface CoverImage {
    large: string,
    medium: string,
    small: string,
    color: string
}

export declare interface PersonRelation {
    id: number,
    name: string
}

export declare interface UserRelation {
    id: number,
    name: string
}

export declare interface MediaTitle {
    english: string,
    native: string,
    romaji: string,
    userPreferred: string
}

export declare interface PersonName {
    english: string,
    native: string,
    alternative: string
}

export declare interface PageInfo {
    pageInfo: {
        total: number,
        currentPage: number,
        lastPage: number,
        hasNextPage: boolean,
        perPage: number,
    }
}

export declare interface MediaRelation {
    id: number,
    title: MediaTitle,
    type?: MediaType
}

export declare interface MediaSearchEntry extends PageInfo {
    media: [{
        id: number,
        title: MediaTitle
    }]
}

export declare interface CharacterSearchEntry extends PageInfo {
    characters: PersonRelation[]
}

export declare interface StaffSearchEntry extends PageInfo {
    staff: PersonRelation[]
}

export declare interface StudioSearchEntry extends PageInfo {
    studios: UserRelation[]
}

export declare interface UserSearchEntry extends PageInfo {
    users: UserRelation[]
}

export declare interface ActivityEntry extends PageInfo {
    activities: Array<ListActivity | TextActivity | MessageActivity>,
    id: number,
    type: string,
    createdAt: number,
    likeCount: number
}

export declare interface StaffEntry {
    id: number,
    name: PersonName,
    image: ImageSize,
    description: string,
    isFavourite: boolean,
    siteUrl: string,
    favourites: number,
    language: string,
    staffMedia: MediaRelation[],
    characters: PersonRelation[]
}

export declare interface CharacterEntry {
    id: number,
    name: PersonName,
    image: ImageSize,
    description: string,
    isFavourite: boolean,
    siteUrl: string,
    favourites: number,
    media: MediaRelation[]
}

export declare interface StudioRelation extends UserRelation {
    isAnimationStudio: boolean
}

export declare interface StudioEntry extends StudioRelation {
    favourites: number,
    media: MediaRelation[],
    siteUrl: string,
    isFavourite: boolean
}

export declare interface AiringEntry {
    airingAt: number,
    timeUntilAiring: number,
    episode: number
}

export declare interface Tags {
    id: number,
    name: string,
    isMediaSpoiler: boolean
}

export declare interface StreamingEpisode {
    title: string,
    thumbnail: string,
    url: string,
    site: string
}

export declare interface Ranking {
    rank: number,
    type: 'RATED' | 'POPULAR',
    context: string,
    year: number,
    season: MediaSeason
}

export declare interface MediaListEntry {
    id: number,
    status: string
}

export declare interface Review {
    id: number,
    score: number,
    summary: string,
    body: string
}

export declare interface Stats {
    scoreDistribution: [{
        score: number,
        amount: number
    }],
    statusDistribution: [{
        status: 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED',
        amount: number
    }]
}

export declare interface Trends {
    date: number,
    trending: number,
    popularity: number,
    inProgress: number
}

export declare interface MediaEntry {
    id: number,
    idMal: number,
    title: MediaTitle,
    format: MediaFormat,
    status: MediaStatus,
    description: string,
    startDate: FuzzyDate,
    endDate: FuzzyDate,
    countryOfOrigin: string,
    isLicensed: number,
    hashtag: string,
    trailer: string | {
        id: string | number,
        site: string,
        thumbnail: string
    } | null,
    updatedAt: number,
    coverImage: CoverImage,
    bannerImage: string,
    genres: string[],
    synonyms: string[],
    averageScore: number,
    meanScore: number,
    favourites: number,
    popularity: number,
    trending: number,
    tags: Tags[],
    relations: MediaRelation[],
    characters: PersonRelation[],
    staff: PersonRelation[],
    studios: StudioRelation[],
    isFavourite: boolean,
    isAdult: boolean,
    isLocked: boolean
    nextAiringEpisode: AiringEntry[],
    airingSchedule: AiringEntry[],
    trends: Trends[],
    externalLinks: string[],
    streamingEpisodes: StreamingEpisode[],
    rankings: Ranking[],
    mediaListEntry: MediaListEntry,
    siteUrl: string,
    autoCreateForumThread: boolean,
    modNotes: string,
    stats: Stats,
    isRecommendationBlocked: boolean,
    reviews: Review[],
    recommendations: MediaRelation[]
}

export declare interface AnimeEntry extends MediaEntry {
    episodes: number,
    season: MediaSeason,
    seasonYear: number,
    duration: number,
    source: MediaSource,
}

export declare interface MangaEntry extends MediaEntry {
    chapters: number
    volumes: number
}

export declare interface ImageSize {
    large: string,
    medium: string
}

export declare interface UserOptions {
    titleLanguage: string,
    displayAdultContent: boolean,
    airingNotifications: boolean,
    profileColor: string,
    activityMergeTime: Number,
    staffNameLanguage: UserStaffNameLanguage,
    notificationOptions: NotificationOptions[]
}

export declare interface UserOptionsWithTime extends UserOptions {
    timezone: string
}

export declare interface UserOptionsInput {
    about: string,
    titleLanguage: UserTitleLanguage,
    displayAdultContent: boolean,
    airingNotifications: boolean,
    profileColor: string,
    activityMergeTime: Number,
    staffNameLanguage: UserStaffNameLanguage,
    notificationOptions: NotificationOptions[],
    timezone: string,
    scoreFormat: ScoreFormat,
    rowOrder: string,
    animeListOptions: MediaListOptionsInput,
    mangaListOptions: MediaListOptionsInput
}

export declare interface MediaListOptions {
    sectionOrder: string[],
    splitCompletedSectionByFormat: boolean,
    customLists: string[],
    advancedScoring: string[],
    advancedScoringEnabled: boolean
}

export declare interface MediaListOptionsInput extends MediaListOptions {
    theme: string
}

export declare interface UserProfileOptions extends UserOptions {
    about: string,
    options: UserOptionsWithTime,
    mediaListOptions: MediaListSettings,
    donatorBadge: string
}

export declare interface NotificationOptions {
    type: NotificationType,
    enabled: boolean
}

export declare interface UserMediaList {
    sectionOrder: string[],
    splitCompletedSectionByFormat: boolean,
    customLists: string[],
    advancedScoring: string[],
    advancedScoringEnabled: boolean
}

export declare interface MediaListSettings {
    scoreFormat: string,
    rowOrder: string,
    animeList: UserMediaList,
    mangaList: UserMediaList
}

export declare interface UserFavourites {
    anime: MediaRelation[],
    manga: MediaRelation[],
    character: PersonRelation[],
    staff: PersonRelation[],
    studios: UserRelation[]
}

export declare interface UserProfile extends UserRelation {
    about: string,
    avatar: ImageSize,
    bannerImage: string,
    isFollowing: boolean,
    isBlocked: boolean,
    isFollower: boolean,
    bans: string,
    options: UserOptions,
    mediaListOptions: MediaListSettings,
    favourites: UserFavourites,
    siteUrl: string,
    donatorTier: number,
    donatorBadge: string,
    moderatorRoles: ModRole[],
    updatedAt: number
}

export declare interface UserStatsProfile extends UserProfile {
    statistics: UserStats;
}

export declare interface AnimeUserEntry {
    count: number,
    meanScore: number,
    watchedTime: number
}

export declare interface MangaUserEntry {
    count: number,
    meanScore: number,
    chaptersRead: number
}

export declare interface AnimeUserStatuses extends AnimeUserEntry {
    status: string
}

export declare interface MangaUserStatuses extends MangaUserEntry {
    status: string
}

export declare interface AnimeUserFormats extends AnimeUserEntry {
    format: string
}

export declare interface MangaUserFormats extends MangaUserEntry {
    format: string
}

export declare interface AnimeUserLengths extends AnimeUserEntry {
    length: string
}

export declare interface MangaUserLengths extends MangaUserEntry {
    length: string
}

export declare interface AnimeUserReleaseYears extends AnimeUserEntry {
    releaseYear: string
}

export declare interface MangaUserReleaseYears extends MangaUserEntry {
    releaseYear: string
}

export declare interface AnimeUserStartYears extends AnimeUserEntry {
    startYear: string
}

export declare interface MangaUserStartYears extends MangaUserEntry {
    startYear: string
}

export declare interface AnimeUserGenres extends AnimeUserEntry {
    genre: string
}

export declare interface MangaUserGenres extends MangaUserEntry {
    genre: string
}

export declare interface AnimeUserTags extends AnimeUserEntry {
    tag: UserRelation
}

export declare interface MangaUserTags extends MangaUserEntry {
    tag: UserRelation
}

export declare interface AnimeUserCountries extends AnimeUserEntry {
    country: string
}

export declare interface MangaUserCountries extends MangaUserEntry {
    country: string
}

export declare interface AnimeUserVoiceActors extends AnimeUserEntry {
    voiceActor: PersonRelation
}

export declare interface AnimeUserStaff extends AnimeUserEntry {
    staff: PersonRelation
}

export declare interface MangaUserStaff extends MangaUserEntry {
    staff: PersonRelation
}

export declare interface AnimeUserStudios extends AnimeUserEntry {
    studio: UserRelation
}

export declare interface UserStatsEntry {
    meanScore: number,
    standardDeviation: number,
    count: number
}


export declare interface UserStatsAnime extends UserStatsEntry {
    minutesWatched: number,
    episodesWatched: number,
    statuses: AnimeUserStatuses[],
    formats: AnimeUserFormats[],
    lengths: AnimeUserLengths[],
    releaseYears: AnimeUserReleaseYears[],
    startYears: AnimeUserStartYears[],
    genres: AnimeUserGenres[],
    tags: AnimeUserTags[],
    countries: AnimeUserCountries[],
    voiceActors: AnimeUserVoiceActors[],
    staff: AnimeUserStaff[],
    studios: AnimeUserStudios[],
}

export declare interface UserStatsManga extends UserStatsEntry {
    chaptersRead: number,
    volumesRead: number,
    statuses: MangaUserStatuses[],
    formats: MangaUserFormats[],
    lengths: MangaUserLengths[],
    releaseYears: MangaUserReleaseYears[],
    startYears: MangaUserStartYears[],
    genres: MangaUserGenres[],
    tags: MangaUserTags[],
    countries: MangaUserCountries[],
    staff: MangaUserStaff[],
}

export declare interface UserStats {
    anime: UserStatsAnime,
    manga: UserStatsManga
}

export declare interface ListEntry {
    media: {
        id: number,
        idMal: number,
        title: MediaTitle,
        description: string,
        format: string,
        tags: Tags[],
        startDate: FuzzyDate,
        endDate: FuzzyDate,
        genres: string[],
        isFavourite: boolean,
        isAdult: boolean,
        synonyms: string[],
        siteUrl: string,
        duration?: number,
        episodes?: number,
        volumes?: number,
        chapters?: number
    },
    id: number,
    status: MediaStatus,
    score: number,
    progress: number,
    progressVolumes?: number,
    repeat: number,
    priority: number,
    private: boolean,
    notes: string,
    hiddenFromStatusLists: boolean,
    advancedScores: {
        Story: number,
        Characters: number,
        Visuals: number,
        Audio: number,
        Enjoyment: number
    },
    dates: {
        startedAt: string,
        completedAt: string,
        updatedAt: string,
        createdAt: string
    }
}

export declare interface UserList {
    name: string,
    isCustomList: boolean,
    isSplitCompletedList: boolean,
    status: EntryStatus,
    entries: ListEntry[]
}
export declare interface BaseActivity {
    id: number,
    user: UserRelation,
    type: string,
    createdAt: number,
    replies: {
        id: number,
        text: string,
        likeCount: number
    },
    isLocked: boolean,
    isSubscribed: boolean,
    isLiked: boolean,
    likes: UserRelation[]
}

export declare interface ListActivity extends BaseActivity {
    progress: number,
    media: MediaRelation,
    status: string
}

export declare interface TextActivity extends BaseActivity {
    text: string
}

export declare interface MessageActivity extends BaseActivity {
    recipient: UserRelation,
    message: string,
    isPrivate: boolean
}

export declare interface MediaFilterTypes {
    id?: number,
    idMal?: number,
    startDate?: FuzzyDate,
    endDate?: FuzzyDate,
    season?: MediaSeason,
    seasonYear?: number,
    type?: MediaType,
    format?: MediaFormat,
    status?: MediaStatus,
    episodes?: number,
    duration?: number,
    chapters?: number,
    volumes?: number,
    isAdult?: boolean,
    genre?: string,
    tag?: string,
    minimumTagRank?: number,
    tagCategory?: string,
    onList?: boolean,
    licensedBy?: string,
    averageScore?: number,
    popularity?: number,
    source?: MediaFormat,
    countryOfOrigin?: number,
    search?: string,
    id_not?: number,
    id_in?: number[],
    id_not_in?: number[],
    idMal_not?: number,
    idMal_in?: number[],
    idMal_not_in?: number[],
    startDate_greater?: FuzzyDate,
    startDate_lesser?: FuzzyDate,
    startDate_like?: string,
    endDate_greater?: number,
    endDate_lesser?: number,
    endDate_like?: string,
    format_in?: MediaFormat[],
    format_not?: MediaFormat,
    format_not_in?: MediaFormat[],
    status_in?: MediaStatus[],
    status_not?: MediaStatus,
    status_not_in?: MediaStatus[],
    episodes_greater?: number,
    episodes_lesser?: number,
    duration_greater?: number,
    duration_lesser?: number,
    chapters_greater?: number,
    chapters_lesser?: number,
    volumes_greater?: number,
    volumes_lesser?: number,
    genre_in?: string[],
    genre_not_in?: string[],
    tag_in?: string[],
    tag_not_in?: string[],
    tagCategory_in?: string[],
    tagCategory_not_in?: string[],
    licensedBy_in?: string[],
    averageScore_not?: number,
    averageScore_greater?: number,
    averageScore_lesser?: number,
    popularity_not?: number,
    popularity_greater?: number,
    popularity_lesser?: number,
    source_in?: MediaSource[],
    sort?: MediaSort[]
}

export declare interface ActivityFilterTypes {
    id?: number,
    userId?: number,
    messengerId?: number,
    mediaId?: number,
    type?: ActivityType,
    isFollowing?: boolean,
    hasReplies?: boolean,
    hasRepliesOrTypeText?: boolean,
    createdAt?: number,
    id_not?: number,
    id_in?: number[],
    id_not_in?: number[],
    userId_not?: number,
    userId_in?: number[],
    userId_not_in?: number[],
    messengerId_not?: number,
    messengerId_in?: number[],
    messengerId_not_in?: number[],
    mediaId_not?: number,
    mediaId_in?: number[],
    mediaId_not_in?: number[],
    type_not?: ActivityType,
    type_in?: ActivityType[],
    type_not_in?: ActivityType[],
    createdAt_greater?: number,
    createdAt_lesser?: number,
    sort?: ActivitySort[]
}

export declare interface RecommendationList {
    media: MediaRelation,
    recommendations: RecommendationEntry[]
}

export declare interface RecommendationEntry {
    id: Number,
    rating: Number,
    userRating: RecommendationRating,
    user: UserRelation,
    mediaRecommendation: MediaRelation
}

export declare interface SingleRecommendation extends RecommendationEntry {
    media: MediaRelation
}

export declare interface InitOptions {
    timeout: number
}

export declare interface ThreadEntry {
    id: number,
    title: string,
    body: string,
    user: UserRelation,
    replyCommentId: number,
    viewCount: number,
    isLocked: boolean,
    isSticky: boolean,
    isSubscribed: boolean,
    replyUser: UserRelation,
    isLiked: boolean,
    repliedAt: number,
    createdAt: number,
    updatedAt: number,
    likes: UserRelation[],
    categories: {
        id: number,
        name: string
    }[],
    mediaCategories: MediaRelation[]
}

export declare interface MediaTag {
    id: number,
    name: string,
    description: string,
    category: string,
    isAdult: boolean
}

export declare interface ThreadComment {
    id: number,
    user: UserRelation,
    comment: string,
    isLiked: boolean,
    createdAt: number,
    updatedAt: number,
    likes: UserRelation[],
    childComments: ThreadComment[],
    isLocked: boolean
}

export declare interface UpdateEntryOptions {
    id: number,
    mediaId: number,
    status: EntryStatus,
    score: number,
    scoreRaw: number,
    progress: number,
    progressVolumes: number,
    repeat: number,
    priority: number,
    private: boolean,
    customLists: string[],
    advancedScores: number[],
    startedAt: {
        year: number,
        month: number,
        day: number
    },
    completedAt: {
        year: number,
        month: number,
        day: number
    }
}

export declare interface UpdatedEntry {
    id: number,
    mediaId: number,
    status: EntryStatus,
    score: number,
    progress: number,
    progressVolumes: number | null,
    repeat: number,
    priority: number,
    private: boolean,
    hiddenFromStatusLists: boolean,
    customLists: string[] | null,
    startedAt: { year: number, month: number, day: number }
    completedAt: { year: number, month: number, day: number }
    notes: string | null,
    advancedScores: { Story: number, Characters: number, Visuals: number, Audio: number, Enjoyment: number }
}

export default Anilist;
