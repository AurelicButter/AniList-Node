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
     * @constructor
     * @param {String} [accessKey] - The AniList API token. If no key is provided,
     *      the user will not be able to access private information such as
     *      the authorized user's profile (if set to private).
     */
    constructor(accessKey?: string);

    /**
     * Grabs data on a studio
     * @param {String | Number} studio - The studio ID or name on AniList.
     * @return { StudioEntry }
     * @since 1.0.0
     */
    studio(studio: number | string): Promise<StudioEntry>;

    /**
     * Searchs AniList based on a specific term.
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
        : Promise<MediaSearchEntry|CharacterSearchEntry|StaffSearchEntry|StudioSearchEntry|UserSearchEntry>;
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
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifyable by the type key.
     *
     * @since 1.6.0
     */
    getRecentActivity(user: number): Promise<Array<ListActivity|TextActivity|MessageActivity>>;

    /**
     * Fetch profile information on the currently authorized user.
     * @returns { UserProfile }
     *
     * @since 1.8.0
     */
    getAuthorized(): Promise<UserProfile>;
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
     * Fetch a manga entry by its AniList ID.
     * @param { Number } id - Required. The ID tied to the AniList entry.
     * @returns { MangaEntry }
     * @since 1.0.0
     */
    manga(id: number): Promise<MangaEntry>;

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
     * Fetch a staff entry by its AniList ID or their name.
     * @param { Number|String } id - Required. The ID can either be the AniList ID or the staff's name.
     * @returns { StaffEntry }
     * @since 1.0.0
     */
    staff(id: number | string): Promise<StaffEntry>;
}

declare class Activity {

    /**
     * Get a specific AniList activity by its ID.
     * @param {Number} activityID The AniList activity ID
     * @returns { ListActivity | TextActivity | MessageActivity } Returns the activity information. Activity will either appear as:
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifyable by the type key.
     * @since 1.7.0
     */
    get(activityID: number): Promise<ListActivity|TextActivity|MessageActivity>;

    /**
     * Fetch activities from a user.
     * @param {Number} user - Required. Needs to be the user's AniList ID.
     * @param {Number} page - The page number to display
     * @param {Number} perPage - How many entries to display on one page. (Max is 25 per AniList limit)
     * @returns { Object[] } Returns a list of user activities based on the page & perPage values Contains any number of
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifyable by the type key.
     *
     * @since 1.7.0
     */
    getUserActivity(user: number, page?: number, perPage?: number): Promise<Array<ListActivity|TextActivity|MessageActivity>>;
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

declare type MediaType = 'ANIME' | 'MANGA';

declare type MediaFormat = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC' | 'MANGA' | 'NOVEL' | 'ONE_SHOT';

declare type MediaStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';

declare type MediaSeason = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';

declare type MediaSource = 'ORIGINAL' | 'MANGA' | 'LIGHT_NOVEL' | 'VISUAL_NOVEL' | 'VIDEO_GAME' | 'OTHER' | 'NOVEL' | 'DOUJINSHI' | 'ANIME';

declare type MediaSort = 'ID' | 'ID_DESC' | 'TITLE_ROMAJI' | 'TITLE_ROMAJI_DESC' | 'TITLE_ENGLISH' | 'TITLE_ENGLISH_DESC' | 'TITLE_NATIVE' | 'TITLE_NATIVE_DESC' | 'TYPE' | 'TYPE_DESC' | 'FORMAT' | 'FORMAT_DESC' | 'START_DATE' | 'START_DATE_DESC' | 'END_DATE' | 'END_DATE_DESC' | 'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODES' | 'EPISODES_DESC' | 'DURATION' | 'DURATION_DESC' | 'STATUS' | 'STATUS_DESC' | 'CHAPTERS' | 'CHAPTERS_DESC' | 'VOLUMES' | 'VOLUMES_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC';

declare type ActivitySort = 'ID' | 'ID_DESC';

declare type ActivityType = 'TEXT' | 'ANIME_LIST' | 'MANGA_LIST' | 'MESSAGE' | 'MEDIA_LIST';

declare type RecommendationRating = "NO_RATING" | "RATE_UP" | "RATE_DOWN";

declare interface FuzzyDate {
    year: number,
    month: number,
    day: number
}

declare interface ImagesSize {
    large: string,
    medium: string,
    small: string,
    color: string
}

declare interface PersonRelation {
    id: number,
    name: {
        english: string
    }
}

declare interface UserRelation {
    id: number,
    name: string
}

declare interface MediaTitle {
    english: string,
    native: string,
    romanji: string,
    userPreferred: string
}

declare interface PersonName {
    english: string,
    native: string,
    alternative: string
}

declare interface PageInfo {
    pageInfo: {
        total: number,
        currentPage: number,
        lastPage: number,
        hasNextPage: boolean,
        perPage: number,
    }
}

declare interface MediaRelation {
    id: number,
    title: MediaTitle,
    type?: MediaType
}

declare interface MediaSearchEntry extends PageInfo {
    media: [{
        id: number,
        title: MediaTitle
    }]
}

declare interface CharacterSearchEntry extends PageInfo {
    characters: PersonRelation[]
}

declare interface StaffSearchEntry extends PageInfo {
    staff: PersonRelation[]
}

declare interface StudioSearchEntry extends PageInfo {
    studios: UserRelation[]
}

declare interface UserSearchEntry extends PageInfo {
    users: UserRelation[]
}

declare interface ActivityEntry extends PageInfo {
    activities: Array<ListActivity|TextActivity|MessageActivity>,
    id: number,
    type: string,
    createdAt: number,
    likeCount: number
}

declare interface StaffEntry {
    id: number,
    name: PersonName,
    image: Media,
    description: string,
    isFavourite?: boolean,
    siteUrl: string,
    favourites: number,
    language: string,
    staffMedia: MediaRelation[],
    characters: PersonRelation[]
}

declare interface CharacterEntry {
    id: number,
    name: PersonName,
    image: Media,
    description: string,
    isFavourite?: boolean,
    siteUrl: string,
    favourites: number,
    media: MediaRelation[]
}

declare interface StudioRelation extends UserRelation {
    isAnimationStudio: boolean
}

declare interface StudioEntry extends StudioRelation {
    favourites: number,
    media: MediaRelation[],
    siteUrl: string,
    isFavourite?: boolean
}

declare interface AiringEntry {
    airingAt: number,
    timeUntilAiring: number,
    episode: number
}

declare interface Tags {
    name: string,
    isMediaSpoiler: boolean
}

declare interface StreamingEpisode {
    title: string,
    thumbnail: string,
    url: string,
    site: string
}

declare interface Ranking {
    rank: number,
    type: 'RATED'| 'POPULAR',
    context: string,
    year: number,
    season: MediaSeason
}

declare interface MediaListEntry {
    id: number,
    status: string
}

declare interface Review {
    id: number,
    score: number,
    summary: string,
    body: string
}

declare interface Stats {
    scoreDistribution: [{
        score: number,
        amount: number
    }],
    statusDistribution: [{
        status: 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED',
        amount: number
    }]
}

declare interface Trends {
    date: number,
    trending: number,
    popularity: number,
    inProgress: number
}

declare interface MediaEntry {
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
    coverImage: ImagesSize,
    bannerImage: string,
    genres: string[],
    synonyms: string[],
    averageScore: number,
    meanScore: number,
    favourites: number,
    popularity: number,
    trending: number,
    tags: Tags[],
    relations: MediaRelation,
    characters: PersonRelation,
    staff: PersonRelation,
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

declare interface AnimeEntry extends MediaEntry {
    episodes: number,
    season: MediaSeason,
    seasonYear: number,
    duration: number,
    source: MediaSource,
}

declare interface MangaEntry extends MediaEntry {
    chapters: number
    volumes: number
}

declare interface Media {
    large: string,
    medium: string
}

declare interface UserOptions {
    titleLanguage: string,
    displayAdultContent: boolean,
    airingNotifications: boolean,
    profileColor: string
}

declare interface UserMediaList {
    sectionOrder: string[],
    splitCompletedSectionByFormat: boolean,
    customLists: string[],
    advancedScoring: string[],
    advancedScoringEnabled: boolean
}

declare interface UserSetting {
    scoreFormat: string,
    rowOrder: string,
    animeList: UserMediaList,
    mamngaList: UserMediaList
}

declare interface UserFavourites {
    anime: MediaRelation[],
    manga: MediaRelation[],
    character: PersonRelation[],
    staff: PersonRelation[],
    studios: UserRelation[]
}

declare interface UserProfile extends UserRelation {
    about: string,
    avatar: Media,
    bannerImage: string,
    isFollowing: boolean,
    isBlcoekd: boolean,
    isFollower: boolean,
    bans: string,
    options: UserOptions,
    mediaListOptions: UserSetting,
    favourites: UserFavourites,
    siteUrl: string,
    donatorTier: number,
    moderatorStatus: string,
    updatedAt: number
}

declare interface UserStatsProfile extends UserProfile{
    statistics: UserStats;
}

declare interface AnimeUserEntry {
    count: number,
    meanScore: number,
    watchedTime: number
}

declare interface MangaUserEntry {
    count: number,
    meanScore: number,
    chaptersRead: number
}

declare interface AnimeUserStatuses extends AnimeUserEntry {
    status: string
}

declare interface MangaUserStatuses extends MangaUserEntry {
    status: string
}

declare interface AnimeUserFormats extends AnimeUserEntry {
    format: string
}

declare interface MangaUserFormats extends MangaUserEntry {
    format: string
}

declare interface AnimeUserLengths extends AnimeUserEntry {
    length: string
}

declare interface MangaUserLengths extends MangaUserEntry {
    length: string
}

declare interface AnimeUserReleaseYears  extends AnimeUserEntry {
    releaseYear: string
}

declare interface MangaUserReleaseYears  extends MangaUserEntry {
    releaseYear: string
}

declare interface AnimeUserStartYears extends AnimeUserEntry {
    startYear: string
}

declare interface MangaUserStartYears extends MangaUserEntry {
    startYear: string
}

declare interface AnimeUserGenres extends AnimeUserEntry {
    genre: string
}

declare interface MangaUserGenres extends MangaUserEntry {
    genre: string
}

declare interface AnimeUserTags extends AnimeUserEntry {
    tag: UserRelation
}

declare interface MangaUserTags extends MangaUserEntry {
    tag: UserRelation
}

declare interface AnimeUserCountries extends AnimeUserEntry {
    country: string
}

declare interface MangaUserCountries extends MangaUserEntry {
    country: string
}

declare interface AnimeUserVoiceActors extends AnimeUserEntry {
    voiceActor: PersonRelation
}

declare interface AnimeUserStaff extends AnimeUserEntry {
    staff: PersonRelation
}

declare interface MangaUserStaff extends MangaUserEntry {
    staff: PersonRelation
}

declare interface AnimeUserStudios extends AnimeUserEntry {
    studio: UserRelation
}

declare interface UserStatsEntry {
    meanScore: number,
    standardDeviation: number,
    count: number
}


declare interface UserStatsAnime extends UserStatsEntry{
    minutesWatched: number,
    episodesWatched: number,
    statuses: AnimeUserStatuses,
    formats: AnimeUserFormats,
    lengths: AnimeUserLengths,
    releaseYears: AnimeUserReleaseYears,
    startYears: AnimeUserStartYears,
    genres: AnimeUserGenres,
    tags: AnimeUserTags,
    countries: AnimeUserCountries,
    voiceActors: AnimeUserVoiceActors,
    staff: AnimeUserStaff,
    studios: AnimeUserStudios,
}

declare interface UserStatsManga extends UserStatsEntry {
    chaptersRead: number,
    volumesRead: number,
    statuses: MangaUserStatuses,
    formats: MangaUserFormats,
    lengths: MangaUserLengths,
    releaseYears: MangaUserReleaseYears,
    startYears: MangaUserStartYears,
    genres: MangaUserGenres,
    tags: MangaUserTags,
    countries: MangaUserCountries,
    staff: MangaUserStaff,
}

declare interface UserStats {
    anime: UserStatsAnime,
    manga: UserStatsManga
}

declare interface ListEntry {
    media: {
        id: number,
        idMal: number,
        mediaTitle: MediaTitle,
        description: string,
        format: string,
        tags: Tags[],
        startDate: number,
        endDate: number,
        genres: string[],
        isFavourite: boolean,
        isAdult: boolean,
        synonyms: string[],
        siteUrl: string,
        duration: number,
        episodes: number,
        volumes: number,
        chapters: number
    },
    status: MediaStatus,
    score: number,
    progress: number,
    progressVolumes: number,
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

declare interface UserList {
    name: string,
    isCustomList: boolean,
    isSplitCompletedList: boolean,
    status: string,
    enries: ListEntry[]
}
declare interface BaseActivity {
    id: number,
    type: string,
    progress: number,
    media: MediaRelation,
    createdAt: number,
    likeCount: number,
    replies: {
        id: number,
        text: string
    }
}

declare interface ListActivity extends BaseActivity {
    status: string
}

declare interface TextActivity extends BaseActivity {
    userId: number,
    text: string,
}

declare interface MessageActivity extends BaseActivity {
    recipientId: number,
    message: string
}

declare interface MediaFilterTypes {
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

declare interface ActivityFilterTypes {
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

declare interface RecommendationList {
    media: MediaRelation,
    recommendations: RecommendationEntry[]
}

declare interface RecommendationEntry {
    id: Number,
    rating: Number,
    userRating: RecommendationRating,
    user: UserRelation,
    mediaRecommendation: MediaRelation
}

declare interface SingleRecommendation extends RecommendationEntry {
    media: MediaRelation
}

export default Anilist;
