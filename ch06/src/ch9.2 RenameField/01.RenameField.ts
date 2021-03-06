{
    /**
     * 요구사항: organization의 name속성을 title로 변경하고 싶음
     */
    class Organization {
        private _title: string = "";
        private _country: string = "";

        constructor(data: { title: string, country: string}) {
            this._title = data.title;
            this._country = data.country;
        }

        get title() {
            return this._title;
        }

        set title(aString) {
            this._title = aString;
        }

        get country() {
            return this._country;
        }

        set country(aCountryCode) {
            this._country = aCountryCode;
        }
    }

    function makeString(): string {
        const organization: Organization = new Organization({title: "애크미 구스베리", country: "GB"});
        return `${organization.title}: ${organization.country}`;
    }

    console.log(makeString());
}