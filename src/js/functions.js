/**
* Retourne le nombre de secondes d'un string sous format mm:ss
*/
function mmSsToSecond(value) {
    const mmSs = value.split(':');
    return parseInt(mmSs[0]) * 60 + parseInt(mmSs[1]);
}

/**
 * Retourne le pourcentage de réalisation d'une musique
 */
export const getSuccessPercent = (duration, completed) => {
    if (duration && completed) {
        var durationSecond = mmSsToSecond(duration);
        var completedSecond = mmSsToSecond(completed);
        return completedSecond * 100 / durationSecond;
    } else {
        return 0;
    }
}