export function timeAgo(date:string):string {
    const now = new Date();
    const diffInMs = now.getTime() - new Date(date).getTime();

    const diffInSecs = Math.floor(diffInMs / 1000);
    const diffInMins = Math.floor(diffInSecs / 60);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSecs < 60) {
        return diffInSecs + "s";
    } else if (diffInMins < 60) {
        return diffInMins + "min";
    } else if (diffInHours < 624) {
        return diffInHours + "h";
    } else {
        return diffInDays + "days";
    }

}