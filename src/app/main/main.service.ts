export default class MainService {
    private url: string;
      /* @ngInject */
    constructor (private $http : ng.IHttpService) {
        this.url = 'https://maps.googleapis.com/maps/api/js/PlaceService.GetPlaceDetails?2sen&100sVenetian%20Banquet%20Hall&101s10271986018794423541&callback=_xdc_._w8e2v0&token=117553';
    }

    getLocation() {
        return this.$http.get(this.url).then((data: any) => {
            return data;
        });
    }
}
