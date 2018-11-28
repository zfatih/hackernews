export function protekloVrijeme(vrijemeUSekundama){
    if(vrijemeUSekundama<60)return Math.round(vrijemeUSekundama)+" seconds";
    vrijemeUSekundama=vrijemeUSekundama/60;
    if(vrijemeUSekundama<60)return Math.round(vrijemeUSekundama)+" minutes";
    vrijemeUSekundama=vrijemeUSekundama/60;
    if(vrijemeUSekundama<24)return Math.round(vrijemeUSekundama)+" hours";
    vrijemeUSekundama=vrijemeUSekundama/24;
    if(vrijemeUSekundama<30)return Math.round(vrijemeUSekundama)+" days";
    vrijemeUSekundama=vrijemeUSekundama/30;
    return Math.round(vrijemeUSekundama)+" months";
}